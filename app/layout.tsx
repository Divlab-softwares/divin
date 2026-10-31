import type { Metadata } from "next";
import "./globals.css";
import {
  PERSON_NAME,
  PRIMARY_DESCRIPTION,
  PRIMARY_TITLE,
  SEO_KEYWORDS,
  SITE_NAME,
  SITE_URL,
  SOCIAL_LINKS,
} from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: PRIMARY_TITLE, template: "%s | Divin Ngana" },
  description: PRIMARY_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: PERSON_NAME, url: SITE_URL }],
  creator: PERSON_NAME,
  publisher: "DIVLAB",
  category: "technology",
  keywords: SEO_KEYWORDS,
  alternates: { canonical: "/", languages: { "fr-FR": "/" } },
  referrer: "origin-when-cross-origin",
  formatDetection: { email: false, address: false, telephone: false },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "profile",
    url: SITE_URL,
    locale: "fr_FR",
    siteName: SITE_NAME,
    title: PRIMARY_TITLE,
    description: PRIMARY_DESCRIPTION,
    firstName: "Ange Divin",
    lastName: "Ngana Nongni",
    images: [{
      url: "/assets/divin.jpg",
      width: 564,
      height: 846,
      alt: "Portrait d’Ange Divin Ngana Nongni, fondateur de DIVLAB",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: PRIMARY_TITLE,
    description: PRIMARY_DESCRIPTION,
    images: ["/assets/divin.jpg"],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
  },
  manifest: "/manifest.webmanifest",
  other: {
    "profile:first_name": "Ange Divin",
    "profile:last_name": "Ngana Nongni",
    "profile:username": "divin-ngana-33946b346",
    "geo.region": "FR-33",
    "geo.placename": "Bordeaux",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: PERSON_NAME,
  alternateName: ["Divin Ngana", "Ange Divin Ngana"],
  url: SITE_URL,
  image: `${SITE_URL}/assets/divin.jpg`,
  jobTitle: "Étudiant ingénieur en informatique et fondateur de DIVLAB",
  description: PRIMARY_DESCRIPTION,
  email: "mailto:nganadivin@gmail.com",
  homeLocation: { "@type": "Place", name: "Bordeaux, France" },
  alumniOf: [
    { "@type": "EducationalOrganization", name: "IUT de Ngaoundéré" },
    { "@type": "EducationalOrganization", name: "École Normale Supérieure et Polytechnique de Douala" },
  ],
  memberOf: { "@id": `${SITE_URL}/#divlab` },
  knowsAbout: [
    "Développement logiciel", "Next.js", "React", "Python", "Intelligence artificielle",
    "Data science", "Machine learning", "PostgreSQL", "Prisma",
  ],
  sameAs: SOCIAL_LINKS,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#divlab`,
  name: "DIVLAB",
  url: "https://divlabs-tech.com",
  logo: `${SITE_URL}/assets/divlab-logo.jpg`,
  founder: { "@id": `${SITE_URL}/#person` },
  sameAs: ["https://github.com/Divlab-softwares"],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  alternateName: ["Portfolio Divin", "Portfolio Divin Ngana"],
  description: PRIMARY_DESCRIPTION,
  inLanguage: "fr-FR",
  publisher: { "@id": `${SITE_URL}/#person` },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([personSchema, organizationSchema, websiteSchema]).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
