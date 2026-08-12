/** Subtle circuit / grid tech atmosphere behind page content. */
export function TechBackdrop({
  variant = "soft",
}: {
  variant?: "soft" | "navy" | "mesh";
}) {
  const tone =
    variant === "navy"
      ? "tech-theme-navy"
      : variant === "mesh"
        ? "tech-theme-mesh"
        : "tech-theme-soft";

  return (
    <div
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${tone}`}
      aria-hidden
    >
      <div className="tech-grid" />
      <div className="tech-orb tech-orb-a" />
      <div className="tech-orb tech-orb-b" />
      <div className="tech-nodes" />
    </div>
  );
}
