import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{
    url: SITE_URL,
    lastModified: new Date("2026-10-30"),
    changeFrequency: "monthly",
    priority: 1,
    alternates: { languages: { fr: SITE_URL } },
    images: [`${SITE_URL}/assets/divin.jpg`, `${SITE_URL}/assets/divlab-logo.jpg`],
  }];
}
