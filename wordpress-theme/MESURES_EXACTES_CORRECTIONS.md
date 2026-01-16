# 📏 Mesures EXACTES de l'image de référence

## Mesures extraites de l'image (en pixels)

| Élément | Valeur exacte | Actuel WordPress | Correction |
|---------|---------------|------------------|------------|
| **Retour au blog → Badge/Date** | 31px | 2rem (32px) | ✅ OK |
| **Badge/Date → Titre** | 26px | 1.5rem (24px) | ❌ Ajouter 2px → **26px** |
| **Titre → Image** | 37px | 1.5rem (24px) | ❌ Doit être **37px** |
| **Image → Contenu** | 60px | 2rem (32px) | ❌ Doit être **60px** |
| **Titre font-size** | 40px | 48px | ❌ Doit être **40px** ! |
| **Contenu font-size** | 18px | 16px | ❌ Doit être **18px** |
| **Badge padding haut/bas** | 6px | 2px (0.125rem) | ❌ Doit être **6px** |
| **Badge padding gauche/droite** | 12px | 10px (0.625rem) | ❌ Doit être **12px** |
| **Image height** | 400px | 400px/480px | ⚠️ Fixer à **400px** |
| **Badge ↔ Date** | 10px | 12px (0.75rem) | ❌ Doit être **10px** |
| **Entre lignes contenu** | 20px | 20px (1.25rem) | ✅ OK |

## Corrections CSS à appliquer

```css
/* 1. Back to blog margin */
.back-to-blog {
  margin-bottom: 31px; /* Exactement 31px */
}

/* 2. Meta top margin */
.post-meta-top {
  gap: 10px; /* Au lieu de 0.75rem (12px) */
  margin-bottom: 26px; /* Au lieu de 1.5rem (24px) */
}

/* 3. Badge padding */
.post-category-badge {
  padding: 6px 12px; /* Au lieu de 0.125rem 0.625rem */
}

/* 4. Title font-size */
.post-title {
  font-size: 40px; /* Au lieu de 48px ! */
}

/* 5. Title margin (vers image) */
.post-header {
  margin-bottom: 37px; /* Au lieu de 1.5rem (24px) */
}

/* 6. Image margin (vers contenu) */
.post-featured-placeholder {
  height: 400px; /* Fixe, pas responsive */
  margin-bottom: 60px; /* Au lieu de 2rem (32px) */
  margin-top: 0; /* Supprimer le margin-top 1.5rem */
}

/* 7. Content font-size */
.post-content {
  font-size: 18px; /* Au lieu de 16px */
}
```

## Résumé des erreurs

1. ❌ **Titre trop gros** : 48px au lieu de 40px
2. ❌ **Contenu trop petit** : 16px au lieu de 18px
3. ❌ **Espacements incorrects** : Presque tous les margins sont faux
4. ❌ **Badge padding** : Trop petit (2px au lieu de 6px verticalement)
5. ❌ **Gap entre badge et date** : 12px au lieu de 10px

## Impact visuel

Ces différences créent un décalage notable :
- Le titre paraît plus imposant qu'il ne devrait
- Le contenu est moins lisible (16px vs 18px)
- Les espacements donnent un rythme différent
- Le badge semble écrasé verticalement

---

**Action requise :** Appliquer EXACTEMENT ces mesures en pixels
