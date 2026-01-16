=== Thème WordPress Miellerie du Montaiguet ===

Contributeurs: Antoine Riondet
Requiert au moins: 5.0
Testé jusqu'à: 6.4
Requiert PHP: 7.4
Licence: GPLv2 ou plus récent
Licence URI: http://www.gnu.org/licenses/gpl-2.0.html

== Description ==

Thème WordPress élégant et moderne pour la Miellerie du Montaiguet. Conçu spécifiquement pour présenter les miels artisanaux bio de Provence avec un design authentique et professionnel.

=== Fonctionnalités ===

* Design moderne et responsive (mobile, tablette, desktop)
* Custom Post Types pour les miels et points de vente
* Carte interactive Mapbox pour localiser les points de vente
* Section blog intégrée
* Formulaire de contact avec envoi par email
* Page d'accueil complète (Hero, Collection de miels, Points de vente, Blog, Contact)
* Personnalisation via WordPress Customizer
* Optimisé pour le SEO
* Compatible avec les plugins WordPress standards

== Installation ==

### Méthode 1 : Installation via l'administration WordPress

1. Allez dans **Apparence > Thèmes > Ajouter**
2. Cliquez sur **Téléverser un thème**
3. Sélectionnez le fichier `montaiguet-theme.zip`
4. Cliquez sur **Installer maintenant**
5. Une fois installé, cliquez sur **Activer**

### Méthode 2 : Installation manuelle via FTP

1. Dézippez le fichier `montaiguet-theme.zip`
2. Uploadez le dossier `montaiguet-theme` dans `/wp-content/themes/`
3. Allez dans **Apparence > Thèmes** dans l'admin WordPress
4. Activez le thème "Miellerie du Montaiguet"

== Configuration ==

### 1. Configuration de base

Après avoir activé le thème :

1. **Logo** : Allez dans **Apparence > Personnaliser > Identité du site** pour ajouter votre logo
2. **Menus** : Créez vos menus dans **Apparence > Menus** et assignez-les à "Menu Principal" et "Menu Footer"
3. **Page d'accueil** : Définissez une page statique comme page d'accueil dans **Réglages > Lecture**

### 2. Configuration Mapbox (Important !)

Pour afficher la carte interactive des points de vente :

1. Créez un compte gratuit sur [mapbox.com](https://www.mapbox.com/)
2. Obtenez votre **token d'accès public**
3. Allez dans **Apparence > Personnaliser > Paramètres Miellerie**
4. Collez votre token dans le champ "Token API Mapbox"
5. Sauvegardez

### 3. Personnalisation des coordonnées

Dans **Apparence > Personnaliser > Paramètres Miellerie**, configurez :

* Adresse de la miellerie
* Téléphone
* Email
* Texte de la section Hero

### 4. Ajouter des miels

1. Allez dans **Miels > Ajouter un miel**
2. Remplissez :
   - Titre (ex: "Miel de Lavande")
   - Description dans le champ "Extrait"
   - Icône (emoji) : 🌼, 🌿, 🌰, etc.
   - Utilisation recommandée
   - Format (par défaut : 500g)
3. Ajoutez une image à la une (optionnel)
4. Publiez

### 5. Ajouter des points de vente

1. Allez dans **Points de Vente > Ajouter un point de vente**
2. Remplissez :
   - Nom du magasin
   - Adresse complète
   - Type de commerce (Magasin Bio, Marché, etc.)
   - Horaires
   - Téléphone
   - Site web (optionnel)
   - **Important** : Coordonnées GPS (latitude et longitude)
3. Publiez

**Astuce** : Pour obtenir les coordonnées GPS :
- Ouvrez Google Maps
- Clic droit sur l'emplacement
- Cliquez sur les coordonnées pour les copier
- Collez dans les champs Latitude et Longitude

### 6. Créer des articles de blog

1. Allez dans **Articles > Ajouter**
2. Rédigez votre article
3. Ajoutez une image à la une
4. Assignez une catégorie
5. Publiez

Les 3 derniers articles s'afficheront automatiquement sur la page d'accueil.

== Structure des pages ==

### Page d'accueil (front-page.php)

La page d'accueil affiche automatiquement :

1. **Section Hero** - Grande image avec présentation
2. **Nos Miels** - Grille des miels depuis le Custom Post Type "honey"
3. **Points de Vente** - Carte interactive + liste des magasins
4. **Blog** - Les 3 derniers articles
5. **Contact** - Formulaire de contact fonctionnel

### Autres pages

* **single.php** - Affichage d'un article individuel
* **archive.php** - Liste des articles (page blog)
* **page.php** - Pages standards
* **404.php** - Page d'erreur 404

== Formulaire de contact ==

Le formulaire de contact est intégré et fonctionnel :

* Envoi par email via wp_mail()
* Les messages sont envoyés à l'email administrateur WordPress
* Validation côté serveur
* Messages de confirmation/erreur

**Note** : Assurez-vous que votre serveur peut envoyer des emails. Si les emails ne fonctionnent pas, installez un plugin SMTP comme "WP Mail SMTP".

== Personnalisation avancée ==

### Couleurs

Les couleurs sont définies dans `style.css` avec des variables CSS :

```css
:root {
  --primary: 230 45% 25%;        /* Bleu marine */
  --secondary: 38 75% 55%;        /* Doré miel */
  --background: 45 30% 97%;       /* Beige clair */
  /* ... */
}
```

Modifiez ces valeurs pour changer les couleurs du thème.

### Polices

Polices utilisées (Google Fonts) :
* **Inter** - Police principale (sans-serif)
* **Playfair Display** - Titres et accents (serif)

### CSS personnalisé

Ajoutez votre CSS personnalisé dans :
* **Apparence > Personnaliser > CSS additionnel**

Ou créez un thème enfant.

== Plugins recommandés ==

Bien que le thème fonctionne sans plugins, voici quelques suggestions :

* **Yoast SEO** - Améliorer le référencement
* **WP Mail SMTP** - Configuration fiable de l'envoi d'emails
* **Contact Form 7** - Alternative au formulaire intégré
* **Advanced Custom Fields (ACF)** - Gestion avancée des champs personnalisés
* **Wordfence Security** - Sécurité du site

== Questions fréquentes ==

**Q : La carte ne s'affiche pas, que faire ?**

R : Vérifiez que vous avez ajouté votre token Mapbox dans Apparence > Personnaliser > Paramètres Miellerie. Le token est gratuit et disponible sur mapbox.com.

**Q : Comment changer le logo ?**

R : Allez dans Apparence > Personnaliser > Identité du site > Logo. Si aucun logo n'est défini, le thème utilise automatiquement le logo par défaut dans assets/images/.

**Q : Le formulaire de contact ne fonctionne pas ?**

R : Vérifiez que votre serveur peut envoyer des emails. Installez et configurez le plugin "WP Mail SMTP" pour résoudre les problèmes d'envoi d'emails.

**Q : Comment ajouter des coordonnées GPS pour un point de vente ?**

R : Sur Google Maps, faites un clic droit sur l'emplacement et cliquez sur les coordonnées pour les copier. Collez-les dans les champs Latitude et Longitude du point de vente.

**Q : Puis-je utiliser ce thème pour un autre type de site ?**

R : Le thème est spécifiquement conçu pour une miellerie, mais peut être adapté avec quelques modifications CSS et textuelles.

**Q : Comment créer un thème enfant ?**

R : Créez un dossier `montaiguet-child` dans `/wp-content/themes/` avec :

```php
// style.css
/*
Theme Name: Montaiguet Child
Template: montaiguet-theme
*/

// functions.php
<?php
add_action('wp_enqueue_scripts', 'montaiguet_child_styles');
function montaiguet_child_styles() {
    wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css');
    wp_enqueue_style('child-style', get_stylesheet_uri());
}
```

== Support ==

Pour toute question ou problème :

* Email : contact@miellerie-montaiguet.fr
* Téléphone : 04 42 58 XX XX

== Crédits ==

* Développement : Thème créé pour la Miellerie du Montaiguet
* Icônes : Lucide Icons (https://lucide.dev/)
* Polices : Google Fonts (Inter, Playfair Display)
* Carte : Mapbox GL JS (https://www.mapbox.com/)

== Changelog ==

= 1.0.0 - 2025-01-15 =
* Version initiale
* Custom Post Types pour miels et points de vente
* Intégration Mapbox
* Formulaire de contact
* Design responsive complet
* Page d'accueil complète avec toutes les sections
* Support WordPress Customizer

== Copyright ==

Miellerie du Montaiguet WordPress Theme, Copyright 2025
Licence : GNU General Public License v2 ou plus récent

Ce thème utilise du code et des ressources sous diverses licences :

* Normalize.css - MIT License
* Mapbox GL JS - BSD 3-Clause License
* Google Fonts - SIL Open Font License