import type { MetadataRoute } from "next"

export const dynamic = "force-static"

const BASE_URL = "https://velqatechnologies.com"

type Entry = [path: string, changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"], priority: number]

const SERVICES = [
  "call-center",
  "customer-support",
  "email-support",
  "live-chat",
  "inbound-support",
  "technical-support",
  "multi-channel",
  "order-management",
  "order-account-management",
  "back-office",
  "back-office-operations",
  "bpo-cx-services",
  "cx-quality",
]

const INDUSTRIES = ["ecommerce", "tech-saas", "finance", "healthcare", "marketplace", "digital-products"]

const PAGES: Entry[] = [
  ["", "weekly", 1],
  ["/about", "monthly", 0.9],
  ["/services", "weekly", 0.9],
  ...SERVICES.map((s): Entry => [`/services/${s}`, "monthly", 0.8]),
  ["/industries", "weekly", 0.9],
  ...INDUSTRIES.map((i): Entry => [`/industries/${i}`, "monthly", 0.8]),
  ["/velqa-publishers", "monthly", 0.7],
  ["/careers", "weekly", 0.7],
  ["/contact", "monthly", 0.8],
  ["/privacy", "yearly", 0.3],
  ["/terms", "yearly", 0.3],
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return PAGES.map(([path, changeFrequency, priority]) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }))
}
