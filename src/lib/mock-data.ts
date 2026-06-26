import type { PortfolioProject } from "./supabase"

export const mockProjects: PortfolioProject[] = [
  {
    id: "1",
    title: "LuxeRooms – Hotel Boutique",
    slug: "luxerooms-hotel",
    description: "Elegante Buchungsplattform für ein Boutique-Hotel mit dynamischem Verfügbarkeitskalender.",
    long_description:
      "Vollständige Neuentwicklung der Online-Präsenz inklusive Buchungssystem, Zimmerübersicht und mehrsprachigem Content-Management.",
    tags: ["Next.js", "Stripe", "Supabase", "Framer Motion"],
    client: "LuxeRooms GmbH",
    url: "https://example.com",
    image_url: "https://picsum.photos/seed/luxerooms/800/450",
    featured: true,
    created_at: "2024-11-01",
  },
  {
    id: "2",
    title: "GreenMeal – Food Delivery App",
    slug: "greenmeal-app",
    description: "Moderne Bestell-Plattform für gesunde Mahlzeiten mit Echtzeit-Tracking.",
    long_description:
      "React Native App mit Next.js Web-Frontend, Echtzeit-Statusupdates, Zahlungsabwicklung und Admin-Dashboard.",
    tags: ["React", "Node.js", "WebSockets", "Stripe"],
    client: "GreenMeal AG",
    url: "https://example.com",
    image_url: "https://picsum.photos/seed/greenmeal/800/450",
    featured: true,
    created_at: "2024-09-15",
  },
  {
    id: "3",
    title: "KraftWerk – Fitnessstudio",
    slug: "kraftwerk-gym",
    description: "Mitgliederverwaltung, Kurskalender und Online-Buchung für eine Fitnessstudio-Kette.",
    long_description:
      "Multi-Standort-Plattform mit Member-App, Kurs-Buchungssystem, Trainer-Profilen und automatisierten Mitgliedschafts-E-Mails.",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Resend"],
    client: "KraftWerk Fitness GmbH",
    url: "https://example.com",
    image_url: "https://picsum.photos/seed/kraftwerk/800/450",
    featured: true,
    created_at: "2024-07-22",
  },
  {
    id: "4",
    title: "ArchitekturBüro Meier",
    slug: "architektur-meier",
    description: "Minimalistisches Portfolio mit Projekt-Galerie und Kontaktformular.",
    long_description:
      "Elegante Präsentations-Website mit animierter Bildergalerie, PDF-Download-Funktion und SEO-optimierten Projektseiten.",
    tags: ["Next.js", "Framer Motion", "Tailwind"],
    client: "Architekturbüro Meier & Partner",
    url: "https://example.com",
    image_url: "https://picsum.photos/seed/architektur/800/450",
    featured: false,
    created_at: "2024-05-10",
  },
]
