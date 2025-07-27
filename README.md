# 🏡 GoodImmo - Plateforme de Vente Directe de Terrains

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0.0-38B2AC.svg)](https://tailwindcss.com/)
[![Motion](https://img.shields.io/badge/Motion-10.16.0-purple.svg)](https://motion.dev/)

GoodImmo est une plateforme moderne qui révolutionne le marché foncier camerounais en connectant directement vendeurs et acheteurs de terrains, éliminant les intermédiaires pour des transactions transparentes et équitables.

## 🌟 Fonctionnalités

### 🏠 Pour les Vendeurs
- **Soumission simplifiée** : Interface intuitive pour lister vos terrains
- **Upload d'images** : Système d'upload avec validation (3-10 images)
- **Vérification professionnelle** : Validation par des agents géomètres qualifiés
- **Gestion des annonces** : Suivi du statut de vérification

### 🔍 Pour les Acheteurs
- **Recherche avancée** : Filtres par prix, surface, type et localisation
- **Carte interactive** : Visualisation géographique des terrains
- **Contact direct** : Communication directe avec les vendeurs
- **Détails complets** : Informations vérifiées et photos de qualité

### 👨‍💼 Panneau d'Administration
- **Gestion des vérifications** : Validation des terrains soumis
- **Gestion des vendeurs** : Surveillance des comptes utilisateurs
- **Historique des ventes** : Suivi des transactions
- **Gestion des signalements** : Modération de la plateforme

### 📱 Fonctionnalités Techniques
- **Design responsive** : Optimisé pour desktop et mobile
- **Animations fluides** : Interface moderne avec Motion
- **Pagination intelligente** : Navigation optimisée des résultats
- **Carrousel d'images** : Visualisation immersive des propriétés

## 🚀 Installation et Lancement

### Prérequis
- Node.js 18.0.0 ou supérieur
- npm 8.0.0 ou supérieur

### Installation
```bash
# Cloner le repository
git clone https://github.com/goodimmo/platform.git
cd platform

# Installer les dépendances
npm install

# Lancer en mode développement
npm run dev
```

### Scripts Disponibles
```bash
npm run dev      # Serveur de développement
npm run build    # Build de production
npm run preview  # Aperçu du build
npm run lint     # Vérification du code
npm run type-check # Vérification TypeScript
```

## 🏗️ Architecture du Projet

```
goodimmo-platform/
├── components/           # Composants React réutilisables
│   ├── pages/           # Pages principales
│   ├── AdminPanel.tsx   # Panneau d'administration
│   ├── AdvancedFilters.tsx
│   ├── AuthDialog.tsx
│   ├── Carousel.tsx     # Carrousel d'images
│   ├── Header.tsx       # En-tête de navigation
│   ├── Footer.tsx       # Pied de page
│   ├── ImageUpload.tsx  # Upload d'images
│   ├── InteractiveMap.tsx # Carte interactive
│   ├── LegalPages.tsx   # Pages légales
│   └── Pagination.tsx   # Pagination
├── data/                # Données et types
│   └── mockData.ts      # Données de test
├── styles/              # Styles globaux
│   └── globals.css      # CSS Tailwind personnalisé
├── App.tsx              # Composant principal
├── main.tsx             # Point d'entrée
└── package.json         # Configuration npm
```

## 🎨 Design System

### Couleurs Principales
- **Primaire** : `#1f7f20` (Vert naturel)
- **Secondaire** : `#2ea426` (Mode sombre)
- **Arrière-plan** : `#ffffff` / `oklch(0.145 0 0)` (Mode sombre)

### Composants UI
- Système de design cohérent avec Tailwind CSS v4
- Variables CSS personnalisées pour la théming
- Support du mode sombre intégré
- Animations avec Motion (Framer Motion)

## 🔐 Authentification et Rôles

### Utilisateurs Standard
- Consultation des terrains
- Contact direct avec vendeurs
- Soumission de terrains à vendre

### Administrateurs
- Accès avec `admin@goodimmo.cm`
- Validation des terrains
- Gestion des utilisateurs
- Modération des signalements

## 📱 Pages et Fonctionnalités

1. **Accueil** : Hero section, fonctionnalités, processus
2. **Terrains Disponibles** : Liste/carte avec filtres avancés
3. **Détails Terrain** : Carrousel, informations vendeur, localisation
4. **Vendre Mon Terrain** : Formulaire complet avec upload d'images
5. **Administration** : Gestion complète de la plateforme
6. **Pages Légales** : Politique de confidentialité, conditions, etc.
7. **Support** : FAQ, centre d'aide, contact, signalements

## 🌍 Spécificités Cameroun

- **Géolocalisation** : Coordonnées précises des terrains
- **Vérification légale** : Validation des documents fonciers
- **Support multilingue** : Interface en français
- **Contexte local** : Adaptation au marché camerounais

## 🔧 Technologies Utilisées

- **Frontend** : React 18, TypeScript
- **Styling** : Tailwind CSS v4, CSS Variables
- **Animations** : Motion (Framer Motion)
- **Icons** : Lucide React
- **Build Tool** : Vite
- **Forms** : React Hook Form
- **Notifications** : Sonner

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 🤝 Contribution

Les contributions sont les bienvenues ! Voir [CONTRIBUTING.md](CONTRIBUTING.md) pour les guidelines.

## 📞 Support

- **Email** : support@goodimmo.cm
- **Téléphone** : +237 6XX XXX XXX
- **Issues** : [GitHub Issues](https://github.com/goodimmo/platform/issues)

## 🏆 Équipe

Développé avec ❤️ par l'équipe GoodImmo pour révolutionner le marché foncier camerounais.

---

**GoodImmo** - *Transparence et Équité dans l'Immobilier Camerounais*