# 🌟 Site web de l'INTER-ASSO Lannion

Ce projet est spécifiquement dédié au développement et à la gestion du site de l'inter-asso. Il s'adresse exclusivement aux étudiants de l'IUT de Lannion, qui sont les seuls à participer à sa conception, à sa mise en œuvre et à son suivi.

## 🚀 Technologies utilisées

Ce site est construit avec [Astro](https://astro.build/), un framework moderne qui génère des sites ultra-rapides en HTML, CSS et JavaScript. Astro permet également d'intégrer facilement des composants d'autres frameworks (React, Vue, Svelte, etc.) si besoin.

### Stack technique :
- **[Astro](https://astro.build/)** - Framework principal
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS pour le style
- **[Lucide Icons](https://lucide.dev/)** - Bibliothèque d'icônes

Pour en savoir plus sur Astro : https://astro.build/

## 📋 Prérequis

Avant de commencer, assure-toi d'avoir installé :
- **Node.js** (version 18 ou supérieure) - [Télécharger ici](https://nodejs.org/)
- **npm** ou **pnpm** (inclus avec Node.js)
- **Git** - [Télécharger ici](https://git-scm.com/)

## 🛠️ Installation du projet

### 1. Clone le repository

```bash
git clone https://github.com/pierraw1/inter-asso_website.git
cd site-web
```

### 2. Installe les dépendances

```bash
npm install
```

## 💻 Commandes disponibles

| Commande | Action |
|----------|--------|
| `npm run dev` | Lance le serveur de développement sur `localhost:4321` |
| `npm run build` | Crée le build de production dans le dossier `dist/` |
| `npm run preview` | Prévisualise le build de production localement |
| `npm run astro` | Lance les commandes CLI d'Astro |

### Développement local

Pour travailler sur le projet en local :

```bash
npm run dev
```

Le site sera accessible sur http://localhost:4321

Les modifications seront automatiquement rechargées dans le navigateur (hot reload).

### Build de production

Pour créer une version optimisée du site :

```bash
npm run build
```

Le site sera généré dans le dossier `dist/` et prêt à être déployé.

### Tester le build

Pour vérifier que le build fonctionne correctement avant de déployer :

```bash
npm run preview
```

## 🤝 Contribuer au projet

Seuls les étudiants de l'IUT de Lannion peuvent contribuer à ce projet. Voici comment procéder :

### 1. Fork le projet

Clique sur le bouton "Fork" en haut à droite de la page GitHub pour créer ta propre copie du projet.

### 2. Clone ton fork

```bash
git clone https://github.com/pierraw1/inter-asso_website.git
cd site-web
```

### 3. Crée une branche pour tes modifications

```bash
git checkout -b feature/ma-nouvelle-fonctionnalite
```

**Conventions de nommage des branches :**
- `feature/` : pour une nouvelle fonctionnalité
- `fix/` : pour une correction de bug
- `docs/` : pour de la documentation
- `style/` : pour des modifications de style

Exemple : `feature/ajout-page-evenements`

### 4. Fais tes modifications

Travaille sur tes changements en local avec `npm run dev`.

### 5. Commit tes modifications

```bash
git add .
git commit -m "feat: description claire de ta modification"
```

**Conventions de commit :**
- `feat:` : nouvelle fonctionnalité
- `fix:` : correction de bug
- `docs:` : modification de documentation
- `style:` : changement de style/design
- `refactor:` : refactorisation de code

### 6. Push vers ton fork

```bash
git push origin feature/ma-nouvelle-fonctionnalite
```

### 7. Crée une Pull Request

1. Va sur GitHub sur **ton fork**
2. Clique sur "Compare & pull request"
3. Décris clairement tes modifications
4. Soumets la Pull Request

Ton code sera ensuite examiné par l'équipe avant d'être fusionné au projet principal.

## 📁 Structure du projet

```
/
├── public/              # Assets statiques (images, fonts, etc.)
│   └── images/         
│       ├── clubs/      # Logos des clubs
│       └── partenaires/ # Logos des partenaires
├── src/
│   ├── components/     # Composants réutilisables
│   │   ├── Header.astro
│   │   └── Footer.astro
│   ├── layouts/        # Layouts de page
│   │   └── Layout.astro
│   └── pages/          # Pages du site (routage automatique)
│       ├── index.astro         # Page d'accueil
│       ├── clubs.astro         # Page clubs
│       ├── partenaires.astro   # Page partenaires
│       ├── contact.astro       # Page contact
│       ├── evenements/         # Dossier événements
│       │   └── index.astro
│       └── mentions-legales.astro
├── astro.config.mjs    # Configuration Astro
├── tailwind.config.mjs # Configuration Tailwind CSS
├── package.json        # Dépendances du projet
└── README.md          # Ce fichier
```

## 🎨 Guide de style

### Couleurs principales

Le site utilise une palette de couleurs inspirée du logo de l'Inter-Asso :
- **Violet** : `#7c3aed` (purple-600)
- **Rose** : `#ec4899` (pink-500)
- **Orange** : `#f97316` (orange-500)
- **Bleu** : `#06b6d4` (cyan-500)

### Composants

Pour créer un nouveau composant :

```astro
---
// src/components/MonComposant.astro
---

<div class="mon-composant">
  <h2>Mon composant</h2>
</div>

<style>
  .mon-composant {
    /* Styles spécifiques */
  }
</style>
```

### Pages

Pour créer une nouvelle page, ajoute simplement un fichier `.astro` dans `src/pages/` :

```astro
---
// src/pages/ma-page.astro
import Layout from '../layouts/Layout.astro';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
---

<Layout title="Ma Page">
  <Header />
  
  <main>
    <h1>Contenu de ma page</h1>
  </main>
  
  <Footer />
</Layout>
```

La page sera automatiquement accessible sur `/ma-page`.

## 🐛 Signaler un bug

Si tu trouves un bug, ouvre une [issue sur GitHub](https://github.com/pierraw1/inter-asso_website) avec :
- Une description claire du problème
- Les étapes pour reproduire le bug
- Des captures d'écran si possible
- Ton environnement (navigateur, OS, etc.)

## 📝 Ressources utiles

- [Documentation Astro](https://docs.astro.build/)
- [Documentation Tailwind CSS](https://tailwindcss.com/docs)
- [Guide de contribution GitHub](https://docs.github.com/fr/get-started/quickstart/contributing-to-projects)
- [Lucide Icons](https://lucide.dev/icons/)

## 📧 Contact

Pour toute question concernant le projet, contacte-nous :
- Email : hello@inter-asso.fr
- Discord : [discord.gg/BG62QR77pP](https://discord.gg/BG62QR77pP)
- Instagram : [@inter_asso](https://instagram.com/inter_asso)

## 📄 Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

En résumé, tu es libre de :
- ✅ Utiliser le code pour n'importe quel projet
- ✅ Modifier le code
- ✅ Distribuer le code
- ✅ Utiliser le code commercialement

---

Fait avec ❤️ par les étudiants de l'IUT de Lannion