# LégaleInk — Site de présentation du concept

Site statique de présentation du concept **LégaleInk** — solution d'affichage e-ink pour les informations légales obligatoires en entreprises et collectivités.

**Objectif** : présenter le projet à des investisseurs, partenaires technologiques et clients pilotes potentiels.

---

## Structure du projet

```
/
├── assets/
│   ├── icons/        # Icônes SVG
│   ├── images/       # Visuels et maquettes
│   └── fonts/        # Polices locales (si nécessaire)
├── css/
│   └── main.css      # Style principal (variables, composants, responsive)
├── js/
│   └── main.js       # JavaScript (nav mobile, scroll reveal, formulaire)
├── html/
│   ├── index.html    # Page d'accueil (hero + piliers + pitch investisseur)
│   ├── about.html    # À propos (mission, marché, porteur de projet)
│   ├── concept.html  # Détail technique (spécifications, architecture, roadmap)
│   ├── contact.html  # Contact (formulaire + réseaux sociaux)
│   └── privacy.html  # Mentions légales, RGPD, droits d'auteur, CGU
├── README.md
└── LICENSE.md
```

---

## Stack

| Techno | Usage |
|---|---|
| HTML5 sémantique | Structure |
| CSS3 (custom properties, grid, flexbox) | Style & responsive |
| JavaScript ES6+ vanilla | Interactivité |
| Google Fonts (Playfair Display · Spectral · Syne Mono) | Typographie |
| GitHub Pages | Hébergement |

**Aucune dépendance npm. Aucun build tool.**

---

## Déploiement GitHub Pages

1. `git clone` / fork de ce repository
2. **Settings → Pages → Source** : branche `main`, dossier root
3. URL publiée : `https://<username>.github.io/<repo>/html/index.html`

> Pour servir depuis la racine sans `/html/` dans l'URL :
> déplacer les fichiers HTML à la racine et ajuster les chemins CSS/JS.

---

## Personnalisation

### Formulaire de contact
Remplacer le `setTimeout` de simulation dans `js/main.js` :
```javascript
// Option Formspree :
const res = await fetch('https://formspree.io/f/VOTRE_ID', {
  method: 'POST',
  body: new FormData(form),
  headers: { Accept: 'application/json' }
});
```

### Couleurs (css/main.css)
```css
:root {
  --green:  #2d6a4f;   /* Couleur principale */
  --cream:  #f5f2ec;   /* Fond principal */
  --ink:    #16180f;   /* Texte / éléments foncés */
}
```

### Informations de contact
Remplacer `contact@legaleink.fr` et les placeholders dans `privacy.html` par vos coordonnées réelles.

---

## Réseaux & profils

- LinkedIn : https://www.linkedin.com/in/shamsguettaf/
- X / Twitter : https://x.com/shamsetdean
- GitHub (projet) : https://github.com/shamsetdean/sentinel
- Notion : https://abstracted-crush-f4e.notion.site/SHAMS-DEAN-286d3f1e5597815f9fdfc90d48445621

---

## Conformité

- ✅ RGPD — Politique complète, base légale de traitement, droits des personnes
- ✅ LCEN — Mentions légales obligatoires
- ✅ Droits d'auteur — Protection du concept explicitement mentionnée
- ✅ HTML sémantique — Accessibilité et SEO de base
- ✅ Formulaire — Consentement explicite RGPD avant envoi

---

## Licence

**Code source** : MIT License (voir LICENSE.md)

**Concept, contenus éditoriaux, visuels et marque « LégaleInk »** : propriété exclusive de Shams Guettaf — toute utilisation commerciale nécessite une autorisation préalable écrite.
