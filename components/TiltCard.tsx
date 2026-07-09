"use client";

import { useRef } from "react";

type Props = {
  className?: string;
  /** max tilt in degrees */
  max?: number;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

/**
 * A card that tilts toward the cursor with a glossy glare that tracks the
 * pointer (Balatro-style foil wobble). The glare is driven by CSS vars
 * --mx / --my (consumed by .card-glare in globals.css).
 */
export default function TiltCard({
  className = "",
  max = 10,
  children,
  ...rest
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${-py * max * 2}deg) rotateY(${px * max * 2}deg) translateY(-6px) scale(1.02)`;
    // glare follows the cursor
    el.style.setProperty("--mx", `${(px + 0.5) * 100}%`);
    el.style.setProperty("--my", `${(py + 0.5) * 100}%`);
    // foil rays shift just slightly with the cursor — like light on a glossy card
    const rayAngle = 26 + px * 16 - py * 9;
    el.style.setProperty("--ray-angle", `${rayAngle}deg`);
  };

  const reset = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "";
    // glide the gloss back to its neutral resting position
    el.style.setProperty("--mx", "50%");
    el.style.setProperty("--my", "50%");
    el.style.setProperty("--ray-angle", "26deg");
  };

  return (
    <div
      ref={ref}
      className={`card ${className}`}
      onMouseMove={onMove}
      onMouseLeave={reset}
      {...rest}
    >
      <span className="card-glare" aria-hidden="true" />
      {children}
    </div>
  );
}
