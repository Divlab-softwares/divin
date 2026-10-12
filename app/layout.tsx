import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://divin.divlabs-tech.com"),
  title: "Divin Ngana — Ingénieur, créateur et fondateur de DIVLAB",
  description:
    "Portfolio d’Ange Divin Ngana Nongni : développement logiciel, intelligence artificielle, data et produits numériques.",
  keywords: ["Divin Ngana", "DIVLAB", "informatique", "intelligence artificielle", "Next.js", "data science"],
  openGraph: {
    title: "Divin Ngana — Je transforme des idées en produits utiles",
    description: "Projets, parcours et univers technique d’Ange Divin Ngana Nongni.",
    images: ["/assets/divin.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
