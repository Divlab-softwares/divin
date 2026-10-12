# Portfolio Divin Ngana

Portfolio personnel construit avec Next.js, React et TypeScript.

## Lancer le projet

```bash
pnpm install
pnpm dev
```

Ouvrir ensuite `http://localhost:3000`.

## Vérifier la version de production

```bash
pnpm typecheck
pnpm build
```

Le projet utilise `output: "export"`. Après la compilation, le site statique se trouve dans le dossier `out` et peut être hébergé sur GitHub Pages, Netlify, Vercel ou tout hébergement statique.

## Modifier le contenu

- Contenu, projets et interactions : `components/Portfolio.tsx`
- Design et responsive : `app/globals.css`
- Métadonnées et référencement : `app/layout.tsx`
- Images et animations : `public/`

## Données personnelles

Le site contient un portrait, une adresse email, un lien LinkedIn et un CV téléchargeable. Vérifier ces éléments avant de rendre le dépôt public.
