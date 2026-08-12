type PiIconProps = {
  name: string;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  "aria-hidden"?: boolean | "true" | "false";
  "aria-label"?: string;
};

const sizeClass = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-xl",
  xl: "text-2xl",
} as const;

/** PrimeIcons wrapper — uses the PrimeNG / PrimeIcons icon font. */
export function PiIcon({
  name,
  className = "",
  size = "md",
  "aria-hidden": ariaHidden = true,
  "aria-label": ariaLabel,
}: PiIconProps) {
  const icon = name.startsWith("pi-") ? name : `pi-${name}`;
  return (
    <i
      className={`pi ${icon} ${sizeClass[size]} ${className}`.trim()}
      aria-hidden={ariaHidden}
      aria-label={ariaLabel}
    />
  );
}
