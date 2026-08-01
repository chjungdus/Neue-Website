// Shared option lists for the project-inquiry form, the API route, the
// notification email, and the admin Anfragen view — one source so labels
// never drift out of sync between them.

export const projectTypeOptions = [
  { value: "landing_page", label: "Landing Page" },
  { value: "website", label: "Unternehmens-Website" },
  { value: "ecommerce", label: "Online-Shop" },
  { value: "webapp", label: "Web-App" },
  { value: "sonstiges", label: "Sonstiges" },
]

export const budgetOptions = [
  { value: "unter_2000", label: "Unter 2.000 €" },
  { value: "2000_5000", label: "2.000 – 5.000 €" },
  { value: "5000_10000", label: "5.000 – 10.000 €" },
  { value: "ueber_10000", label: "Über 10.000 €" },
]

export const timelineOptions = [
  { value: "so_schnell_wie_moeglich", label: "So schnell wie möglich" },
  { value: "1_monat", label: "Innerhalb 1 Monat" },
  { value: "2_3_monate", label: "2 – 3 Monate" },
  { value: "kein_druck", label: "Kein Zeitdruck" },
]

export const packageOptions = [
  { value: "starter", label: "Starter", price: "ab 199 €" },
  { value: "pro", label: "Pro", price: "ab 399 €" },
  { value: "premium", label: "Premium", price: "ab 699 €" },
]

function toLabelMap(options: { value: string; label: string }[]): Record<string, string> {
  return Object.fromEntries(options.map((o) => [o.value, o.label]))
}

export const projectTypeLabels = toLabelMap(projectTypeOptions)
export const budgetLabels = toLabelMap(budgetOptions)
export const timelineLabels = toLabelMap(timelineOptions)
export const packageLabels = toLabelMap(packageOptions)
