# GitHub Copilot Instructions

## 📖 Contexte du projet
- **Environnement** : Visual Studio Code
- **Langages** : JavaScript (ES6+), HTML5, CSS3
- **Frameworks / bibliothèques courantes** : Vanilla JS
- **Objectif** : Code maintenable, accessible, responsive, et performant.

---

## 📌 Règles JavaScript
- **Syntaxe** : ES6+ (modules `import`/`export`, arrow functions, async/await).
- **Nommage** : `camelCase` pour variables et fonctions, `PascalCase` pour classes et composants.
- **Sécurité** : Valider les entrées utilisateur, éviter le `innerHTML` direct.
- **Performance** : Privilégier le lazy loading des modules, déstructuration, spread operator.
- **Documentation** : Utiliser JSDoc pour tout module exporté publiquement.

---

## 🏷️ Règles HTML
- Structure sémantique : `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`.
- Accessibilité (a11y) : attributs `alt` pour les images, `aria-*` si nécessaire, contraste WCAG AA.
- SEO de base : balises `<title>`, `<meta name="description">`, balises `<h1>`–`<h6>` ordonnées.

---

## 🎨 Règles CSS
- **Organisation** : méthodologie CSS Modules.
- **Responsive** : Mobile-first, media queries basées sur `min-width`.
- **Flexbox & Grid** : privilégier ces modules pour la mise en page.
- **Variables CSS** : déclarer les couleurs, espacements et typographies dans `:root`.
- **Préprocesseur** (optionnel) : less pour gérer les mixins, fonctions, et imports.

---

## ✅ Exemples de prompt pour Copilot
- « Génère une fonction JavaScript asynchrone qui récupère des données d’une API REST et gère les erreurs. »
- « Crée le squelette HTML d’une page accessible avec header, nav, main et footer. »
- « Écris des styles CSS en BEM pour une grille responsive de cartes produits. »

---

## 🚫 À ne pas faire
- **Inline styles** dans le HTML.
- **Variables globales** non encapsulées.
- Utilisation de **jQuery** pour de la manipulation DOM simple (préférer Vanilla JS).
- Ignorer les **erreurs ESLint** ou warnings de Prettier.

---

## 🔗 Références utiles
- Prettier : https://prettier.io
- ESLint Airbnb : https://github.com/airbnb/javascript
- BEM : http://getbem.com
- WCAG : https://www.w3.org/WAI/standards-guidelines/wcag/

