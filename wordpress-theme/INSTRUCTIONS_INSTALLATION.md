# Instructions d'installation - Thème WordPress Miellerie du Montaiguet

## 📦 Installation du thème

### Méthode 1 : Via l'administration WordPress (Recommandée)

1. Connectez-vous à votre administration WordPress
2. Allez dans **Apparence > Thèmes**
3. Cliquez sur **Ajouter**
4. Cliquez sur **Téléverser un thème**
5. Sélectionnez le fichier `montaiguet-theme.zip`
6. Cliquez sur **Installer maintenant**
7. Une fois l'installation terminée, cliquez sur **Activer**

### Méthode 2 : Via FTP

1. Dézippez le fichier `montaiguet-theme.zip`
2. Uploadez le dossier `montaiguet-theme` dans `/wp-content/themes/`
3. Allez dans **Apparence > Thèmes** dans WordPress
4. Activez le thème "Miellerie du Montaiguet"

---

## ⚙️ Configuration initiale

### 1. Créer la page d'accueil

1. Allez dans **Pages > Ajouter**
2. Titre : "Accueil" (ou laissez vide)
3. Sélectionnez le modèle **"Page d'accueil"** dans les attributs de page (si disponible)
4. Publiez la page
5. Allez dans **Réglages > Lecture**
6. Sélectionnez "Une page statique"
7. Choisissez votre page "Accueil" comme **Page d'accueil**
8. Sauvegardez

### 2. Configurer les menus

1. Allez dans **Apparence > Menus**
2. Créez un nouveau menu (ex: "Menu Principal")
3. Ajoutez les pages souhaitées :
   - Accueil
   - Nos Miels (lien : `#miels`)
   - Points de Vente (lien : `#points-de-vente`)
   - Blog (créez une page Blog ou lien : `#blog`)
   - Contact (lien : `#contact`)
4. Assignez le menu à **"Menu Principal"**
5. Sauvegardez

### 3. Ajouter le logo

1. Allez dans **Apparence > Personnaliser**
2. Cliquez sur **Identité du site**
3. Cliquez sur **Sélectionner un logo**
4. Uploadez votre logo (idéal : PNG transparent, hauteur 100-150px)
5. Publiez les modifications

---

## 🗺️ Configuration de la carte Mapbox (IMPORTANT)

### Obtenir un token Mapbox (Gratuit)

1. Allez sur [mapbox.com](https://www.mapbox.com/)
2. Cliquez sur **"Sign up"** ou **"Get started"**
3. Créez un compte gratuit
4. Une fois connecté, allez dans votre **compte > Access tokens**
5. Copiez votre **"Default public token"**

### Ajouter le token dans WordPress

1. Allez dans **Apparence > Personnaliser**
2. Cliquez sur **Paramètres Miellerie**
3. Collez votre token dans le champ **"Token API Mapbox"**
4. Publiez les modifications

**Note** : Sans ce token, la carte des points de vente n'apparaîtra pas.

---

## 🍯 Ajouter vos miels

1. Allez dans **Miels > Ajouter un miel**
2. Remplissez les informations :
   - **Titre** : Nom du miel (ex: "Miel de Lavande")
   - **Extrait** : Description courte (apparaît sur la carte)
   - **Icône** : Emoji représentant le miel
     - 🌸 pour Lavande
     - 🌿 pour Garrigue
     - 🌰 pour Châtaignier
     - 🌱 pour Romarin
     - ⛰️ pour Montagne
     - 🌻 pour Fleurs de Provence
   - **Utilisation recommandée** : Comment utiliser ce miel
   - **Format** : Par défaut "500g" (modifiable)
   - **Image à la une** : Photo du pot de miel (optionnel)
3. Cliquez sur **Publier**

**Exemple de miel** :
- Titre : Miel de Lavande
- Extrait : Doux et parfumé, aux notes florales subtiles de la lavande provençale
- Icône : 🌸
- Utilisation : Idéal sur les tartines et dans les tisanes
- Format : 500g

Répétez l'opération pour tous vos miels.

---

## 📍 Ajouter vos points de vente

### Comment obtenir les coordonnées GPS

1. Ouvrez [Google Maps](https://www.google.com/maps)
2. Recherchez l'adresse du point de vente
3. Faites un **clic droit** sur le marqueur ou l'emplacement
4. Cliquez sur les **coordonnées** (ex: 43.52250, 5.46094)
5. Les coordonnées sont copiées dans votre presse-papier

### Ajouter un point de vente

1. Allez dans **Points de Vente > Ajouter un point de vente**
2. Remplissez :
   - **Titre** : Nom du magasin (ex: "Ma Terre Aix-en-Provence")
   - **Adresse complète** : Adresse postale complète
   - **Type de commerce** : Magasin Bio, Épicerie, Marché, Ferme, etc.
   - **Horaires** : Horaires d'ouverture (ex: "9H00-19H00")
   - **Téléphone** : Numéro de téléphone (optionnel)
   - **Site web** : URL du site (optionnel)
   - **Latitude** : Première coordonnée GPS (ex: 43.52250)
   - **Longitude** : Deuxième coordonnée GPS (ex: 5.46094)
3. Cliquez sur **Publier**

**Exemple** :
- Nom : Ma Terre
- Adresse : 4 rue Pierre de Coubertin, 13100 Aix en Provence
- Type : Magasin Bio
- Horaires : 9H00-19H00
- Téléphone : 04 42 26 83 65
- Latitude : 43.52250353731567
- Longitude : 5.460940014562134

Répétez pour tous vos points de vente.

---

## 📝 Créer des articles de blog

1. Allez dans **Articles > Ajouter**
2. Rédigez votre article (titre, contenu)
3. Ajoutez une **image à la une** (recommandée, format paysage)
4. Créez ou assignez une **catégorie** (ex: "Actualité", "Récompense", "Santé")
5. Ajoutez des **tags** si nécessaire
6. Cliquez sur **Publier**

Les 3 derniers articles s'afficheront automatiquement sur la page d'accueil.

**Conseils** :
- Utilisez des images de qualité (min 1200x800px)
- Rédigez des titres accrocheurs
- Utilisez les catégories pour organiser vos articles

---

## 🎨 Personnalisation du thème

### Modifier les coordonnées de contact

1. Allez dans **Apparence > Personnaliser**
2. Cliquez sur **Paramètres Miellerie**
3. Modifiez :
   - Adresse
   - Téléphone
   - Email
   - Texte Hero Section (phrase d'accroche principale)
4. Publiez les modifications

### Modifier les couleurs (Avancé)

1. Allez dans **Apparence > Personnaliser**
2. Cliquez sur **CSS additionnel**
3. Ajoutez vos modifications CSS personnalisées
4. Exemple pour changer la couleur secondaire :

```css
:root {
  --secondary: 38 75% 60%; /* Modifier la teinte dorée */
}
```

---

## ✉️ Configuration du formulaire de contact

Le formulaire est intégré et fonctionnel. Les messages sont envoyés à l'email administrateur WordPress.

### Si les emails ne fonctionnent pas :

1. Installez le plugin **"WP Mail SMTP"**
2. Configurez-le avec votre service d'email (Gmail, SendGrid, etc.)
3. Testez l'envoi d'email depuis le plugin

**Alternative** : Vous pouvez remplacer le formulaire intégré par **Contact Form 7** si vous préférez.

---

## 📱 Vérification responsive

Testez votre site sur différents appareils :
- Desktop (1920px)
- Tablette (768px)
- Mobile (375px)

Le thème est optimisé pour tous les formats.

---

## 🔧 Résolution de problèmes

### La carte ne s'affiche pas
✅ **Solution** : Vérifiez que vous avez bien ajouté votre token Mapbox dans **Apparence > Personnaliser > Paramètres Miellerie**

### Les miels n'apparaissent pas
✅ **Solution** : Assurez-vous d'avoir publié au moins un miel dans **Miels > Ajouter un miel**

### Le formulaire ne fonctionne pas
✅ **Solution** : 
- Vérifiez que votre serveur peut envoyer des emails
- Installez et configurez le plugin "WP Mail SMTP"
- Vérifiez les logs d'erreur WordPress

### Les points de vente ne sont pas sur la carte
✅ **Solution** : 
- Vérifiez que vous avez bien rempli la latitude ET la longitude
- Les coordonnées doivent être au format décimal (ex: 43.52250, 5.46094)
- Pas de virgule dans les coordonnées, utilisez le point

### Le menu ne s'affiche pas
✅ **Solution** : Créez un menu dans **Apparence > Menus** et assignez-le à "Menu Principal"

---

## 🚀 Optimisations recommandées

### Plugins recommandés :

1. **Yoast SEO** - Optimisation du référencement
2. **WP Super Cache** - Cache pour améliorer les performances
3. **Smush** - Compression automatique des images
4. **Wordfence Security** - Sécurité du site
5. **WP Mail SMTP** - Fiabilité de l'envoi d'emails

### Performance :

- Compressez vos images avant de les uploader (max 200Ko)
- Utilisez des formats modernes (WebP si possible)
- Activez un système de cache

---

## 📞 Support

Pour toute question ou problème technique :

- **Email** : contact@miellerie-montaiguet.fr
- **Téléphone** : 04 42 58 XX XX

---

## 📋 Checklist post-installation

- [ ] Thème activé
- [ ] Page d'accueil définie
- [ ] Menu principal créé et assigné
- [ ] Logo ajouté
- [ ] Token Mapbox configuré
- [ ] Coordonnées de contact mises à jour
- [ ] Au moins 3 miels ajoutés
- [ ] Au moins 3 points de vente ajoutés avec GPS
- [ ] 2-3 articles de blog créés
- [ ] Formulaire de contact testé
- [ ] Site vérifié sur mobile et desktop
- [ ] Plugin de cache installé (recommandé)

---

## 🎉 Félicitations !

Votre site est maintenant prêt ! N'hésitez pas à explorer toutes les fonctionnalités du thème et à le personnaliser selon vos besoins.

**Version du thème** : 1.0.0  
**Date** : Janvier 2025  
**Licence** : GPL v2 ou supérieur
