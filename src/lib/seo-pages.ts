// Inhalte der Branchen-/SEO-Unterseiten (Vorlage: nexuzo-growth/seiten, an die bestätigten
// Fakten angepasst: Preise ohne MwSt., Komplett-Paket, Lieferzeit 1–2 Wochen, Zahlung nach Probe-Website).
// `html` ist eigener, statischer Inhalt und wird im Seiten-Layout als Fließtext gerendert.

export type SeoFaq = { q: string; a: string }

export type SeoPage = {
  slug: string
  title: string
  description: string
  crumb: string
  eyebrow: string
  h1: string
  lead: string
  html: string
  steps: { title: string; text: string }[]
  priceIntro: string
  faq: SeoFaq[]
  ctaTitle: string
  ctaText: string
  article?: { datePublished: string; dateModified: string }
}

export const seoPages: SeoPage[] = [
  {
    "slug": "website-gastronomie-duesseldorf",
    "title": "Webdesign Gastronomie Düsseldorf – Websites | Nexuzo",
    "description": "Webdesign für Gastronomie in Düsseldorf: Websites für Restaurant, Café, Imbiss und Foodtruck mit Speisekarte, Google Maps und Anruf-Button. Festpreis.",
    "crumb": "Webdesign Gastronomie Düsseldorf",
    "eyebrow": "Webdesign Gastronomie Düsseldorf",
    "h1": "Webdesign für Gastronomie in Düsseldorf",
    "lead": "Wir bauen Websites für Restaurants, Cafés, Imbisse und Foodtrucks in Düsseldorf. Individuell gestaltet, schnell auf dem Handy und mit allem, was Gäste vor dem Besuch wissen wollen.",
    "steps": [
      {
        "title": "Kennenlernen",
        "text": "Wir kommen bei Ihnen vorbei oder sprechen per Telefon bzw. WhatsApp. Sie erzählen, was Ihre Gäste oder Kunden auf der Website finden sollen."
      },
      {
        "title": "Probe-Website",
        "text": "Wir bauen vorab eine kostenlose, unverbindliche Probe-Website mit Ihren echten Inhalten. So sehen Sie das Ergebnis, bevor Sie sich entscheiden."
      },
      {
        "title": "Feinschliff",
        "text": "Sie sagen, was geändert werden soll. Wir passen Texte, Bilder und Aufbau an, bis es stimmt. Bezahlt wird erst, wenn Ihnen die Website gefällt."
      },
      {
        "title": "Live & übergeben",
        "text": "Wir richten Domain, Hosting und SSL ein, verknüpfen die Seite mit Ihrem Google-Unternehmensprofil und übergeben alle Zugänge."
      }
    ],
    "priceIntro": "Für die meisten Gastronomiebetriebe reicht ein schlankes Paket: Startseite, Speisekarte und Kontakt mit Anfahrt. Wer Reservierung, mehrere Sprachen oder mehr Unterseiten braucht, landet eher bei Pro oder Premium. Was Websites für Restaurants am Markt allgemein kosten, erklärt unser <a href=\"/ratgeber/was-kostet-eine-restaurant-website\">Kosten-Ratgeber</a>.",
    "faq": [
      {
        "q": "Was kostet eine Website für meinen Gastronomiebetrieb?",
        "a": "Unsere Festpreise beginnen bei 199 € für das Starter-Paket. Pro gibt es ab 399 €, Premium ab 699 € und Komplett ab 899 €. Welches Paket passt, hängt von der Zahl der Seiten und den Funktionen ab. Alle Details stehen auf der Preisseite."
      },
      {
        "q": "Kann ich meine Speisekarte später ändern lassen?",
        "a": "Ja. Änderungen an Speisekarte, Preisen oder Öffnungszeiten übernehmen wir im Rahmen unserer Pflegepakete ab 19 € pro Monat inklusive Hosting und Domain. Sie schicken uns die Änderung, zum Beispiel per WhatsApp, und wir setzen sie um."
      },
      {
        "q": "Muss ich vorher etwas bezahlen?",
        "a": "Nein. Wir stellen Ihnen zuerst die Probe-Website vor. Bezahlt wird erst, wenn Ihnen die Website gefällt. Gefällt sie Ihnen nicht, zahlen Sie nichts."
      },
      {
        "q": "Brauche ich Fotos und Texte?",
        "a": "Eigene Fotos von Gerichten und Räumen sind ideal. Wenn noch keine da sind, besprechen wir gemeinsam, wie wir mit dem vorhandenen Material starten."
      },
      {
        "q": "Kommen Sie auch persönlich vorbei?",
        "a": "Ja, in Düsseldorf kommen wir gern zu Ihnen in den Laden. Das Gespräch ist unverbindlich."
      },
      {
        "q": "Wie schnell ist die Website online?",
        "a": "In der Regel in 1–2 Wochen, bei allen Paketen. Voraussetzung ist, dass Texte, Fotos und Infos wie Speisekarte oder Öffnungszeiten vorliegen. Dabei helfen wir gern."
      }
    ],
    "ctaTitle": "Sehen Sie Ihre Website, bevor Sie zahlen",
    "ctaText": "Schreiben Sie uns kurz, wie Ihr Betrieb heißt und wo er liegt. Wir melden uns und besprechen, wie Ihre Probe-Website aussehen kann.",
    "html": "<div class=\"container prose\">\n<h2>Warum Gastronomie eine eigene Website braucht</h2>\n<p>Wer abends in Bilk, Flingern oder Pempelfort etwas essen gehen will, sucht auf dem Handy. Gäste schauen sich die Speisekarte an, prüfen, ob heute geöffnet ist, und tippen dann auf „Anrufen“ oder „Route“. Findet man nur einen alten Eintrag auf einem Bewertungsportal oder ein Instagram-Profil ohne Öffnungszeiten, ist der Gast schnell beim Nachbarn.</p>\n<p>Eine eigene Website gehört Ihnen. Sie bestimmen, welche Fotos zu sehen sind, welche Preise gelten und wie man Sie erreicht. Und Google bekommt eine klare Quelle für Ihre Adresse, Ihre Öffnungszeiten und Ihr Angebot.</p>\n<h2>Was auf eine Gastronomie-Website gehört</h2>\n<ul>\n<li><strong>Speisekarte als echter Text</strong>, nicht als unscharfes PDF. So ist sie auf dem Handy lesbar und wird von Google gefunden. Auf Wunsch mit QR-Code für den Tisch oder das Schaufenster.</li>\n<li><strong>Öffnungszeiten</strong> gut sichtbar, inklusive Ruhetag und Feiertagshinweis.</li>\n<li><strong>Anruf- und WhatsApp-Button</strong>, damit Reservierung oder Vorbestellung mit einem Fingertipp klappt.</li>\n<li><strong>Google Maps und Anfahrt</strong>, gern mit Hinweis auf Bahnhaltestelle oder Parkmöglichkeiten.</li>\n<li><strong>Gute Fotos</strong> von Gerichten und Räumen. Sie sind oft wichtiger als jeder Text.</li>\n<li><strong>Impressum und Datenschutz</strong>, denn beides ist für geschäftliche Websites Pflicht.</li>\n</ul>\n<p>Je nach Betrieb kommen Extras dazu: ein Reservierungs- oder Bestellsystem, Mittagstisch, Catering-Anfrage, mehrere Sprachen oder ein Standortplan beim Foodtruck.</p>\n<h2>Für welche Betriebe wir bauen</h2>\n</div><div class=\"container\">\n<div class=\"grid\">\n<div class=\"card\"><span class=\"tag\">Restaurant</span><h3><a href=\"/restaurant-website-erstellen-lassen\">Restaurant-Website</a></h3><p>Speisekarte, Reservierung, Mittagstisch und Raum für Ihre Geschichte.</p></div>\n<div class=\"card\"><span class=\"tag\">Imbiss</span><h3><a href=\"/imbiss-doener-website\">Imbiss, Döner &amp; Kiosk</a></h3><p>Kompakte Seite mit Karte, Preisen und Vorbestellung per Telefon.</p></div>\n<div class=\"card\"><span class=\"tag\">Foodtruck</span><h3><a href=\"/foodtruck-website\">Foodtruck-Website</a></h3><p>Wo stehen Sie heute? Standortplan, Events und Catering-Anfragen.</p></div>\n<div class=\"card\"><span class=\"tag\">Café</span><h3><a href=\"/cafe-friseur-website\">Café-Website</a></h3><p>Frühstückskarte, Kuchen der Woche und Atmosphäre in Bildern.</p></div>\n</div>\n</div><div class=\"container prose\" style=\"margin-top:28px\">\n<h2>Warum Nexuzo</h2>\n<p>Wir sind ein kleines Team aus Düsseldorf und kommen gern persönlich vorbei. Wir arbeiten ohne Baukasten und ohne fertige Vorlagen: Jede Seite wird für den jeweiligen Betrieb gestaltet und programmiert. Das macht sie schnell und übersichtlich. Und weil Sie vorab eine Probe-Website sehen können, wissen Sie genau, was Sie bekommen, bevor Sie bezahlen.</p>\n</div>"
  },
  {
    "slug": "restaurant-website-erstellen-lassen",
    "title": "Restaurant-Website erstellen lassen in Düsseldorf | Nexuzo",
    "description": "Restaurant-Website erstellen lassen in Düsseldorf: Speisekarte, Reservierung, Öffnungszeiten und Google Maps, individuell gestaltet. Festpreis ab 199 €.",
    "crumb": "Restaurant-Website erstellen lassen",
    "eyebrow": "Für Restaurants in Düsseldorf",
    "h1": "Restaurant-Website erstellen lassen in Düsseldorf",
    "lead": "Eine Website, die Gäste an den Tisch bringt: mit lesbarer Speisekarte, aktuellen Öffnungszeiten, Reservierung per Anruf oder WhatsApp und dem direkten Weg zu Ihnen.",
    "steps": [
      {
        "title": "Kennenlernen",
        "text": "Wir kommen bei Ihnen vorbei oder sprechen per Telefon bzw. WhatsApp. Sie erzählen, was Ihre Gäste oder Kunden auf der Website finden sollen."
      },
      {
        "title": "Probe-Website",
        "text": "Wir bauen vorab eine kostenlose, unverbindliche Probe-Website mit Ihren echten Inhalten. So sehen Sie das Ergebnis, bevor Sie sich entscheiden."
      },
      {
        "title": "Feinschliff",
        "text": "Sie sagen, was geändert werden soll. Wir passen Texte, Bilder und Aufbau an, bis es stimmt. Bezahlt wird erst, wenn Ihnen die Website gefällt."
      },
      {
        "title": "Live & übergeben",
        "text": "Wir richten Domain, Hosting und SSL ein, verknüpfen die Seite mit Ihrem Google-Unternehmensprofil und übergeben alle Zugänge."
      }
    ],
    "priceIntro": "Eine typische Restaurant-Website mit Startseite, Speisekarte, Über-uns und Kontakt passt meist ins Starter- oder Pro-Paket. Ein Reservierungssystem oder Mehrsprachigkeit besprechen wir individuell. Einen ehrlichen Marktüberblick gibt unser Ratgeber <a href=\"/ratgeber/was-kostet-eine-restaurant-website\">Was kostet eine Website für ein Restaurant?</a>",
    "faq": [
      {
        "q": "Wie viel kostet es, eine Restaurant-Website erstellen zu lassen?",
        "a": "Bei uns beginnen die Festpreise bei 199 € (Starter), 399 € (Pro), 699 € (Premium) und 899 € (Komplett). Der genaue Preis hängt vom Umfang ab und steht vorher fest."
      },
      {
        "q": "Kann ich ein Reservierungssystem einbinden?",
        "a": "Ja. Einfach geht es per Anruf- oder WhatsApp-Button. Ein Online-Reservierungssystem ist nach Absprache möglich, etwa im Premium-Paket."
      },
      {
        "q": "Wie aktualisiere ich die Speisekarte?",
        "a": "Sie schicken uns die Änderung, und wir setzen sie im Rahmen der Pflegepakete um. Ein eigenes Redaktionssystem zum Selbstbearbeiten bauen wir nicht."
      },
      {
        "q": "Wird meine Website bei Google gefunden?",
        "a": "Wir legen die technischen Grundlagen: saubere Struktur, schnelle Ladezeiten, Sitemap und klare Angaben zu Adresse und Küche. Eine Platzierung kann niemand seriös garantieren."
      },
      {
        "q": "Kann die Website mehrsprachig sein?",
        "a": "Ja, zum Beispiel Deutsch und Englisch. Im Komplett-Paket ist eine zweisprachige Website bereits enthalten."
      },
      {
        "q": "Wie schnell ist die Website online?",
        "a": "In der Regel in 1–2 Wochen, bei allen Paketen. Voraussetzung ist, dass Texte, Fotos und Infos wie Speisekarte oder Öffnungszeiten vorliegen. Dabei helfen wir gern."
      }
    ],
    "ctaTitle": "Ihr Restaurant online, so wie es wirklich ist",
    "ctaText": "Erzählen Sie uns kurz von Ihrem Restaurant. Wir zeigen Ihnen eine Probe-Website, und Sie entscheiden danach.",
    "html": "<div class=\"container prose\">\n<h2>Was Gäste auf Ihrer Restaurant-Website suchen</h2>\n<p>Die meisten Besucher einer Restaurant-Website haben eine ganz konkrete Frage: Was gibt es, was kostet es, ist heute offen, und wie komme ich hin? Eine gute Seite beantwortet genau das in wenigen Sekunden, auch auf einem kleinen Handy-Bildschirm und mit schwachem Netz.</p>\n<p>Deshalb planen wir jede Restaurant-Website vom Gast aus. Ganz oben steht, was Sie besonders macht, darunter folgen Speisekarte, Öffnungszeiten und Kontakt. Der Anruf-Button bleibt beim Scrollen erreichbar.</p>\n<h2>Diese Bausteine setzen wir für Restaurants um</h2>\n</div><div class=\"container\">\n<div class=\"grid\">\n<div class=\"card\"><h3>Speisekarte als Text</h3><p>Gegliedert nach Vorspeisen, Hauptgerichten, Getränken. Allergene und vegetarische Gerichte klar gekennzeichnet. Kein PDF zum Zoomen.</p></div>\n<div class=\"card\"><h3>Mittagstisch &amp; Aktionen</h3><p>Ein eigener Bereich für Wochenkarte, Saisongerichte oder Veranstaltungen.</p></div>\n<div class=\"card\"><h3>Reservierung</h3><p>Per Anruf- oder WhatsApp-Button, per Formular oder über ein Reservierungssystem nach Absprache.</p></div>\n<div class=\"card\"><h3>Anfahrt &amp; Maps</h3><p>Karte, Adresse, nächste Haltestelle und Hinweise zum Parken.</p></div>\n<div class=\"card\"><h3>QR-Code-Speisekarte</h3><p>Ein QR-Code für Tisch und Schaufenster, der direkt auf Ihre Online-Speisekarte führt.</p></div>\n<div class=\"card\"><h3>Google-Grundlagen</h3><p>Saubere Struktur, schnelle Ladezeit und Verknüpfung mit Ihrem Google-Unternehmensprofil.</p></div>\n</div>\n</div><div class=\"container prose\" style=\"margin-top:28px\">\n<h2>Individuell statt Baukasten</h2>\n<p>Mit Baukästen kann man eine Restaurant-Website auch selbst bauen. In der Praxis fehlt im Restaurantalltag aber meist die Zeit, und viele Vorlagen sehen sich sehr ähnlich. Wir gestalten Ihre Seite passend zu Ihrem Haus, ob italienische Trattoria, Steakhaus oder Familienrestaurant mit Mittagstisch. Die Website gehört Ihnen, und beim Launch übergeben wir alle Zugänge.</p>\n<p>Wichtig für Düsseldorf: Viele Gäste suchen mit Stadtteil, etwa „Restaurant Oberkassel“ oder „Essen gehen Unterbilk“. Wir sorgen dafür, dass Adresse, Stadtteil und Küche auf der Seite klar benannt sind, damit Google Sie richtig einordnen kann. Wie Sie bei Google erscheinen, hängt außerdem von Ihrem Unternehmensprofil und Ihren Bewertungen ab. Dabei beraten wir Sie gern.</p>\n<p>Sie betreiben eher einen Imbiss oder ein Schnellrestaurant? Dann passt unsere Seite <a href=\"/imbiss-doener-website\">Website für Imbiss und Döner</a> besser.</p>\n</div>"
  },
  {
    "slug": "imbiss-doener-website",
    "title": "Imbiss-Website erstellen lassen: Döner & Kiosk | Nexuzo",
    "description": "Imbiss-Website erstellen lassen: für Döner, Pommes, Pizza und Kiosk in Düsseldorf. Speisekarte, Öffnungszeiten, Anruf-Button und Maps. Ab 199 €.",
    "crumb": "Website für Imbiss, Döner & Kiosk",
    "eyebrow": "Imbiss · Döner · Kiosk",
    "h1": "Imbiss-Website erstellen lassen: für Döner, Pommes und Kiosk",
    "lead": "Ihre Kunden wollen wissen: Was gibt es, was kostet es, ist offen? Eine schlanke Website beantwortet das sofort und bringt Anrufe für die Vorbestellung.",
    "steps": [
      {
        "title": "Kennenlernen",
        "text": "Wir kommen bei Ihnen vorbei oder sprechen per Telefon bzw. WhatsApp. Sie erzählen, was Ihre Gäste oder Kunden auf der Website finden sollen."
      },
      {
        "title": "Probe-Website",
        "text": "Wir bauen vorab eine kostenlose, unverbindliche Probe-Website mit Ihren echten Inhalten. So sehen Sie das Ergebnis, bevor Sie sich entscheiden."
      },
      {
        "title": "Feinschliff",
        "text": "Sie sagen, was geändert werden soll. Wir passen Texte, Bilder und Aufbau an, bis es stimmt. Bezahlt wird erst, wenn Ihnen die Website gefällt."
      },
      {
        "title": "Live & übergeben",
        "text": "Wir richten Domain, Hosting und SSL ein, verknüpfen die Seite mit Ihrem Google-Unternehmensprofil und übergeben alle Zugänge."
      }
    ],
    "priceIntro": "Für einen Imbiss, Dönerladen oder Kiosk reicht in den meisten Fällen das Starter-Paket mit einer bis drei Seiten. Preisänderungen auf der Karte übernehmen wir über ein Pflegepaket.",
    "faq": [
      {
        "q": "Lohnt sich eine Website für einen kleinen Imbiss?",
        "a": "Ja, wenn Kunden Sie online suchen und anrufen sollen. Eine kompakte Seite mit Karte, Öffnungszeiten und Anruf-Button ist oft schon genug und kostet bei uns ab 199 €."
      },
      {
        "q": "Kann ich Bestellungen über die Website annehmen?",
        "a": "Am einfachsten über einen Anruf- oder WhatsApp-Button zur Vorbestellung. Ein kleines Online-Bestellsystem mit bis zu 30 Produkten und Zahlung per PayPal oder Karte ist im Komplett-Paket ab 899 € enthalten."
      },
      {
        "q": "Was passiert, wenn sich meine Preise ändern?",
        "a": "Sie schicken uns die neuen Preise, und wir ändern die Karte im Rahmen eines Pflegepakets ab 19 € pro Monat inklusive Hosting und Domain."
      },
      {
        "q": "Ich bin schon bei Lieferdiensten. Brauche ich trotzdem eine Website?",
        "a": "Eine eigene Website ergänzt die Plattformen. Dort bestimmen Sie selbst, was zu sehen ist, und Kunden können Sie direkt anrufen."
      },
      {
        "q": "Machen Sie auch Websites für Kioske?",
        "a": "Ja. Für einen Kiosk stehen meist Öffnungszeiten, Sortiment und Lage im Mittelpunkt."
      },
      {
        "q": "Wie schnell ist die Website online?",
        "a": "In der Regel in 1–2 Wochen, bei allen Paketen. Voraussetzung ist, dass Texte, Fotos und Infos wie Speisekarte oder Öffnungszeiten vorliegen. Dabei helfen wir gern."
      }
    ],
    "ctaTitle": "Ihr Imbiss verdient mehr als einen alten Branchenbuch-Eintrag",
    "ctaText": "Schicken Sie uns Namen und Adresse Ihres Ladens. Wir melden uns und zeigen Ihnen, wie Ihre Seite aussehen kann.",
    "html": "<div class=\"container prose\">\n<h2>Warum auch ein Imbiss eine Website braucht</h2>\n<p>Viele Imbisse und Dönerläden leben von Stammkunden und Laufkundschaft. Trotzdem wird heute fast immer zuerst gesucht: „Döner in der Nähe“, „Pommes Bilk“ oder „Kiosk offen“. Wer dann keine eigene Seite hat, taucht nur mit dem, was andere über ihn schreiben, auf. Oder gar nicht.</p>\n<p>Eine eigene Website muss dafür nicht groß sein. Eine einzige, gut gemachte Seite reicht oft: Karte mit Preisen, Öffnungszeiten, Adresse mit Karte und ein großer Button zum Anrufen.</p>\n<h2>Das braucht eine Imbiss-Website wirklich</h2>\n<ul>\n<li><strong>Speisekarte mit Preisen</strong>: Döner, Dürüm, Lahmacun, Pommes, Currywurst, Pizza, Getränke. Übersichtlich und auf dem Handy gut lesbar.</li>\n<li><strong>Anruf-Button für die Vorbestellung</strong>: Kunden bestellen telefonisch vor und holen ab. Auf Wunsch auch per WhatsApp.</li>\n<li><strong>Öffnungszeiten</strong>: gerade bei langen Abenden oder Wochenend-Zeiten wichtig.</li>\n<li><strong>Google Maps</strong>: damit man Sie direkt findet, auch zum Abholen.</li>\n<li><strong>Hinweise zu Zahlarten</strong>, zum Beispiel ob Kartenzahlung möglich ist.</li>\n<li><strong>Link zu Lieferdiensten</strong>, falls Sie dort gelistet sind. Direkt bei Ihnen bestellen sollen Kunden aber auch können.</li>\n</ul>\n<h2>Auch für Kioske und kleine Läden</h2>\n<p>Ein Kiosk oder Büdchen hat andere Schwerpunkte: Öffnungszeiten, Sortiment wie Getränke, Snacks, Zeitschriften oder Paketannahme und die genaue Lage. Auch dafür reicht meist eine kompakte Seite. Kleine Geschäfte wie Buchläden betreuen wir ebenfalls.</p>\n<h2>Günstig, aber nicht von der Stange</h2>\n<p>Wir wissen, dass ein Imbiss knapp kalkuliert. Deshalb gibt es bei uns Festpreise ohne Überraschungen, und Sie bezahlen erst, wenn Ihnen die kostenlose Probe-Website gefällt. Die Seite wird trotzdem für Ihren Laden gestaltet, mit Ihren Fotos, Ihren Farben und Ihrer Karte. Kein Baukasten-Template, das man schon zehnmal gesehen hat.</p>\n<p>Sie haben ein größeres Restaurant mit Tischreservierung? Dann lesen Sie weiter bei <a href=\"/restaurant-website-erstellen-lassen\">Restaurant-Website erstellen lassen</a>.</p>\n</div>"
  },
  {
    "slug": "foodtruck-website",
    "title": "Foodtruck-Website erstellen lassen – mit Standorten | Nexuzo",
    "description": "Foodtruck-Website erstellen lassen: Standortplan, Speisekarte, Events, Catering-Anfrage und WhatsApp-Vorbestellung. Aus Düsseldorf, Festpreis ab 199 €.",
    "crumb": "Foodtruck-Website",
    "eyebrow": "Für Foodtrucks und Streetfood",
    "h1": "Foodtruck-Website erstellen lassen",
    "lead": "Ihre Gäste fragen vor allem eines: Wo steht ihr heute? Wir bauen Foodtruck-Websites mit Standortplan, Speisekarte, Event-Terminen und einem direkten Draht für Catering-Anfragen.",
    "steps": [
      {
        "title": "Kennenlernen",
        "text": "Wir kommen bei Ihnen vorbei oder sprechen per Telefon bzw. WhatsApp. Sie erzählen, was Ihre Gäste oder Kunden auf der Website finden sollen."
      },
      {
        "title": "Probe-Website",
        "text": "Wir bauen vorab eine kostenlose, unverbindliche Probe-Website mit Ihren echten Inhalten. So sehen Sie das Ergebnis, bevor Sie sich entscheiden."
      },
      {
        "title": "Feinschliff",
        "text": "Sie sagen, was geändert werden soll. Wir passen Texte, Bilder und Aufbau an, bis es stimmt. Bezahlt wird erst, wenn Ihnen die Website gefällt."
      },
      {
        "title": "Live & übergeben",
        "text": "Wir richten Domain, Hosting und SSL ein, verknüpfen die Seite mit Ihrem Google-Unternehmensprofil und übergeben alle Zugänge."
      }
    ],
    "priceIntro": "Eine Foodtruck-Website mit Startseite, Karte, Standortplan und Catering-Anfrage passt häufig ins Starter- oder Pro-Paket. Ein eigener Event-Kalender oder ein Buchungssystem ist nach Absprache im Premium-Paket möglich.",
    "faq": [
      {
        "q": "Wie zeige ich meine wechselnden Standorte auf der Website?",
        "a": "Wir bauen einen festen Wochenplan in die Seite ein und verlinken für tagesaktuelle Standorte auf Ihren Instagram-Kanal. Andere Lösungen, etwa einen eigenen Kalender, besprechen wir gern."
      },
      {
        "q": "Kann ich über die Website Catering-Anfragen bekommen?",
        "a": "Ja. Wir bauen ein Anfrageformular oder einen WhatsApp-Button für Events, Hochzeiten und Firmenfeiern ein."
      },
      {
        "q": "Was kostet eine Foodtruck-Website?",
        "a": "Unsere Festpreise beginnen bei 199 €. Welches Paket passt, hängt von Seitenanzahl und Funktionen ab. Alle Pakete stehen auf der Preisseite."
      },
      {
        "q": "Bauen Sie auch für Foodtrucks außerhalb von Düsseldorf?",
        "a": "Ja. Persönliche Termine bieten wir im Raum Düsseldorf an, alles andere klappt auch per Telefon oder WhatsApp."
      },
      {
        "q": "Wie schnell ist die Website online?",
        "a": "In der Regel in 1–2 Wochen, bei allen Paketen. Voraussetzung ist, dass Texte, Fotos und Infos wie Speisekarte oder Öffnungszeiten vorliegen. Dabei helfen wir gern."
      }
    ],
    "ctaTitle": "Damit Ihre Gäste Sie immer finden",
    "ctaText": "Schreiben Sie uns, wie Ihr Truck heißt und wo Sie meistens stehen. Wir zeigen Ihnen eine Probe-Website, bezahlt wird erst danach.",
    "html": "<div class=\"container prose\">\n<h2>Ein Foodtruck braucht eine andere Website</h2>\n<p>Ein Restaurant hat eine feste Adresse. Ein Foodtruck nicht. Deshalb ist die wichtigste Information auf Ihrer Website, wann Sie wo stehen. Danach kommen Karte, Bilder und die Möglichkeit, Sie für ein Event oder eine Firmenfeier zu buchen. Gerade dieses Catering-Geschäft kommt oft über Google und die eigene Website.</p>\n<h2>Diese Funktionen bauen wir für Foodtrucks</h2>\n</div><div class=\"container\">\n<div class=\"grid\">\n<div class=\"card\"><h3>Standortplan</h3><p>Feste Wochentermine als übersichtlicher Plan, dazu die aktuellen Standorte über Ihren Instagram-Kanal.</p></div>\n<div class=\"card\"><h3>Speisekarte</h3><p>Ihre Gerichte mit Preisen, vegetarische und vegane Optionen klar markiert.</p></div>\n<div class=\"card\"><h3>Events &amp; Märkte</h3><p>Kommende Termine auf Festivals, Märkten oder Streetfood-Events.</p></div>\n<div class=\"card\"><h3>Catering-Anfrage</h3><p>Formular oder WhatsApp-Button für Hochzeiten, Firmenfeiern und private Feste.</p></div>\n<div class=\"card\"><h3>Vorbestellung</h3><p>Per WhatsApp oder Anruf, damit es in der Mittagspause schneller geht.</p></div>\n<div class=\"card\"><h3>Galerie</h3><p>Fotos vom Truck, vom Essen und von Events. Sie verkaufen mehr als jeder Text.</p></div>\n</div>\n</div><div class=\"container prose\" style=\"margin-top:28px\">\n<h2>Standort-Updates ohne Aufwand</h2>\n<p>Viele Foodtrucks posten ihren Tagesstandort ohnehin auf Instagram. Das nutzen wir: Die Website zeigt Ihren festen Wochenplan und verweist für tagesaktuelle Änderungen auf Ihren Kanal. So müssen Sie nichts doppelt pflegen. Ändert sich der feste Plan, passen wir ihn über ein Pflegepaket an. Wenn Sie mehr brauchen, etwa einen Kalender, den Sie selbst füllen, besprechen wir das im Premium-Paket.</p>\n<h2>Beispiel aus Düsseldorf: Milonga Foodtruck</h2>\n<p>Für den <a href=\"https://milonga-foodtruck.de\" rel=\"noopener\" target=\"_blank\">Milonga Foodtruck</a> mit argentinischer Küche haben wir eine Website mit Speisekarte, Standorten, Events und Vorbestellung per WhatsApp gebaut. Gäste finden dort alles selbst, ohne nachfragen zu müssen. Schauen Sie sich die Seite gern auf dem Handy an, denn dort wird sie am meisten genutzt.</p>\n<h2>Nicht nur für Düsseldorf</h2>\n<p>Wir sitzen in Düsseldorf und kommen im Raum Düsseldorf gern persönlich vorbei. Eine Foodtruck-Website können wir aber auch für Trucks aus anderen Städten umsetzen. Das Gespräch läuft dann per Telefon oder WhatsApp.</p>\n</div>"
  },
  {
    "slug": "cafe-friseur-website",
    "title": "Website für Café & Friseur erstellen lassen | Nexuzo",
    "description": "Website für Café oder Friseur erstellen lassen in Düsseldorf: Karte, Preisliste, Online-Termin, Öffnungszeiten und WhatsApp-Button. Festpreis ab 199 €.",
    "crumb": "Website für Café & Friseur",
    "eyebrow": "Café · Friseur · Barbershop",
    "h1": "Website für Café und Friseur erstellen lassen",
    "lead": "Cafés und Friseursalone leben von Stammkunden und Empfehlungen. Eine eigene Website zeigt Neukunden, was Sie anbieten, was es kostet und wie man vorbeikommt oder einen Termin bekommt.",
    "steps": [
      {
        "title": "Kennenlernen",
        "text": "Wir kommen bei Ihnen vorbei oder sprechen per Telefon bzw. WhatsApp. Sie erzählen, was Ihre Gäste oder Kunden auf der Website finden sollen."
      },
      {
        "title": "Probe-Website",
        "text": "Wir bauen vorab eine kostenlose, unverbindliche Probe-Website mit Ihren echten Inhalten. So sehen Sie das Ergebnis, bevor Sie sich entscheiden."
      },
      {
        "title": "Feinschliff",
        "text": "Sie sagen, was geändert werden soll. Wir passen Texte, Bilder und Aufbau an, bis es stimmt. Bezahlt wird erst, wenn Ihnen die Website gefällt."
      },
      {
        "title": "Live & übergeben",
        "text": "Wir richten Domain, Hosting und SSL ein, verknüpfen die Seite mit Ihrem Google-Unternehmensprofil und übergeben alle Zugänge."
      }
    ],
    "priceIntro": "Für ein Café oder einen Salon reicht oft das Starter-Paket mit Startseite, Karte bzw. Preisliste und Kontakt. Mit Team-Seite, Galerie und Statistiken passt Pro. Ein eigenes Buchungssystem gehört ins Premium-Paket.",
    "faq": [
      {
        "q": "Kann ich auf der Friseur-Website Online-Termine anbieten?",
        "a": "Ja. Wir können Ihr bestehendes Buchungstool einbinden. Ein eigenes Buchungssystem ist nach Absprache im Premium-Paket möglich."
      },
      {
        "q": "Was kostet eine Website für ein Café oder einen Friseur?",
        "a": "Unsere Festpreise beginnen bei 199 € (Starter). Pro gibt es ab 399 €, Premium ab 699 € und Komplett ab 899 €. Die Details stehen auf der Preisseite."
      },
      {
        "q": "Kann ich meine Preise und Öffnungszeiten ändern lassen?",
        "a": "Ja, über unsere Pflegepakete ab 19 € pro Monat inklusive Hosting und Domain. Sie schicken uns die Änderung, wir setzen sie um."
      },
      {
        "q": "Kann ich mein Instagram einbinden?",
        "a": "Ja. Wir verlinken Ihr Profil gut sichtbar und können ausgewählte Bilder auf der Website zeigen."
      },
      {
        "q": "Brauche ich professionelle Fotos?",
        "a": "Gute Fotos helfen sehr. Sie müssen aber nicht vom Profi sein. Wir besprechen gemeinsam, was Sie schon haben und was fehlt."
      },
      {
        "q": "Wie schnell ist die Website online?",
        "a": "In der Regel in 1–2 Wochen, bei allen Paketen. Voraussetzung ist, dass Texte, Fotos und Infos wie Speisekarte oder Öffnungszeiten vorliegen. Dabei helfen wir gern."
      }
    ],
    "ctaTitle": "Mehr Gäste im Café, mehr Termine im Salon",
    "ctaText": "Schreiben Sie uns kurz, um welchen Betrieb es geht. Wir melden uns und zeigen Ihnen eine Probe-Website, bevor Sie etwas bezahlen.",
    "html": "<div class=\"container prose\">\n<h2>Website für Ihr Café</h2>\n<p>Wer ein Café sucht, sucht vor allem eine Stimmung: Wie sieht es drinnen aus, gibt es Frühstück, kann man dort arbeiten, gibt es Hafermilch? Fotos sind hier wichtiger als lange Texte. Eine Café-Website sollte deshalb schnell zeigen, wie es bei Ihnen ist, und die praktischen Fragen direkt darunter beantworten.</p>\n<ul>\n<li><strong>Karte</strong> für Frühstück, Kaffee, Kuchen und kleine Gerichte, auf Wunsch mit QR-Code für den Tisch.</li>\n<li><strong>Öffnungszeiten</strong>, inklusive Wochenend-Brunch oder Sonderzeiten.</li>\n<li><strong>Atmosphäre in Bildern</strong>: Räume, Terrasse, Gebäck, Kaffeebar.</li>\n<li><strong>Anfahrt mit Google Maps</strong> und Hinweis auf WLAN, Plätze draußen oder Barrierefreiheit, wenn es das bei Ihnen gibt.</li>\n<li><strong>Anfragen</strong> für Tischreservierung, Kuchenbestellung oder kleine Feiern per Anruf oder WhatsApp.</li>\n</ul>\n<h2>Website für Friseur und Barbershop</h2>\n<p>Beim Friseur geht es vor allem um zwei Dinge: Was kostet ein Schnitt, und wann bekomme ich einen Termin? Je weniger Klicks bis zur Buchung, desto besser.</p>\n<ul>\n<li><strong>Preisliste</strong> für Damen, Herren, Kinder, Farbe und Bart, übersichtlich und ohne PDF.</li>\n<li><strong>Online-Termin</strong>: Wir binden Ihr bestehendes Buchungstool ein oder setzen nach Absprache ein eigenes Buchungssystem im Premium-Paket um. Für den Anfang reicht oft ein WhatsApp- oder Anruf-Button.</li>\n<li><strong>Team und Leistungen</strong>, damit Kunden wissen, wer sie erwartet.</li>\n<li><strong>Vorher-nachher-Bilder</strong> und Arbeiten aus Ihrem Salon, gern verknüpft mit Ihrem Instagram-Profil.</li>\n<li><strong>Öffnungszeiten und Lage</strong>, inklusive Hinweis auf Termine ohne Voranmeldung, wenn Sie das anbieten.</li>\n</ul>\n<h2>Individuell statt Baukasten</h2>\n<p>Baukästen haben fertige Vorlagen für Cafés und Friseure, aber dann sieht Ihre Seite aus wie viele andere. Wir gestalten sie passend zu Ihrem Laden, mit Ihren Fotos und Farben, und programmieren sie so, dass sie auf dem Handy schnell lädt.</p>\n<p>Ihr Café bietet auch warme Küche an? Dann lohnt ein Blick auf <a href=\"/restaurant-website-erstellen-lassen\">Restaurant-Website erstellen lassen</a> oder die Übersicht <a href=\"/website-gastronomie-duesseldorf\">Webdesign für Gastronomie in Düsseldorf</a>.</p>\n</div>"
  },
  {
    "slug": "ratgeber/was-kostet-eine-restaurant-website",
    "title": "Was kostet eine Website für ein Restaurant? Ratgeber 2026",
    "description": "Was kostet eine Website für ein Restaurant? Kostenspannen für Baukasten, Freelancer und Agentur, laufende Kosten und vergessene Posten im Überblick.",
    "crumb": "Was kostet eine Restaurant-Website?",
    "eyebrow": "Ratgeber · Stand Oktober 2026",
    "h1": "Was kostet eine Website für ein Restaurant?",
    "lead": "Die ehrliche Antwort: zwischen fast nichts und mehreren tausend Euro. Hier sehen Sie, wovon der Preis abhängt, welche Spannen Marktübersichten nennen und welche laufenden Kosten dazukommen.",
    "steps": [
      {
        "title": "Kennenlernen",
        "text": "Wir kommen bei Ihnen vorbei oder sprechen per Telefon bzw. WhatsApp. Sie erzählen, was Ihre Gäste oder Kunden auf der Website finden sollen."
      },
      {
        "title": "Probe-Website",
        "text": "Wir bauen vorab eine kostenlose, unverbindliche Probe-Website mit Ihren echten Inhalten. So sehen Sie das Ergebnis, bevor Sie sich entscheiden."
      },
      {
        "title": "Feinschliff",
        "text": "Sie sagen, was geändert werden soll. Wir passen Texte, Bilder und Aufbau an, bis es stimmt. Bezahlt wird erst, wenn Ihnen die Website gefällt."
      },
      {
        "title": "Live & übergeben",
        "text": "Wir richten Domain, Hosting und SSL ein, verknüpfen die Seite mit Ihrem Google-Unternehmensprofil und übergeben alle Zugänge."
      }
    ],
    "priceIntro": "Unsere Pakete im Überblick. Welches für Ihr Restaurant passt, klären wir im kostenlosen Erstgespräch.",
    "faq": [
      {
        "q": "Was kostet eine einfache Restaurant-Website?",
        "a": "Laut aktuellen Marktübersichten reichen die Spannen von wenigen hundert Euro mit Baukasten und Eigenleistung bis zu mehreren tausend Euro bei Freelancern und Agenturen. Bei Nexuzo beginnen Festpreise bei 199 €."
      },
      {
        "q": "Welche laufenden Kosten hat eine Restaurant-Website?",
        "a": "Mindestens Domain und Hosting. Dazu kommt Pflege, wenn Sie Änderungen nicht selbst machen. Sellwerk nennt etwa 5–20 € pro Jahr für die Domain und 5–15 € pro Monat für einfaches Hosting."
      },
      {
        "q": "Ist ein Baukasten günstiger?",
        "a": "Bei den direkten Kosten oft ja. Dafür investieren Sie eigene Zeit in Aufbau und Pflege, und die monatlichen Gebühren laufen dauerhaft weiter."
      },
      {
        "q": "Warum sind Agenturpreise so unterschiedlich?",
        "a": "Sie hängen vom Umfang, von Funktionen wie Reservierung oder Shop, von Texten und Fotos und vom Stundensatz ab. Vergleichen Sie Angebote deshalb immer nach Leistung, nicht nur nach Preis."
      },
      {
        "q": "Was ist bei Nexuzo im Preis enthalten?",
        "a": "Individuelles Design, Umsetzung fürs Handy, Kontaktformular und Grundstruktur für Google, je nach Paket mehr. Die vollständige Liste steht auf der Preisseite."
      },
      {
        "q": "Wie schnell ist die Website online?",
        "a": "In der Regel in 1–2 Wochen, bei allen Paketen. Voraussetzung ist, dass Texte, Fotos und Infos wie Speisekarte oder Öffnungszeiten vorliegen. Dabei helfen wir gern."
      }
    ],
    "ctaTitle": "Lieber konkret als theoretisch?",
    "ctaText": "Schicken Sie uns Name und Adresse Ihres Restaurants. Wir sagen Ihnen, welches Paket passt, und zeigen eine Probe-Website, bevor Sie zahlen.",
    "html": "<div class=\"container prose\">\n<h2>Kurz zusammengefasst</h2>\n<p>Wie viel eine Restaurant-Website kostet, hängt vor allem davon ab, <strong>wer sie baut</strong> und <strong>was sie können soll</strong>. Eine einfache Seite mit Speisekarte, Öffnungszeiten und Kontakt ist deutlich günstiger als eine Seite mit Online-Reservierung, Bestellsystem und mehreren Sprachen. Zu den einmaligen Kosten kommen immer laufende Kosten für Domain, Hosting und Pflege.</p>\n<h2>Kostenspannen am Markt</h2>\n<p>Feste Marktpreise gibt es nicht. Die folgenden Werte stammen aus zwei aktuellen Übersichten deutscher Anbieter und sind Richtwerte (meist netto angegeben), keine amtliche Statistik.</p>\n</div><div class=\"container\">\n<div class=\"table-wrap\">\n<table>\n<thead><tr><th>Weg</th><th>Einmalig</th><th>Laufend</th><th>Quelle</th></tr></thead>\n<tbody>\n<tr><td>Baukasten (z. B. Wix, Jimdo)</td><td>0–500 €, dafür viel eigene Arbeitszeit</td><td>15–40 € / Monat</td><td>Sellwerk</td></tr>\n<tr><td>Freelancer</td><td>800–5.000 €</td><td>20–60 € / Monat</td><td>Sellwerk</td></tr>\n<tr><td>Freelancer (typische 5-Seiten-Website)</td><td>2.000–4.000 €</td><td>Wartung 50–150 € / Monat</td><td>alloq</td></tr>\n<tr><td>Kleine Agentur</td><td>2.500–8.000 €</td><td>40–120 € / Monat</td><td>Sellwerk</td></tr>\n<tr><td>Agentur</td><td>5.000–25.000 €</td><td>50–250 € / Monat</td><td>Sellwerk</td></tr>\n</tbody>\n</table>\n</div>\n</div><div class=\"container prose\">\n<p>Für eine typische Restaurant-Website braucht man meist nicht das obere Ende dieser Spannen. Die hohen Werte betreffen eher Unternehmensseiten mit vielen Unterseiten, Shop-Funktionen oder aufwendigen Schnittstellen.</p>\n<h2>Laufende Kosten</h2>\n<ul>\n<li><strong>Domain</strong>: laut Sellwerk etwa 5–20 € pro Jahr.</li>\n<li><strong>Hosting</strong>: einfaches Shared Hosting laut Sellwerk etwa 5–15 € pro Monat, gemanagtes Hosting mehr.</li>\n<li><strong>SSL-Zertifikat</strong>: oft kostenlos im Hosting enthalten.</li>\n<li><strong>Pflege</strong>: Änderungen an Speisekarte, Preisen und Öffnungszeiten, Updates und Sicherheit. Entweder Sie machen das selbst, oder Sie zahlen dafür einen monatlichen Betrag.</li>\n</ul>\n<h2>Diese Posten werden oft vergessen</h2>\n<ul>\n<li><strong>Fotos</strong>: Gute Bilder von Gerichten und Räumen machen den größten Unterschied. Ein Fotograf kostet extra, Handyfotos bei Tageslicht sind ein guter Anfang.</li>\n<li><strong>Texte</strong>: Wer schreibt die Speisekarte, die Über-uns-Seite und die Beschreibungen? Bei vielen Angeboten ist das nicht inklusive.</li>\n<li><strong>Reservierungs- und Bestellsysteme</strong>: Externe Anbieter berechnen oft monatliche Gebühren oder Provisionen.</li>\n<li><strong>Rechtstexte</strong>: Impressum und Datenschutzerklärung sind für geschäftliche Websites Pflicht.</li>\n<li><strong>Änderungen</strong>: Wie teuer ist es, die Speisekarte zu aktualisieren? Das sollte vorher feststehen.</li>\n</ul>\n<h2>Worauf Sie beim Angebot achten sollten</h2>\n<ul>\n<li>Steht ein <strong>Festpreis</strong> im Angebot, und ist klar, was enthalten ist und was nicht?</li>\n<li>Gehören Ihnen die <strong>Domain und die Website</strong>, und bekommen Sie alle Zugänge?</li>\n<li>Was kostet die <strong>Pflege pro Monat</strong>, und wie schnell ist sie kündbar?</li>\n<li>Ist die Seite <strong>fürs Handy gebaut</strong> und schnell? Testen Sie Referenzen selbst auf Ihrem Telefon.</li>\n<li>Gibt es <strong>echte Referenzen</strong> aus der Gastronomie, die Sie anklicken können?</li>\n</ul>\n<h2>Und was kostet es bei Nexuzo?</h2>\n<p>Wir sind ein kleines Team aus Düsseldorf und haben uns auf Websites für Gastronomie und lokale Betriebe spezialisiert. Unsere Festpreise beginnen bei <strong>199 € (Starter)</strong>, <strong>399 € (Pro)</strong>, <strong>699 € (Premium)</strong> und <strong>899 € (Komplett, inkl. kleinem Online-Shop)</strong>. Pflege inklusive Hosting und Domain gibt es optional ab 19 € pro Monat, monatlich kündbar. Texte und Fotos sind laut unserer Leistungsbeschreibung nicht automatisch enthalten. Das besprechen wir vorher offen. Bezahlt wird erst, wenn Ihnen die kostenlose Probe-Website gefällt. In der Regel ist die Website in 1–2 Wochen online.</p>\n<p>Wie wir für Restaurants arbeiten, lesen Sie auf <a href=\"/restaurant-website-erstellen-lassen\">Restaurant-Website erstellen lassen</a>, die Übersicht für alle Betriebe unter <a href=\"/website-gastronomie-duesseldorf\">Webdesign für Gastronomie in Düsseldorf</a>.</p>\n<h2>Quellen</h2>\n<ul class=\"small\">\n<li>Sellwerk: <a href=\"https://sellwerk.de/wissenswert/was-kostet-eine-website\" rel=\"noopener\" target=\"_blank\">Was kostet eine Website für KMU? Preise und Beispiele</a> (17.08.2026, abgerufen am 20.10.2026)</li>\n<li>alloq: <a href=\"https://alloq.digital/de/blog/homepage-erstellen-lassen-kosten/\" rel=\"noopener\" target=\"_blank\">Homepage erstellen lassen: Kosten im Vergleich</a> (aktualisiert am 24.09.2026, abgerufen am 20.10.2026)</li>\n<li>SumUp: <a href=\"https://www.sumup.com/de-de/wachsen/marketing/restaurant-website/\" rel=\"noopener\" target=\"_blank\">Tipps für die Erstellung Ihrer Restaurant-Website</a> (Inhalte einer Restaurant-Website, abgerufen am 20.10.2026)</li>\n</ul>\n</div>",
    "article": {
      "datePublished": "2026-10-20",
      "dateModified": "2026-10-20"
    }
  }
]

export function getSeoPage(slug: string): SeoPage {
  const page = seoPages.find((p) => p.slug === slug)
  if (!page) throw new Error(`Unknown SEO page: ${slug}`)
  return page
}

export const seoLinks: { href: string; label: string }[] = [
  { href: "/website-gastronomie-duesseldorf", label: "Webdesign Gastronomie Düsseldorf" },
  { href: "/restaurant-website-erstellen-lassen", label: "Restaurant-Website" },
  { href: "/imbiss-doener-website", label: "Imbiss, Döner & Kiosk" },
  { href: "/foodtruck-website", label: "Foodtruck-Website" },
  { href: "/cafe-friseur-website", label: "Café & Friseur" },
  { href: "/ratgeber/was-kostet-eine-restaurant-website", label: "Ratgeber: Kosten Restaurant-Website" },
]
