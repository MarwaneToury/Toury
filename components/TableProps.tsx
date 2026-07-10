/**
 * Face-down cards (in small, randomly-disposed groups) and chip clusters
 * scattered down the left & right gutters. They live in the page flow
 * (absolute, not fixed), so they scroll with the content — you reveal more
 * props as you scroll. Chips are big & dense near the top and thin out going
 * down. Behind content, non-interactive, clipped to the gutters, hidden on
 * narrow screens (see globals.css).
 */

type Back = "red" | "navy";
type Item =
  | { kind: "cards"; backs: Back[]; top: number; left: number; w: number; seed: number }
  | { kind: "chips"; top: number; left: number; size: number; count: number; seed: number };

function mulberry32(seed: number) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function CardBack({ back }: { back: Back }) {
  const fill = back === "red" ? "#8f2f39" : "#2f3a5f";
  return (
    <svg viewBox="0 0 70 98" width="100%" height="100%" aria-hidden="true">
      <rect x="1.5" y="1.5" width="67" height="95" rx="7" fill={fill} stroke="#efe6d0" strokeWidth="2.5" />
      <rect x="7" y="7" width="56" height="84" rx="4" fill="none" stroke="#efe6d0" strokeOpacity="0.5" strokeWidth="1.2" />
      <g fill="#efe6d0" fillOpacity="0.28">
        {[22, 40, 58, 76].map((cy) =>
          [23, 35, 47].map((cx) => (
            <path key={`${cx}-${cy}`} d={`M${cx} ${cy - 4} L${cx + 4} ${cy} L${cx} ${cy + 4} L${cx - 4} ${cy} Z`} />
          ))
        )}
      </g>
    </svg>
  );
}

/** a small group of cards tossed down near each other at random angles */
function CardGroup({ backs, w, seed }: { backs: Back[]; w: number; seed: number }) {
  const r = mulberry32(seed);
  const h = w / 0.714; // keep card aspect ratio
  return (
    <>
      {backs.map((b, i) => {
        const dx = (r() - 0.5) * w * 0.9;
        const dy = r() * h * 0.4;
        const rot = Math.round((r() - 0.5) * 64);
        return (
          <span key={i} style={{ position: "absolute", left: dx, top: dy, width: w, height: h, transform: `rotate(${rot}deg)` }}>
            <CardBack back={b} />
          </span>
        );
      })}
    </>
  );
}

const SUITS = ["♠", "♥", "♦", "♣"] as const;
const RINGS = ["#2b2b30", "#6d2f36", "#8a6a2e", "#2a3a36"];

function Chip({ suit, ring }: { suit: string; ring: string }) {
  const suitColor = suit === "♥" || suit === "♦" ? "#a6404a" : "#2b2b30";
  return (
    <svg viewBox="0 0 100 100" width="100%" height="100%" aria-hidden="true">
      <circle cx="50" cy="50" r="48" fill={ring} />
      {[0, 60, 120, 180, 240, 300].map((a) => (
        <rect key={a} x="45" y="1.5" width="10" height="13" rx="2.5" fill="#f1e8d3" transform={`rotate(${a} 50 50)`} />
      ))}
      <circle cx="50" cy="50" r="34" fill="#f1e8d3" />
      <circle cx="50" cy="50" r="39" fill="none" stroke="#f1e8d3" strokeWidth="1.6" strokeDasharray="4 4" />
      <text x="50" y="52" textAnchor="middle" dominantBaseline="central" fontSize="36" fill={suitColor}>
        {suit}
      </text>
    </svg>
  );
}

/** a pile of `count` overlapping chips */
function ChipCluster({ seed, count }: { seed: number; count: number }) {
  const r = mulberry32(seed);
  const chips = Array.from({ length: count }, () => ({
    suit: SUITS[Math.floor(r() * 4)],
    ring: RINGS[Math.floor(r() * RINGS.length)],
    x: Math.round(r() * 48),
    y: Math.round(r() * 48),
    rot: Math.round(-18 + r() * 36),
  }));
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {chips.map((c, i) => (
        <span key={i} style={{ position: "absolute", left: `${c.x}%`, top: `${c.y}%`, width: "54%", height: "54%", transform: `rotate(${c.rot}deg)` }}>
          <Chip suit={c.suit} ring={c.ring} />
        </span>
      ))}
    </div>
  );
}

// approximate full-page height (px) used to keep piles from overlapping
// vertically; conservative so any real page height stays collision-free.
const PAGE_EST = 4400;

/** One interleaved run of props down a gutter. Each pile is placed strictly
    below the previous one's footprint (near, never colliding). Chips dominate
    and are tall up top, thinning/shrinking with depth; cards fill the rest. */
function genGutter(seed: number): Item[] {
  const r = mulberry32(seed);
  const items: Item[] = [];
  let top = 2;
  while (top < 95) {
    const depth = top / 100;
    const isChips = r() < 0.88 - depth * 0.68; // chips frequent up top, rare low
    let extentPct: number;
    if (isChips) {
      const count = Math.max(1, Math.round(9 - depth * 8 + (r() - 0.5) * 2));
      const size = Math.round(140 - depth * 92);
      const left = Math.round(6 + r() * 30);
      items.push({ kind: "chips", top: +top.toFixed(1), left, size, count, seed: Math.floor(r() * 1e6) });
      extentPct = ((size * 1.05) / PAGE_EST) * 100;
    } else {
      // groups shrink with depth: 2–3 cards up top, single cards in the last sections
      const groupN = depth > 0.6 ? 1 : depth > 0.4 ? 1 + Math.round(r()) : 2 + Math.round(r());
      const backs: Back[] = Array.from({ length: groupN }, () => (r() < 0.5 ? "red" : "navy"));
      const w = Math.round(58 + r() * 16);
      const left = Math.round(8 + r() * 26);
      items.push({ kind: "cards", backs, top: +top.toFixed(1), left, w, seed: Math.floor(r() * 1e6) });
      extentPct = (((w / 0.714) * 1.4) / PAGE_EST) * 100;
    }
    // step past this pile's footprint (+ margin), widening with depth to thin out
    top += extentPct + 2.5 + depth * 12 + r() * 2;
  }
  return items;
}

const LEFT: Item[] = genGutter(1337);
const RIGHT: Item[] = genGutter(90210);

function Gutter({ items, side }: { items: Item[]; side: "left" | "right" }) {
  return (
    <div className={`tp-gutter ${side}`}>
      {items.map((it, i) =>
        it.kind === "cards" ? (
          <span key={i} className="tp-item" style={{ top: `${it.top}%`, left: `${it.left}%` }}>
            <CardGroup backs={it.backs} w={it.w} seed={it.seed} />
          </span>
        ) : (
          <span key={i} className="tp-item" style={{ top: `${it.top}%`, left: `${it.left}%`, width: it.size, height: it.size }}>
            <ChipCluster seed={it.seed} count={it.count} />
          </span>
        )
      )}
    </div>
  );
}

export default function TableProps() {
  return (
    <div className="table-props" aria-hidden="true">
      <Gutter items={LEFT} side="left" />
      <Gutter items={RIGHT} side="right" />
    </div>
  );
}
