import Entwurf from "@/components/home/entwurf"
import { Zeichen, Abmachung, Leistungen, Preise } from "@/components/home/cards"
import { Referenzen, Ablauf, Fragen, Kontakt } from "@/components/home/cards-live"

// The home stack, in the order a visitor asks: what is this and can I try it
// (Entwurf) → why it matters (Zeichen) → the deal (Abmachung) → proof
// (Referenzen) → what's included (Leistungen) → cost (Preise) → how long
// (Ablauf) → objections (Fragen) → talk to us (Kontakt).
export default function HomePage() {
  return (
    <>
      <Entwurf />
      <Zeichen />
      <Abmachung />
      <Referenzen />
      <Leistungen />
      <Preise />
      <Ablauf />
      <Fragen />
      <Kontakt />
    </>
  )
}
