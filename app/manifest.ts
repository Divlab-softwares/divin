import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Portfolio Divin Ngana",
    short_name: "Divin Ngana",
    description: "Portfolio d’Ange Divin Ngana Nongni : informatique, intelligence artificielle, data science et projets DIVLAB.",
    start_url: "/",
    display: "standalone",
    background_color: "#080b10",
    theme_color: "#080b10",
    lang: "fr-FR",
    categories: ["portfolio", "technology", "education"],
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" }],
  };
}
