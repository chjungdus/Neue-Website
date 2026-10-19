import Link from "next/link"
import { Mail, Pin, WhatsApp, Instagram, TikTok } from "@/components/stack/icons"
import { ADDRESS, EMAIL, HOURS, INSTAGRAM, PHONE_DISPLAY, TIKTOK, waLink } from "@/lib/site"

const footerLinks = {
  Leistungen: [
    { href: "/leistungen#webdesign", label: "Webdesign" },
    { href: "/leistungen#relaunch", label: "Relaunch" },
    { href: "/leistungen#ablauf", label: "Ablauf" },
  ],
  Studio: [
    { href: "/portfolio", label: "Referenzen" },
    { href: "/ueber-uns", label: "Über uns" },
    { href: "/preise", label: "Preise" },
    { href: "/faq", label: "Fragen" },
    { href: "/kontakt", label: "Kontakt" },
  ],
  Rechtliches: [
    { href: "/impressum", label: "Impressum" },
    { href: "/datenschutz", label: "Datenschutz" },
    { href: "/agb", label: "AGB" },
  ],
}

/** The last card in every stack: address, links, legal. */
export default function Footer() {
  return (
    <footer className="card-slot mt-auto pb-10">
      <div className="win">
        <div className="win-bar">
          <span className="win-close" aria-hidden="true" />
          <span className="win-title pixel">Ablage</span>
          <span className="w-4 flex-none" aria-hidden="true" />
        </div>
        <div className="win-body grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" aria-label="Nexuzo Startseite" className="inline-flex">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo/nexuzo.png" alt="Nexuzo" width={176} height={32} className="h-8 w-auto" />
            </Link>
            <p className="mt-4 max-w-xs text-base">
              Webdesign aus Düsseldorf. Zwei Gründer, die Ihre Website selbst bauen.
            </p>
            <ul className="mt-6 flex flex-col gap-3 text-base">
              <li className="flex items-start gap-3">
                <Pin size={16} className="mt-1 flex-none text-ink" />
                <span>
                  {ADDRESS[0]}
                  <br />
                  {ADDRESS[1]}
                </span>
              </li>
              <li>
                <a href={waLink()} target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-3">
                  <WhatsApp size={16} />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="link inline-flex items-center gap-3 break-all">
                  <Mail size={16} />
                  {EMAIL}
                </a>
              </li>
              <li className="pl-7 text-base">{HOURS}</li>
            </ul>
            <div className="mt-6 flex gap-2">
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="btn btn-sm w-11 px-0">
                <Instagram size={18} />
              </a>
              <a href={TIKTOK} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="btn btn-sm w-11 px-0">
                <TikTok size={18} />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h2 className="pixel mb-4 text-[13px] text-ink">{category}</h2>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="link font-bold">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2 border-t-2 border-ink px-[clamp(20px,1rem+2.6vw,56px)] py-4 text-sm sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Nexuzo · Inhaber Mateo Sainz de la Maza</p>
          <p>Gebaut in Düsseldorf</p>
        </div>
      </div>
    </footer>
  )
}
