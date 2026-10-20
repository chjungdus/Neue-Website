// Landingpages pro Branche (/webdesign/[slug]). Jede Seite braucht eigenen Inhalt:
// passende Referenzen, branchentypische Funktionen und eigene Fragen. Nur
// ausgetauschte Branchennamen wertet Google als Doorway Page.

export type Branche = {
  slug: string
  /** Kurzname für Navigation und Footer */
  name: string
  metaTitle: string
  metaDescription: string
  eyebrow: string
  title: string
  intro: string
  /** Was Kunden dieser Branche auf der Website suchen */
  needsTitle: string
  needs: { title: string; body: string }[]
  features: string[]
  /** Dateistämme aus lib/references.ts */
  referenceImages: string[]
  quote?: { text: string; source: string }
  /** Empfohlenes Paket mit kurzer Begründung */
  packageHint: string
  faqs: { q: string; a: string }[]
}

export const branchen: Branche[] = [
  {
    slug: "restaurant-gastronomie",
    name: "Restaurants & Gastronomie",
    metaTitle: "Website für Restaurants, Cafés und Foodtrucks in Düsseldorf",
    metaDescription:
      "Restaurant-Website mit Speisekarte, Öffnungszeiten und Reservierung, die auf dem Handy funktioniert. Festpreis ab 199 €, bezahlt wird nach Freigabe.",
    eyebrow: "Webdesign für Gastronomie",
    title: "Eine Website, auf der Gäste die Speisekarte in zwei Sekunden finden.",
    intro:
      "Wer abends ein Restaurant sucht, steht meist schon auf der Straße und hat das Handy in der Hand. Er will drei Dinge wissen: Was gibt es, hat es offen, wie komme ich hin. Genau dafür bauen wir Ihre Website.",
    needsTitle: "Was Ihre Gäste auf der Website suchen.",
    needs: [
      {
        title: "Die Speisekarte, lesbar",
        body: "Keine PDF-Datei zum Herunterladen, sondern eine Karte, die auf dem Handy direkt lesbar ist und die wir bei neuen Gerichten schnell anpassen.",
      },
      {
        title: "Öffnungszeiten und Anfahrt",
        body: "Gut sichtbar ganz oben, mit Link zu Google Maps. Bei Foodtrucks auch der aktuelle Standort.",
      },
      {
        title: "Ein Weg zum Tisch oder zur Bestellung",
        body: "Anruf mit einem Tipp, Reservierung per WhatsApp oder Formular, oder der direkte Link zu Ihrem Lieferdienst.",
      },
    ],
    features: [
      "Speisekarte als echte Seite statt PDF",
      "Öffnungszeiten und Google-Maps-Anfahrt",
      "Reservierung per WhatsApp, Telefon oder Formular",
      "Fotos Ihrer Gerichte, schnell geladen",
      "Eintrag für Google mit Adresse und Öffnungszeiten",
      "Auf Wunsch zweisprachig",
    ],
    referenceImages: ["milonga", "essah"],
    packageHint:
      "Für die meisten Restaurants reicht das Starter-Paket ab 199 €. Mit Online-Reservierung oder mehreren Standorten empfehlen wir Pro ab 399 €.",
    faqs: [
      {
        q: "Können Sie die Speisekarte später ändern?",
        a: "Ja. Neue Gerichte oder Preise passen wir im Pflegepaket an, meist innerhalb von 24 Stunden.",
      },
      {
        q: "Brauche ich ein eigenes Reservierungssystem?",
        a: "Meist nicht. Für viele Restaurants reicht ein Anruf- oder WhatsApp-Button. Wenn Sie schon ein System wie OpenTable nutzen, binden wir es ein.",
      },
      {
        q: "Wir haben keine guten Fotos. Geht das trotzdem?",
        a: "Ja. Wir starten mit dem, was Sie haben, und sagen Ihnen ehrlich, welche Fotos sich lohnen würden. Handyfotos bei Tageslicht reichen oft schon.",
      },
    ],
  },
  {
    slug: "reinigungsfirma",
    name: "Reinigungsfirmen",
    metaTitle: "Website für Reinigungsfirmen und Gebäudereinigung",
    metaDescription:
      "Website für Ihre Reinigungsfirma, die bei Google in Ihrer Region gefunden wird und Anfragen bringt. Festpreis ab 199 €, Zahlung erst nach Freigabe.",
    eyebrow: "Webdesign für Reinigungsfirmen",
    title: "Mehr Anfragen aus Ihrer Region, direkt aufs Handy.",
    intro:
      "Wer eine Reinigungsfirma sucht, vergleicht zwei oder drei Anbieter und ruft den an, der am vertrauenswürdigsten wirkt und schnell erreichbar ist. Ihre Website muss in diesen paar Sekunden überzeugen.",
    needsTitle: "Was Ihre Kunden wissen wollen, bevor sie anrufen.",
    needs: [
      {
        title: "Machen Sie das, was ich brauche?",
        body: "Unterhaltsreinigung, Grundreinigung, Fenster, Treppenhaus, Endreinigung: jede Leistung klar beschrieben, damit Kunden sich wiederfinden.",
      },
      {
        title: "Kommen Sie zu mir?",
        body: "Ihr Einzugsgebiet mit den Orten, in denen Sie arbeiten. Das hilft Kunden und Google gleichermaßen.",
      },
      {
        title: "Kann ich Ihnen vertrauen?",
        body: "Echte Fotos von Ihrem Team, Bewertungen und ein Ansprechpartner mit Namen statt einer anonymen Firma.",
      },
    ],
    features: [
      "Eigene Abschnitte für jede Leistung",
      "Einzugsgebiet mit Ihren Orten für lokale Suchen",
      "Anruf- und WhatsApp-Button auf jeder Seite",
      "Anfrageformular mit Objektart und Fläche",
      "Platz für Bewertungen und Teamfotos",
      "Eintrag für Google mit Adresse und Einsatzgebiet",
    ],
    referenceImages: ["limpiezas"],
    quote: {
      text: "Seit der neuen Website werde ich täglich 2 Mal angerufen. Wir sind bis September ausgebucht.",
      source: "Limpiezas El Valle, Reinigungsfirma in Burgos, Spanien",
    },
    packageHint:
      "Für eine Reinigungsfirma empfehlen wir Pro ab 399 €: Dort sind mehrere Leistungsseiten und das umfassende SEO-Paket für Ihre Region enthalten.",
    faqs: [
      {
        q: "Werde ich damit bei Google in meiner Stadt gefunden?",
        a: "Wir bauen die Seite so, dass Google versteht, was Sie anbieten und wo. Garantieren kann das niemand ehrlich, aber Technik, Texte und Einzugsgebiet sind darauf ausgelegt. Ein gepflegtes Google-Unternehmensprofil gehört dazu, dabei helfen wir.",
      },
      {
        q: "Können Kunden direkt ein Angebot anfragen?",
        a: "Ja. Das Formular fragt Objektart, Fläche und gewünschte Leistung ab, damit Sie ohne Rückfrage ein Angebot schreiben können.",
      },
      {
        q: "Ich arbeite in mehreren Städten. Geht das?",
        a: "Ja. Wir zeigen Ihr Einzugsgebiet auf der Website und richten die Texte auf die Orte aus, in denen Sie tatsächlich arbeiten.",
      },
    ],
  },
  {
    slug: "friseur-kosmetik",
    name: "Friseure & Kosmetik",
    metaTitle: "Website für Friseure, Kosmetik- und Nagelstudios",
    metaDescription:
      "Website für Ihren Salon mit Preisliste, Terminbuchung und Fotos Ihrer Arbeit. Festpreis ab 199 €, bezahlt wird erst, wenn sie Ihnen gefällt.",
    eyebrow: "Webdesign für Salons",
    title: "Ihr Salon online so gepflegt wie vor Ort.",
    intro:
      "Bei Friseur, Kosmetik und Nails entscheiden Kunden mit den Augen. Sie wollen Ihre Arbeit sehen, wissen, was es kostet, und am liebsten sofort einen Termin haben. Ihre Website erledigt das, während Sie arbeiten.",
    needsTitle: "Was Kundinnen und Kunden vor dem ersten Termin sehen wollen.",
    needs: [
      {
        title: "Ihre Arbeit",
        body: "Eine Galerie mit Ihren besten Ergebnissen, die schnell lädt und auf dem Handy gut aussieht. Gerne verknüpft mit Instagram.",
      },
      {
        title: "Leistungen und Preise",
        body: "Eine klare Preisliste nimmt die Unsicherheit und spart Ihnen Fragen am Telefon.",
      },
      {
        title: "Einen Termin, ohne anzurufen",
        body: "Online-Buchung, ein bestehendes Buchungstool oder einfach ein WhatsApp-Button. Hauptsache, niemand muss warten, bis Sie zurückrufen.",
      },
    ],
    features: [
      "Galerie mit Ihren Arbeiten",
      "Übersichtliche Preisliste",
      "Terminbuchung online oder per WhatsApp",
      "Einbindung von Instagram",
      "Öffnungszeiten und Anfahrt",
      "Eintrag für Google mit Adresse und Öffnungszeiten",
    ],
    referenceImages: ["loli", "nora"],
    packageHint:
      "Für einen Salon mit Preisliste und Galerie reicht oft Starter ab 199 €. Mit eigener Online-Terminbuchung empfehlen wir Premium ab 699 €.",
    faqs: [
      {
        q: "Ich nutze schon ein Buchungstool. Können Sie das einbinden?",
        a: "Ja. Tools wie Treatwell, Planity oder Shore binden wir direkt ein, damit Kunden von Ihrer Website aus buchen.",
      },
      {
        q: "Muss ich meine Preise auf der Website zeigen?",
        a: "Nein, aber wir empfehlen es. Ab-Preise reichen schon, damit Kunden einschätzen können, ob Sie passen.",
      },
      {
        q: "Kann ich neue Fotos selbst hinzufügen?",
        a: "Am einfachsten ist es, Ihren Instagram-Feed einzubinden. Dann erscheinen neue Fotos automatisch. Größere Änderungen übernehmen wir im Pflegepaket.",
      },
    ],
  },
]

export const getBranche = (slug: string) => branchen.find((b) => b.slug === slug)
