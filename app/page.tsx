import Portfolio from "@/components/Portfolio";
import { PERSON_NAME, SITE_URL } from "@/lib/seo";

const projectSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Projets sélectionnés de Divin Ngana et DIVLAB",
  itemListElement: [
    ["ARGUS / AI SHIELD", "Cybersécurité citoyenne assistée par intelligence artificielle"],
    ["Athenis", "Suite de gestion pour PME"],
    ["DIVLAB Training", "Plateforme de formation"],
    ["DIVLAB AI", "Assistant conversationnel"],
    ["Echo-local", "Projet contre la désinformation"],
    ["Genuka Trust", "Avis intelligents pour PME"],
    ["Sous nos pieds", "Prototype interactif autour de l’eau, du sol et des arbres"],
  ].map(([name, description], index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "CreativeWork",
      name,
      description,
      creator: { "@type": "Person", name: PERSON_NAME, url: SITE_URL },
    },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema).replace(/</g, "\\u003c") }}
      />
      <Portfolio />
    </>
  );
}
