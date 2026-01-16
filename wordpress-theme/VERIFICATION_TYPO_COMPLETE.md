# 🔍 Vérification complète des tailles de typographie

## 📏 Conversion Tailwind → REM → PX

| Tailwind Class | REM | PX (16px base) |
|----------------|-----|----------------|
| text-sm | 0.875rem | 14px |
| text-base | 1rem | 16px |
| text-lg | 1.125rem | 18px |
| text-xl | 1.25rem | 20px |
| text-2xl | 1.5rem | 24px |
| text-3xl | 1.875rem | 30px |
| text-4xl | 2.25rem | 36px |
| text-5xl | 3rem | 48px |
| text-6xl | 3.75rem | 60px |

---

## 🎯 Comparaison section par section

### 1. Hero Section

#### Lovable original :
```html
<!-- Title -->
<h1 class="text-4xl md:text-5xl lg:text-6xl">
  Miel Artisanal
  <span class="block font-serif text-secondary">
    100% Bio de Provence
  </span>
</h1>
```

**Tailles :**
- Mobile : `text-4xl` = 2.25rem = **36px**
- Tablet : `text-5xl` = 3rem = **48px**
- Desktop : `text-6xl` = 3.75rem = **60px**

#### WordPress actuel :
```css
.hero-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
}
```

**Tailles :**
- Minimum : 2rem = **32px** ❌ (devrait être 36px)
- Maximum : 3.5rem = **56px** ❌ (devrait être 60px)

**✅ CORRECTION NÉCESSAIRE :**
```css
.hero-title {
  font-size: clamp(2.25rem, 5vw, 3.75rem); /* 36-60px */
}
```

---

### 2. Hero Description

#### Lovable original :
```html
<p class="text-lg md:text-xl">
  Découvrez nos miels d'exception...
</p>
```

**Tailles :**
- Mobile : `text-lg` = 1.125rem = **18px**
- Desktop : `text-xl` = 1.25rem = **20px**

#### WordPress actuel :
```css
.hero-description {
  font-size: 1.125rem; /* 18px */
}
```

**✅ CONFORME** mais manque responsive desktop (20px)

**✅ CORRECTION NÉCESSAIRE :**
```css
.hero-description {
  font-size: 1.125rem; /* 18px mobile */
}

@media (min-width: 768px) {
  .hero-description {
    font-size: 1.25rem; /* 20px desktop */
  }
}
```

---

### 3. Sections Titles

#### Lovable original :
```html
<h2 class="text-3xl md:text-4xl lg:text-5xl">
  Nos Miels d'Exception
</h2>
```

**Tailles :**
- Mobile : `text-3xl` = 1.875rem = **30px**
- Tablet : `text-4xl` = 2.25rem = **36px**
- Desktop : `text-5xl` = 3rem = **48px**

#### WordPress actuel :
```css
.section-title {
  font-size: clamp(1.875rem, 4vw, 2.5rem); /* 30-40px */
}
```

**❌ INCORRECT** - Maximum devrait être 48px, pas 40px

**✅ CORRECTION NÉCESSAIRE :**
```css
.section-title {
  font-size: clamp(1.875rem, 4vw, 3rem); /* 30-48px */
}
```

---

### 4. Sections Description

#### Lovable original :
```html
<p class="text-lg text-muted-foreground">
  Six variétés uniques...
</p>
```

**Tailles :**
- All devices : `text-lg` = 1.125rem = **18px**

#### WordPress actuel :
```css
.section-description {
  font-size: 1rem; /* 16px */
}
```

**❌ INCORRECT** - Devrait être 18px (1.125rem)

**✅ CORRECTION NÉCESSAIRE :**
```css
.section-description {
  font-size: 1.125rem; /* 18px */
}
```

---

### 5. Honey Card Title

#### Lovable original :
```html
<h3 class="text-lg font-semibold">
  Miel de Lavande
</h3>
```

**Tailles :**
- All devices : `text-lg` = 1.125rem = **18px**

#### WordPress actuel :
```css
.honey-name {
  font-size: 1.25rem; /* 20px */
}
```

**❌ INCORRECT** - Devrait être 18px

**✅ CORRECTION NÉCESSAIRE :**
```css
.honey-name {
  font-size: 1.125rem; /* 18px */
}
```

---

### 6. Honey Card Description

#### Lovable original :
```html
<p class="text-sm text-muted-foreground">
  Doux et parfumé...
</p>
```

**Tailles :**
- All devices : `text-sm` = 0.875rem = **14px**

#### WordPress actuel :
```css
.honey-description {
  /* Hérite du parent, probablement 1rem = 16px */
}
```

**❌ MANQUANT** - Devrait être explicitement 14px

**✅ CORRECTION NÉCESSAIRE :**
```css
.honey-description {
  font-size: 0.875rem; /* 14px */
}
```

---

### 7. Blog Card Title

#### Lovable original :
```html
<h3 class="font-semibold text-foreground line-clamp-2">
  Prix Agricole 2025...
</h3>
```

**Tailles :**
- All devices : défaut (1rem) = **16px**

#### WordPress actuel :
```css
.blog-title {
  font-size: 1.25rem; /* 20px */
}
```

**❌ INCORRECT** - Devrait être 16px

**✅ CORRECTION NÉCESSAIRE :**
```css
.blog-title {
  font-size: 1rem; /* 16px */
}
```

---

### 8. Article Single Title

#### Lovable original :
```html
<h1 class="text-3xl md:text-4xl lg:text-5xl">
  Prix Agricole 2025...
</h1>
```

**Tailles :**
- Mobile : `text-3xl` = 1.875rem = **30px**
- Tablet : `text-4xl` = 2.25rem = **36px**
- Desktop : `text-5xl` = 3rem = **48px**

#### WordPress actuel :
```css
.post-title {
  font-size: clamp(1.75rem, 4vw, 2.5rem); /* 28-40px */
}
```

**❌ INCORRECT** - Devrait être 30-48px

**✅ CORRECTION NÉCESSAIRE :**
```css
.post-title {
  font-size: clamp(1.875rem, 4vw, 3rem); /* 30-48px */
}
```

---

### 9. Article Content (Prose)

#### Lovable original :
```css
prose-lg = 1.125rem base (18px)
```

#### WordPress actuel :
```css
.post-content {
  font-size: 1rem; /* 16px */
}
```

**❌ INCORRECT** - Devrait être 18px (prose-lg)

**✅ CORRECTION NÉCESSAIRE :**
```css
.post-content {
  font-size: 1.125rem; /* 18px - prose lg */
}
```

---

## 📊 Résumé des corrections

| Élément | Actuel | Lovable | À corriger |
|---------|--------|---------|------------|
| Hero title | 32-56px | 36-60px | ✅ OUI |
| Hero description | 18px | 18-20px | ✅ OUI |
| Section title | 30-40px | 30-48px | ✅ OUI |
| Section description | 16px | 18px | ✅ OUI |
| Honey card title | 20px | 18px | ✅ OUI |
| Honey card desc | 16px | 14px | ✅ OUI |
| Blog card title | 20px | 16px | ✅ OUI |
| Post title | 28-40px | 30-48px | ✅ OUI |
| Post content | 16px | 18px | ✅ OUI |

---

## 🔧 Corrections à appliquer

Total : **9 corrections** de typographie nécessaires pour correspondre exactement au design Lovable.
