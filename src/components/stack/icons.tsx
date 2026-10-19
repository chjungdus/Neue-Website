// One-bit icon set, drawn on a 16px pixel grid (2px strokes), plus the WhatsApp,
// Instagram and TikTok marks. All inherit currentColor.

type IconProps = { size?: number; className?: string; title?: string }

function Pixel({ d, size = 16, className, title }: IconProps & { d: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="currentColor"
      shapeRendering="crispEdges"
      className={className}
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
    >
      {title && <title>{title}</title>}
      <path d={d} />
    </svg>
  )
}

export const ArrowRight = (p: IconProps) => (
  <Pixel {...p} d="M1 7h11v2H1zM8 3h2v2H8zM10 5h2v2h-2zM12 7h2v2h-2zM10 9h2v2h-2zM8 11h2v2H8z" />
)

export const ArrowLeft = (p: IconProps) => (
  <Pixel {...p} d="M4 7h11v2H4zM6 3h2v2H6zM4 5h2v2H4zM2 7h2v2H2zM4 9h2v2H4zM6 11h2v2H6z" />
)

export const ExternalArrow = (p: IconProps) => (
  <Pixel {...p} d="M2 4h6v2H4v6h6V9h2v5H2zM9 2h5v2H9zM12 4h2v3h-2zM10 6h2v2h-2zM8 8h2v2H8z" />
)

export const Check = (p: IconProps) => (
  <Pixel {...p} d="M1 8h2v2H1zM3 10h2v2H3zM5 12h2v2H5zM7 10h2v2H7zM9 8h2v2H9zM11 6h2v2h-2zM13 4h2v2h-2z" />
)

export const Plus = (p: IconProps) => <Pixel {...p} d="M7 2h2v12H7zM2 7h12v2H2z" />

export const Minus = (p: IconProps) => <Pixel {...p} d="M2 7h12v2H2z" />

export const Mail = (p: IconProps) => (
  <Pixel
    {...p}
    d="M1 3h14v2H1zM1 11h14v2H1zM1 5h2v6H1zM13 5h2v6h-2zM3 5h2v2H3zM5 7h2v2H5zM7 8h2v2H7zM9 7h2v2H9zM11 5h2v2h-2z"
  />
)

export const Clock = (p: IconProps) => (
  <Pixel
    {...p}
    d="M5 1h6v2H5zM3 3h2v2H3zM11 3h2v2h-2zM1 5h2v6H1zM13 5h2v6h-2zM3 11h2v2H3zM11 11h2v2h-2zM5 13h6v2H5zM7 4h2v5H7zM9 7h3v2H9z"
  />
)

export const Pin = (p: IconProps) => (
  <Pixel {...p} d="M5 1h6v2H5zM3 3h2v5H3zM11 3h2v5h-2zM6 5h4v3H6zM5 8h2v2H5zM9 8h2v2H9zM6 10h4v2H6zM7 12h2v3H7z" />
)

export const MenuLines = (p: IconProps) => <Pixel {...p} d="M1 3h14v2H1zM1 7h14v2H1zM1 11h14v2H1z" />

export const Close = (p: IconProps) => (
  <Pixel {...p} d="M2 2h2v2H2zM4 4h2v2H4zM6 6h4v4H6zM10 4h2v2h-2zM12 2h2v2h-2zM4 10h2v2H4zM2 12h2v2H2zM10 10h2v2h-2zM12 12h2v2h-2z" />
)

export function WhatsApp({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.05 21.79h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88a9.82 9.82 0 0 1 6.99 2.9 9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88zm8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.94L.06 24l6.31-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.16-3.49-8.41z" />
    </svg>
  )
}

export function Instagram({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <path d="M17.5 6.5h.01" />
    </svg>
  )
}

export function TikTok({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.27 8.27 0 004.84 1.56V6.8a4.85 4.85 0 01-1.07-.11z" />
    </svg>
  )
}
