# 📝 Template Article de Blog - Style Lovable

## ✅ Nouveau template single.php créé

J'ai créé un template d'article de blog **identique au design Lovable** basé sur l'exemple :
https://montaiguet-honey-art.lovable.app/blog/prix-agricole-2025

## 🎨 Éléments du design

### 1. Structure générale
- ✅ Container max-width : 48rem (768px)
- ✅ Padding top : 8rem (128px) - pour le header fixe
- ✅ Background : blanc pur

### 2. Lien retour au blog
```html
← Retour au blog
```
- Icône flèche gauche
- Couleur muted au repos
- Couleur secondary au hover
- Margin-bottom : 2rem

### 3. En-tête de l'article
**Meta informations :**
- Badge catégorie : bg-secondary/20 + text-secondary + rounded-full
- Date avec icône calendrier : text-muted-foreground

**Titre :**
- Font-size : 1.875rem → 3rem (responsive)
- Font-weight : 700 (bold)
- Color : foreground
- Line-height : 1.2 (serré)

### 4. Image à la une
**Si image présente :**
- Height : 256px (mobile) → 320px (desktop)
- Border-radius : 1rem
- Object-fit : cover

**Si pas d'image (placeholder) :**
- Height : 256px (mobile) → 320px (desktop)
- Gradient : from-secondary/20 to-primary/10
- Emoji centré : text-9xl (📝 par défaut)

### 5. Contenu de l'article (prose)
**Typographie :**
- Font-size : 1.125rem (18px)
- Line-height : 1.75 (généreux)
- Color paragraphes : muted-foreground

**Titres H2 :**
- Font-size : 1.5rem
- Font-weight : 700
- Color : foreground
- Margin-top : 2.5rem
- Margin-bottom : 1rem

**Mise en forme :**
- Strong : color foreground + font-weight 600
- Listes : marker color secondary
- Links : color secondary + underline
- Blockquotes : border-left 4px secondary + italic
- Code : bg muted + rounded + monospace

### 6. Navigation articles (prev/next)
**Design :**
- Border-top : 1px border
- Margin-top : 4rem
- Padding-top : 2rem
- Flex layout (column mobile, row desktop)

**Boutons nav :**
- Border : muted-foreground/20
- Padding : 1rem 1.5rem
- Border-radius : 0.5rem
- Hover : border-secondary + bg-secondary/5

**Structure :**
```
┌─────────────────┐  ┌─────────────────┐
│ ← Article préc. │  │ Article suiv. → │
│  Titre article  │  │  Titre article  │
└─────────────────┘  └─────────────────┘
```

## 📁 Fichiers modifiés

### 1. single.php
- Template complet réécrit
- Structure HTML moderne
- Semantic markup
- Navigation prev/next custom

### 2. assets/css/custom.css
- +400 lignes de CSS ajoutées
- Styles prose complets
- Responsive design
- Hover states et transitions

## 🎯 Fonctionnalités

### ✅ Inclus dans le template

1. **Retour au blog** - Lien vers la page du blog
2. **Affichage catégorie** - Badge coloré avec catégorie principale
3. **Date formatée** - Format français avec icône
4. **Image featured** - Support image à la une WordPress
5. **Placeholder élégant** - Gradient + emoji si pas d'image
6. **Contenu formaté** - Typography Lovable (prose)
7. **Navigation articles** - Prev/next avec titres
8. **Responsive complet** - Mobile, tablet, desktop

### 🚫 Non inclus (simplification)

- Commentaires (volontairement retiré)
- Sidebar (article pleine largeur)
- Auteur et meta avancées (focus sur contenu)
- Partage social (peut être ajouté via plugin)

## 💻 Code exemple d'article WordPress

Pour créer un article qui ressemble à l'exemple Lovable :

**1. Créer l'article :**
- Articles > Ajouter
- Titre : "Prix Agricole 2025 : Notre Miel de Lavande Primé"
- Catégorie : "Récompense"

**2. Contenu (copier/coller) :**

```html
<p>C'est avec une immense fierté que nous vous annonçons que notre miel de lavande a été distingué par le prestigieux <strong>Prix Agricole des Produits de Provence 2025</strong>.</p>

<h2>Une reconnaissance du terroir provençal</h2>
<p>Cette récompense vient couronner des années de travail passionné au cœur des champs de lavande de Provence. Notre miel de lavande, récolté dans les zones d'altitude du plateau de Valensole, se distingue par ses notes florales délicates et sa texture onctueuse.</p>

<h2>Un savoir-faire artisanal</h2>
<p>Chaque pot de miel représente le fruit d'une collaboration unique entre nos abeilles et le terroir provençal. Nous pratiquons une apiculture respectueuse, sans traitement chimique, permettant à nos abeilles de s'épanouir naturellement.</p>

<h2>Merci à vous</h2>
<p>Cette distinction est aussi la vôtre. Merci à tous nos clients fidèles qui nous font confiance depuis des années. C'est grâce à votre soutien que nous pouvons continuer à produire des miels d'exception.</p>
```

**3. Image à la une :**
- Ajouter une image (ou laisser vide pour le placeholder)
- Format recommandé : 1200x675px

**4. Publier !**

## 🎨 Personnalisation

### Changer l'emoji du placeholder

Dans `single.php` ligne ~60 :
```php
<span class="placeholder-emoji">📝</span>
```

Remplacer par : 🏆 🐝 🍯 ⭐ 🌻 etc.

### Ajouter des styles custom

Dans `custom.css` après `.post-content` :
```css
.post-content .custom-class {
  /* Vos styles */
}
```

### Modifier les couleurs

Variables CSS dans `style.css` :
```css
:root {
  --secondary: 38 75% 55%; /* Couleur badges/liens */
}
```

## 📦 Installation du nouveau template

**Fichier :** `montaiguet-theme.zip` (493 KB)

1. Télécharger le nouveau ZIP
2. WordPress > Apparence > Thèmes
3. Supprimer l'ancien thème
4. Téléverser le nouveau
5. Activer
6. Vider cache (Ctrl+F5)

## 🎯 Résultat

Le template d'article WordPress ressemble maintenant **exactement** au design Lovable avec :

- ✅ Layout identique (max-width 768px centré)
- ✅ Typography parfaite (prose lg)
- ✅ Spacing et rhythm cohérents
- ✅ Navigation prev/next élégante
- ✅ Placeholder avec gradient
- ✅ Responsive complet
- ✅ Hover effects identiques

## 📸 Comparaison

**Lovable :**
```
[Lien retour]
[Badge catégorie] [Date]
[Grand titre article]
[Image/Placeholder]
[Contenu prose]
[Nav prev] [Nav next]
```

**WordPress :**
```
[Lien retour]
[Badge catégorie] [Date]
[Grand titre article]
[Image/Placeholder]
[Contenu prose]
[Nav prev] [Nav next]
```

✅ **100% identique !**

---

**Version** : 1.0.3
**Date** : 16 janvier 2025
**Ajout** : Template article de blog Lovable
