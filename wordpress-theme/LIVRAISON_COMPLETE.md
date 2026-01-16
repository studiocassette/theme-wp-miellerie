# 🍯 THÈME WORDPRESS MIELLERIE DU MONTAIGUET

## 📦 Contenu de la livraison

Vous avez reçu les fichiers suivants :

1. **montaiguet-theme.zip** - Thème WordPress prêt à installer (491 KB)
2. **INSTRUCTIONS_INSTALLATION.md** - Guide complet d'installation et configuration
3. **README.txt** - Documentation technique du thème

---

## ✨ Fonctionnalités du thème

### 🎨 Design
- ✅ Design moderne et élégant inspiré de la Provence
- ✅ Responsive (mobile, tablette, desktop)
- ✅ Couleurs personnalisées : bleu marine (logo) + doré miel
- ✅ Polices Google Fonts : Inter + Playfair Display
- ✅ Animations et transitions fluides
- ✅ Ombres personnalisées (shadow-honey, shadow-elegant)

### 🏠 Page d'accueil complète
1. **Section Hero**
   - Grande image de fond
   - Logo de la miellerie
   - Badge "Lauréat 2025 Prix Agricole"
   - Titre principal et sous-titre
   - Badges de certification (IGP, Bio, FR-BIO-16)
   - Statistiques (300 ruches, 7 variétés, Provence)
   
2. **Section Nos Miels**
   - Image featured de la collection
   - Grille responsive des miels
   - Icônes emoji pour chaque miel
   - Description et utilisation recommandée
   - Automatiquement alimenté par le Custom Post Type "honey"
   
3. **Section Points de Vente**
   - Carte interactive Mapbox
   - Grille des points de vente
   - Clic sur une carte active la localisation sur la carte
   - Affichage des horaires et types de commerce
   
4. **Section Blog/Actualités**
   - Les 3 derniers articles
   - Vignettes avec images
   - Catégories et dates
   - Lien vers articles complets
   
5. **Section Contact**
   - Coordonnées de la miellerie
   - Formulaire de contact fonctionnel
   - Envoi par email avec validation

### 📝 Custom Post Types

#### 1. Miels (honey)
Champs personnalisés :
- Icône (emoji)
- Utilisation recommandée
- Format (500g par défaut)
- Classe de couleur CSS (optionnel)

#### 2. Points de Vente (store)
Champs personnalisés :
- Adresse complète
- Type de commerce
- Horaires
- Téléphone
- Site web
- Latitude et Longitude (pour la carte)

### 🗺️ Carte Interactive
- Intégration Mapbox GL JS
- Markers personnalisés dorés
- Popups avec informations
- Zoom automatique sur les magasins
- Synchronisation avec les cartes cliquables

### ✉️ Formulaire de Contact
- Validation côté serveur
- Envoi AJAX sans rechargement
- Messages de succès/erreur
- Protection par nonce WordPress
- Champs : Nom, Email, Téléphone, Message

### 🎛️ Personnalisation WordPress
Via **Apparence > Personnaliser > Paramètres Miellerie** :
- Token API Mapbox
- Adresse de la miellerie
- Téléphone
- Email
- Texte de la Hero Section

### 📱 Templates
- `front-page.php` - Page d'accueil complète
- `index.php` - Liste d'articles par défaut
- `single.php` - Article individuel
- `archive.php` - Archives/Blog
- `page.php` - Pages standards
- `404.php` - Page d'erreur personnalisée
- `header.php` - En-tête avec navigation
- `footer.php` - Pied de page complet

### 🎨 Assets inclus
- **Images** :
  - logo-miellerie.png
  - hero-antoine-apiculteur.jpg
  - honey-collection.jpg
  - bee-logo.png
  - screenshot.png (pour WordPress)

- **CSS** :
  - style.css (CSS principal avec variables)
  - custom.css (styles personnalisés étendus)

- **JavaScript** :
  - main.js (navigation, formulaire, animations)
  - mapbox-init.js (carte interactive)

---

## 🚀 Installation rapide (5 minutes)

### 1. Installer le thème
1. Connectez-vous à WordPress
2. **Apparence > Thèmes > Ajouter > Téléverser**
3. Choisissez `montaiguet-theme.zip`
4. Cliquez sur **Installer maintenant**
5. Cliquez sur **Activer**

### 2. Configuration minimale
1. **Créer page d'accueil** : Pages > Ajouter > Publier
2. **Définir en accueil** : Réglages > Lecture > Page statique
3. **Ajouter token Mapbox** : 
   - Créer compte sur [mapbox.com](https://mapbox.com)
   - Copier le token public
   - Apparence > Personnaliser > Paramètres Miellerie
4. **Créer menu** : Apparence > Menus > Assigner au "Menu Principal"

### 3. Ajouter du contenu
1. **Miels** : Miels > Ajouter (minimum 3)
2. **Points de vente** : Points de Vente > Ajouter (avec GPS)
3. **Articles** : Articles > Ajouter (2-3 articles)

✅ Votre site est prêt !

---

## 📊 Structure des fichiers

```
montaiguet-theme/
├── style.css              # CSS principal + en-tête du thème
├── functions.php          # Configuration WordPress
├── screenshot.png         # Capture d'écran du thème
├── README.txt            # Documentation WordPress
│
├── header.php            # En-tête et navigation
├── footer.php            # Pied de page
├── index.php             # Template par défaut
├── front-page.php        # Page d'accueil ⭐
├── single.php            # Article individuel
├── page.php              # Page standard
├── archive.php           # Liste d'articles
├── 404.php               # Page d'erreur
│
├── inc/                  # Fonctions PHP
│   ├── custom-post-types.php   # CPT Miels & Points de vente
│   ├── custom-fields.php       # Métaboxes pour les CPT
│   ├── customizer.php          # Options du thème
│   └── widgets.php             # Zones de widgets
│
├── assets/
│   ├── css/
│   │   └── custom.css          # Styles étendus
│   ├── js/
│   │   ├── main.js             # JavaScript principal
│   │   └── mapbox-init.js      # Initialisation carte
│   └── images/
│       ├── logo-miellerie.png
│       ├── hero-antoine-apiculteur.jpg
│       ├── honey-collection.jpg
│       └── bee-logo.png
│
├── templates/            # Templates partiels (vide, réservé)
└── page-templates/       # Templates de page (vide, réservé)
```

---

## 🎨 Personnalisation du design

### Couleurs principales

Modifiables dans `style.css` (lignes 13-57) :

```css
:root {
  --primary: 230 45% 25%;      /* Bleu marine (logo) */
  --secondary: 38 75% 55%;      /* Doré miel */
  --background: 45 30% 97%;     /* Beige clair */
  --foreground: 230 45% 20%;    /* Texte principal */
}
```

### Polices

- **Inter** : Police principale (texte)
- **Playfair Display** : Titres et accents (serif)

Chargées depuis Google Fonts, modifiables dans `style.css` ligne 9.

### Responsive breakpoints

- Desktop : > 1024px
- Tablette : 768px - 1024px
- Mobile : < 768px

---

## 🔧 Compatibilité

### Requis
- ✅ WordPress 5.0 ou supérieur
- ✅ PHP 7.4 ou supérieur
- ✅ MySQL 5.6 ou supérieur

### Testé avec
- ✅ WordPress 6.4
- ✅ PHP 8.1
- ✅ Navigateurs : Chrome, Firefox, Safari, Edge

### Plugins recommandés
- Yoast SEO (référencement)
- WP Mail SMTP (emails fiables)
- WP Super Cache (performance)
- Smush (compression images)
- Wordfence (sécurité)

### Plugins compatibles
- Contact Form 7
- Advanced Custom Fields (ACF)
- WooCommerce (avec adaptations)
- Elementor (sur pages uniquement)

---

## 📝 Données par défaut

Si aucun Custom Post Type n'est créé, le thème affiche des données par défaut :

### Miels par défaut (6)
1. 🌸 Miel de Lavande
2. 🌿 Miel de Garrigue
3. 🌰 Miel de Châtaignier
4. 🌱 Miel de Romarin
5. ⛰️ Miel de Montagne
6. 🌻 Miel de Fleurs de Provence

Ces données disparaissent automatiquement dès que vous créez vos propres miels.

---

## 🐛 Troubleshooting

### Problème : La carte ne s'affiche pas
**Cause** : Token Mapbox manquant  
**Solution** : Ajoutez votre token dans Apparence > Personnaliser > Paramètres Miellerie

### Problème : Formulaire de contact ne fonctionne pas
**Cause** : Serveur n'envoie pas les emails  
**Solution** : Installez et configurez le plugin "WP Mail SMTP"

### Problème : Points de vente pas sur la carte
**Cause** : Coordonnées GPS manquantes ou incorrectes  
**Solution** : Vérifiez que latitude ET longitude sont remplies au format décimal

### Problème : Menu ne s'affiche pas
**Cause** : Menu non créé ou non assigné  
**Solution** : Apparence > Menus > Créer un menu > Assigner à "Menu Principal"

### Problème : Images trop lourdes
**Cause** : Images non optimisées  
**Solution** : 
- Compressez avant upload (max 200KB)
- Installez le plugin "Smush"
- Format recommandé : JPG (photos), PNG (logos)

---

## 📈 SEO & Performance

### Optimisations incluses
- ✅ HTML5 sémantique
- ✅ Balises meta structurées
- ✅ Support title-tag WordPress
- ✅ Images avec attributs alt
- ✅ URLs propres
- ✅ Schema.org ready (si plugin SEO)

### Recommandations
1. Installez **Yoast SEO**
2. Activez un système de **cache**
3. Utilisez un **CDN** pour les images
4. Compressez les images
5. Activez la compression GZIP

### Scores attendus
- Google PageSpeed : 85-95/100
- GTmetrix : A/B
- Mobile-Friendly : ✅ Oui

---

## 🔐 Sécurité

### Mesures implémentées
- ✅ Nonces sur formulaires AJAX
- ✅ Sanitization des données utilisateur
- ✅ Échappement des sorties (esc_html, esc_attr)
- ✅ Protection contre injections SQL
- ✅ Vérification des capacités utilisateur
- ✅ Pas de fichiers exécutables dans assets/

### Recommandations
- Installez **Wordfence Security**
- Utilisez des mots de passe forts
- Mettez à jour WordPress régulièrement
- Faites des sauvegardes automatiques

---

## 📞 Support & Contact

### Support technique
- Email : contact@miellerie-montaiguet.fr
- Téléphone : 04 42 58 XX XX

### Ressources
- WordPress Codex : [codex.wordpress.org](https://codex.wordpress.org/)
- Mapbox Docs : [docs.mapbox.com](https://docs.mapbox.com/)
- Google Fonts : [fonts.google.com](https://fonts.google.com/)

---

## 📜 Licence & Crédits

### Licence
- **GPL v2 ou supérieur**
- Utilisation libre pour projets personnels et commerciaux
- Modifications autorisées
- Redistribution autorisée

### Crédits
- **Développement** : Thème créé pour Miellerie du Montaiguet
- **Icônes** : Lucide Icons (MIT)
- **Polices** : Google Fonts (SIL OFL)
- **Carte** : Mapbox GL JS (BSD 3-Clause)
- **Normalisation** : Normalize.css (MIT)

### Copyright
© 2025 Miellerie du Montaiguet. Tous droits réservés.

---

## 🎉 Merci !

Merci d'avoir choisi ce thème pour votre site. Nous espérons qu'il vous donnera satisfaction et contribuera au succès de votre miellerie en ligne.

**Version** : 1.0.0  
**Date de sortie** : 16 janvier 2025  
**Dernière mise à jour** : 16 janvier 2025

---

## 📋 Checklist finale

Avant de mettre votre site en ligne :

- [ ] Thème installé et activé
- [ ] Page d'accueil configurée
- [ ] Menu créé et fonctionnel
- [ ] Logo personnalisé ajouté
- [ ] Token Mapbox configuré
- [ ] Tous les miels ajoutés (min. 3)
- [ ] Tous les points de vente ajoutés avec GPS
- [ ] Articles de blog publiés (min. 2-3)
- [ ] Coordonnées de contact mises à jour
- [ ] Formulaire de contact testé
- [ ] Site testé sur mobile
- [ ] Site testé sur tablette
- [ ] Site testé sur desktop
- [ ] Plugin de cache installé
- [ ] Plugin SEO installé et configuré
- [ ] SSL actif (HTTPS)
- [ ] Sauvegardes automatiques configurées
- [ ] Google Analytics installé (optionnel)
- [ ] Favicon ajouté

✅ **Votre site est prêt pour la mise en ligne !**
