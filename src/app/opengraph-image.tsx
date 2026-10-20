import { ImageResponse } from "next/og"

export const alt = "Nexuzo – Webdesign aus Düsseldorf. Festpreis ab 199 €, Zahlung nach Freigabe."
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

// Preview image for links shared on WhatsApp, LinkedIn etc.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#F6F5F1",
          color: "#0a0a0f",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 34, fontWeight: 800 }}>
          <div style={{ width: 22, height: 22, borderRadius: 999, background: "#0066FF" }} />
          Nexuzo
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 76, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2 }}>
          <span>Ihre neue Website.</span>
          <span>Bezahlt wird erst, wenn sie Ihnen gefällt.</span>
        </div>
        <div style={{ display: "flex", gap: 40, fontSize: 30, color: "rgba(10,10,15,0.65)" }}>
          <span>Webdesign aus Düsseldorf</span>
          <span style={{ color: "#0066FF", fontWeight: 700 }}>Festpreis ab 199 €</span>
          <span>Live in zwei Wochen</span>
        </div>
      </div>
    ),
    size
  )
}
