/**
 * Oversized, very faint suit watermarks bleeding off opposite corners — a
 * graphic way to fill the empty space without clutter. Fixed, tone-on-tone,
 * non-interactive, behind all content. Styling in globals.css (.suit-wm).
 */
export default function TableWatermarks() {
  return (
    <div className="suit-wm-layer" aria-hidden="true">
      <span className="suit-wm tl">♣</span>
      <span className="suit-wm tr">♦</span>
      <span className="suit-wm bl">♠</span>
      <span className="suit-wm br">♥</span>
    </div>
  );
}
