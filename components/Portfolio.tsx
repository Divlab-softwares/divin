"use client";

import { useEffect, useMemo, useState } from "react";

type Category = "Tous" | "IA" | "Web" | "Produit" | "Data";

type Project = {
  title: string;
  eyebrow: string;
  description: string;
  long: string;
  image: string;
  imageBack?: string;
  categories: Exclude<Category, "Tous">[];
  stack: string[];
  href?: string;
  github?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "DIVLAB Train",
    eyebrow: "Apprentissage et accompagnement",
    description: "Une plateforme de formation qui place la progression, l’accompagnement et l’expérience utilisateur au centre.",
    long: "Un produit Next.js de l’écosystème DIVLAB avec espaces apprenants et formateurs, abonnements, salles et mascotte comportementale.",
    image: "/assets/divlab-train.png",
    imageBack: "/assets/divlab-train.png",
    categories: ["Web", "Produit"],
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    href: "https://train.divlabs-tech.com",
    featured: true,
  },
  {
    title: "ARGUS / AI SHIELD",
    eyebrow: "Cybersécurité citoyenne assistée par IA",
    description: "Un bouclier numérique pour vérifier des contenus, comprendre les risques et signaler les menaces.",
    long: "Écosystème DIVLAB associant une application Flutter, une API FastAPI et des moteurs d’analyse pour les documents, médias, liens et signaux d’ingénierie sociale.",
    image: "/assets/argus.svg",
    imageBack: "/assets/argus-back.png",
    categories: ["IA", "Produit"],
    stack: ["Flutter", "FastAPI", "Python", "IA"],
    href: "https://argus-presentation.divlabs-tech.com",
  },
  {
    title: "SENTINELLE",
    eyebrow: "Plateforme de veille et d’alerte",
    description: "Application de lutte contre la désinformation et les derives de l'IA.",
    long: "Application de veille et d’alerte pour les contenus en ligne, avec un accent sur la détection des deepfakes et la vérification des informations. Projet réalisé avec Flutter, FastAPI et Python. Partie du projet global ARGUS / AI SHIELD, SENTINELLE est un outil de surveillance et d’alerte pour les contenus en ligne, visant à protéger les utilisateurs contre la désinformation et les menaces numériques.",
    image: "/assets/SENTINELLE.jpg",
    imageBack: "/assets/SENTINELLE-back.jpg",
    categories: ["Produit", "IA"],
    stack: ["flutter", "FastAPI", "Python", "IA"],
    github: "",
    href: "https://argus-presentation.divlabs-tech.com",
  },
  {
    title: "DIVLAB Site",
    eyebrow: "Site vitrine et portfolio",
    description: "Un site web qui présente DIVLAB, ses projets et son fondateur, avec un accent sur l’expérience utilisateur et la performance.",
    long: "Site web de DIVLAB, réalisé avec Next.js et TypeScript, mettant en avant les projets, l’expertise et le parcours du fondateur.",
    image: "/assets/divlab-site.png",
    imageBack: "/assets/divlab-site-back.png",
    categories: ["Web", "Produit"],
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    href: "https://divlabs-tech.com",
  },
  {
    title: "DIVLAB AI",
    eyebrow: "Assistant conversationnel",
    description: "Un chatbot intelligent conçu pour rendre l’assistance en ligne plus directe et plus accessible.  ( En cours de developpement )",
    long: "Projet d’assistant en ligne de DIVLAB, présenté dans le portfolio historique et disponible publiquement sur GitHub.",
    image: "/assets/divlab-ai.png",
    categories: ["IA", "Web"],
    stack: ["Next.js", "React", "IA"],
    github: "https://github.com/Divlab-softwares/DivlabAi",
  },
  {
    title: "Echo-local",
    eyebrow: "Hackathon GLOBAL YOUTH — UNESCO",
    description: "Un projet d’engagement communautaire conçu pour agir localement face à la désinformation.",
    long: "Réalisé pendant le hackathon GLOBAL YOUTH organisé par l’UNESCO, Echo-local relie information, communauté et action de proximité.",
    image: "/assets/echo-local.png",
    imageBack: "/assets/echo-local-back.png",
    categories: ["Web", "Produit"],
    stack: ["Web", "UX", "Innovation sociale"],
    github: "https://github.com/Divlab-softwares/Echo-local",
  },
  {
    title: "MobileRa",
    eyebrow: "Realite augmentee",
    description: "Un projet de dashboard AR pour les téléphones.",
    long: "Le telephone utilise le tracking AR natif du navigateur pour reconnaitre l'espace. L'utilisateur vise une surface, touche l'ecran, et le dashboard est ancre dans le monde reel.",
    image: "/assets/mobilera.png",
    imageBack: "/assets/mobilera-back.png",
    categories: ["Web", "Produit"],
    stack: ["Web", "Realite augmentee", "UX"],
    github: "https://github.com/Divlab-softwares/mobile-ra-dashoard",
    href: "https://mobilera.divlabs-tech.com",
  },
  {
    title: "Genuka Trust",
    eyebrow: "Avis intelligents pour PME",
    description: "Une approche de la confiance client fondée sur la collecte et l’exploitation intelligente des avis.",
    long: "Contribution à une solution destinée à aider les PME africaines à mieux comprendre leurs clients et améliorer leur performance.",
    image: "/assets/genuka-trust.png",
    imageBack: "/assets/genuka-trust-back.png",
    categories: ["IA", "Data", "Produit"],
    stack: ["Data", "IA", "Web"],
    github: "https://github.com/Divlab-softwares/GenukaTrust",
    href: "https://genuka-trust.vercel.app",
  },
  {
    title: "Sous nos pieds",
    eyebrow: "Prototype eau, sol et arbre",
    description: "Une expérience physique et interactive pour rendre visibles la pluie et la réponse du sol.",
    long: "Prototype mêlant données environnementales, ESP32, NeoPixels, servo et interface web pour comparer un épisode forestier observé à Mérignac.  Projet realise lors du HACKATHON dont le but etait de concevoir un POCL (Prototype d’Objet Connecté Local) pour sensibiliser à l’environnement.",
    image: "/assets/sous-nos-pieds.png",
    imageBack: "/assets/sous-nos-pieds.png",
    categories: ["Data", "Produit"],
    stack: ["ESP32", "MicroPython", "Data", "Web"],
  },
  {
    title: "Ecosystem",
    eyebrow: "Prototype d’écosystème interactif",
    description: "Une plateforme pour explorer et comprendre les interactions dans un écosystème.",
    long: "DIVLAB-training est une plateforme gratuite et open-source construite sur Next.js et Tailwind CSS, conçue pour aider les formateurs, éducateurs et créateurs de cours à offrir des expériences d'apprentissage de haute qualité tout en augmentant leurs revenus. Plutôt que d'être un simple tableau de bord administratif, DIVLAB-training fournit aux formateurs les outils dont ils ont besoin pour gérer leurs cours, engager les apprenants et créer des relations durables. En combinant les technologies web modernes avec des tableaux de bord intuitifs, elle permet aux formateurs de se concentrer sur ce qui compte vraiment : enseigner et accroître leur impact.",
    image: "/assets/ecosystem.png",
    imageBack: "/assets/ecosystem-back.png",
    categories: ["Data", "Produit"],
    stack: ["Next.js", "Python", "Data", "Web"],
    href: "https://ecosystem.divlabs-tech.com",
  },
];

const skills = [
  { name: "Développement produit", detail: "Next.js, React, TypeScript, Node.js, .NET / C#" },
  { name: "Données et intelligence artificielle", detail: "Python, R, TensorFlow, scikit-learn, analyse de données" },
  { name: "Architecture et données", detail: "PostgreSQL, SQL, Prisma, API, systèmes multi-tenant" },
  { name: "Prototypage", detail: "Du besoin au produit testable, web, mobile ou embarqué" },
];

const timeline = [
  ["Aujourd’hui", "CESI École d’ingénieurs", "Cycle ingénieur en informatique à Bordeaux — dates exactes à confirmer."],
  ["2024 — 2026", "Data science et intelligence artificielle", "Licence puis approfondissement à l’École Normale Supérieure et Polytechnique de Douala."],
  ["2024", "SYGALIN SAS", "Développement web, automatisation de remboursements et processus d’échange de matériel."],
  ["2023 — 2024", "DUT informatique", "Parcours génie logiciel à l’IUT de Ngaoundéré, obtenu avec une bonne mention."],
  ["2023", "SODECOTON", "Collecte et traitement d’enquêtes avec Sphinx V5."],
];

const mascotLines = [
  "Bienvenue dans l’atelier de Divin.",
  "Ici, une idée doit finir par fonctionner.",
  "Explorez les projets : chacun répond à un problème concret.",
  "Le code compte. L’usage réel compte encore plus.",
];

function ArrowIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
}

function ExternalIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 5h5v5M19 5l-9 9M19 13v6H5V5h6" /></svg>;
}

export default function Portfolio() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [filter, setFilter] = useState<Category>("Tous");
  const [selected, setSelected] = useState<Project | null>(null);
  const [mascotIndex, setMascotIndex] = useState(0);
  const [mascotAction, setMascotAction] = useState("welcome");
  const [copied, setCopied] = useState(false);
  const [progress, setProgress] = useState(0);

  const filtered = useMemo(
    () => projects.filter((project) => filter === "Tous" || project.categories.includes(filter)),
    [filter],
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    const onMove = (event: PointerEvent) => {
      document.documentElement.style.setProperty("--mouse-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${event.clientY}px`);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onMove, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setMascotIndex((value) => (value + 1) % mascotLines.length);
      setMascotAction("idle");
    }, 6500);
    return () => window.clearInterval(timer);
  }, []);

  const copyEmail = async () => {
    await navigator.clipboard.writeText("nganadivin@gmail.com");
    setCopied(true);
    setMascotAction("ok");
    window.setTimeout(() => setCopied(false), 2200);
  };

  const openProject = (project: Project) => {
    setSelected(project);
    setMascotAction("point");
  };

  return (
    <main>
      <div className="scroll-progress" style={{ width: `${progress}%` }} />
      <div className="cursor-aura" aria-hidden="true" />

      <header className="nav-wrap">
        <nav className="nav shell" aria-label="Navigation principale">
          <a className="brand" href="#top" aria-label="Accueil Divin Ngana">
            <span className="brand-mark">DN</span>
            <span><strong>DIVIN NGANA</strong><small>builder of useful things</small></span>
          </a>
          <div className="nav-links">
            <a href="#projets">Projets</a><a href="#expertise">Expertise</a><a href="#parcours">Parcours</a>
          </div>
          <div className="nav-actions">
            <button className="icon-button" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label="Changer de thème">
              {theme === "dark" ? "☀" : "◐"}
            </button>
            <a className="mini-cta" href="#contact">Parlons-en</a>
          </div>
        </nav>
      </header>

      <section className="hero shell" id="top">
        <div className="hero-copy reveal">
          <p className="kicker"><span className="pulse" /> Disponible pour un stage de 1 à 3 mois</p>
          <h1>Je transforme des idées ambitieuses en <em>produits utiles.</em></h1>
          <p className="hero-lead">Étudiant ingénieur, développeur et fondateur de DIVLAB. Je travaille à l’intersection du logiciel, de la donnée et de l’intelligence artificielle — avec une obsession : passer du concept à quelque chose qui fonctionne vraiment.</p>
          <div className="hero-actions">
            <a className="button primary" href="#projets">Explorer mes projets <ArrowIcon /></a>
            <a className="button ghost" href="/CV-Ange_Divin_NGANA_NONGNI.pdf" download>Télécharger mon CV</a>
          </div>
          <div className="hero-proof">
            <span><b>7+</b> projets présentés</span><span><b>3</b> terrains — web, IA, data</span><span><b>2</b> pays dans mon parcours</span>
          </div>
        </div>

        <div className="hero-visual reveal delay-1">
          <div className="portrait-card">
            <div className="portrait-frame"><img src="/assets/divin.jpg" alt="Ange Divin Ngana Nongni" /></div>
            <div className="portrait-caption"><span>ANGE DIVIN NGANA NONGNI</span><small>Bordeaux, France · Douala, Cameroun</small></div>
            <div className="orbit orbit-one">AI</div><div className="orbit orbit-two">&lt;/&gt;</div><div className="orbit orbit-three">DATA</div>
          </div>
          <div className="mascot-card" onClick={() => { setMascotIndex((mascotIndex + 1) % mascotLines.length); setMascotAction("welcome"); }}>
            <img key={mascotAction} src={`/animations/mascot/${mascotAction}.webp`} alt="Mascotte DIVLAB" />
            <div><small>DIVLAB COMPANION</small><p>{mascotLines[mascotIndex]}</p><span>Cliquez pour me faire parler</span></div>
          </div>
        </div>
      </section>

      <section className="manifesto section shell">
        <p className="section-index">01 — MANIFESTE</p>
        <div className="manifesto-grid">
          <h2>Curieux par nature.<br />Bâtisseur par choix.</h2>
          <div>
            <p>J’apprends vite, je prototype tôt et je préfère confronter une idée au réel. DIVLAB est né de cette manière de travailler : réunir la technologie, le design et la compréhension du terrain pour créer des outils qui ont une raison d’exister.</p>
            <div className="principles"><span>Comprendre avant de coder</span><span>Construire pour l’usage réel</span><span>Rester curieux, toujours</span></div>
          </div>
        </div>
      </section>

      <section className="projects section" id="projets">
        <div className="shell">
          <div className="section-heading">
            <div><p className="section-index">02 — PROJETS SÉLECTIONNÉS</p><h2>Des systèmes, pas des maquettes.</h2></div>
            <p>Chaque projet explore un problème concret : confiance numérique, gestion d’entreprise, apprentissage, donnée ou engagement citoyen.</p>
          </div>
          <div className="filters" role="group" aria-label="Filtrer les projets">
            {(["Tous", "IA", "Web", "Produit", "Data"] as Category[]).map((item) => (
              <button key={item} className={filter === item ? "active" : ""} onClick={() => setFilter(item)}>{item}</button>
            ))}
          </div>
          <div className="project-grid">
            {filtered.map((project, index) => (
              <article className={`project-card border-md ${project.featured ? "featured" : ""}`} key={project.title} onClick={() => openProject(project)} tabIndex={0} onKeyDown={(e) => e.key === "Enter" && openProject(project)}>
                <div className="project-media"><img src={project.featured ? project.imageBack : project.image} alt="" /><span className="project-number">0{index + 1}</span></div>
                <div className="project-body"><p className="eyebrow">{project.eyebrow}</p><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div><button>Voir le projet <ArrowIcon /></button></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="expertise section shell" id="expertise">
        <div className="section-heading">
          <div><p className="section-index">03 — EXPERTISE</p><h2>Une pensée produit,<br />une exécution technique.</h2></div>
          <p>Mon profil relie développement logiciel, données et IA. Je peux comprendre le besoin, structurer la solution et participer à sa réalisation.</p>
        </div>
        <div className="skills-layout">
          <div className="skill-list">{skills.map((skill, index) => <div className="skill-row" key={skill.name}><span>0{index + 1}</span><div><h3>{skill.name}</h3><p>{skill.detail}</p></div><b>↗</b></div>)}</div>
          <div className="tool-cloud"><p>MON TERRAIN DE JEU</p>{["Next.js", "React", "TypeScript", "Python", "C# / .NET", "FastAPI", "TensorFlow", "scikit-learn", "PostgreSQL", "Prisma", "Flutter", "Git", "ESP32", "R"].map((tool, i) => <span style={{ "--i": i } as React.CSSProperties} key={tool}>{tool}</span>)}</div>
        </div>
      </section>

      <section className="timeline-section section" id="parcours">
        <div className="shell">
          <div className="section-heading"><div><p className="section-index">04 — PARCOURS</p><h2>Apprendre. Appliquer. Recommencer.</h2></div><p>Du Cameroun à Bordeaux, mon parcours suit le même fil : consolider les fondamentaux, expérimenter et élargir le niveau d’exigence.</p></div>
          <div className="timeline">{timeline.map(([date, title, text], index) => <article key={title}><div className="timeline-node"><span>{index + 1}</span></div><p>{date}</p><h3>{title}</h3><span>{text}</span></article>)}</div>
        </div>
      </section>

      <section className="contact section shell" id="contact">
        <div className="contact-panel">
          <div><p className="section-index">05 — CONTACT</p><h2>Vous avez un problème intéressant ?<br /><em>Construisons la suite.</em></h2><p>Stage, produit numérique, expérimentation IA ou simple échange technique : je suis toujours partant pour une conversation concrète.</p></div>
          <div className="contact-actions"><a className="button primary" href="mailto:nganadivin@gmail.com">M’écrire <ArrowIcon /></a><button className="button ghost" onClick={copyEmail}>{copied ? "Email copié ✓" : "Copier mon email"}</button><div className="socials"><a href="https://www.linkedin.com/in/divin-ngana-33946b346" target="_blank">LinkedIn <ExternalIcon /></a><a href="https://github.com/Divlab-softwares" target="_blank">GitHub <ExternalIcon /></a><a href="https://divlabs-tech.com" target="_blank">DIVLAB <ExternalIcon /></a></div></div>
          <img className="contact-mascot" src="/animations/mascot/builder.webp" alt="Mascotte DIVLAB en mode constructeur" />
        </div>
      </section>

      <footer className="footer shell"><div className="brand"><span className="brand-mark">DN</span><span><strong>DIVIN NGANA</strong><small>Conçu avec précision et curiosité.</small></span></div><p>© {new Date().getFullYear()} — Bordeaux ↔ Douala</p><a href="#top">Retour en haut ↑</a></footer>

      {selected && <div className="modal-backdrop " onClick={() => setSelected(null)} role="presentation"><article className="project-modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-label={selected.title}><button className="modal-close" onClick={() => setSelected(null)} aria-label="Fermer">×</button><img src={selected.imageBack ? selected.imageBack : selected.image} alt="" /><p className="eyebrow">{selected.eyebrow}</p><h2>{selected.title}</h2><p>{selected.long}</p><div className="tags">{selected.stack.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="modal-links">{selected.github && <a className="button primary" href={selected.github} target="_blank">Voir sur GitHub <ExternalIcon /></a>}{selected.href && <a className="button ghost" href={selected.href} target="_blank">Visiter <ExternalIcon /></a>}</div></article></div>}
    </main>
  );
}
