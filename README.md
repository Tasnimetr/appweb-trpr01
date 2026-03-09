# README - TP01 - Gestionnaire de produits 

> **Cours :** 420-W40-SF - Développement d’applications Web (Cégep de Sainte-Foy)  
> **Travail :** TP01 - Gestionnaire de produits  
> **Étudiant(e) :** {{ Tasnime Trabelsi }} 
> **Repo GitHub :** {{ https://github.com/Tasnimetr/appweb-trpr01.git }}
> **Déploiement (GitHub Pages) :** {{ URL du site }} 

---
**IMPORTANT**: renommer README.md
## 1) Description du projet

Décrire en 5–10 lignes l’application réalisée :  

- Contexte : L'application représente un site de vente de bouquet de fleurs.
- Objectif principal : Vendre plusieurs options de bouquets de fleurs.
- Public cible / usage typique : Pour toutes les sortes d'occasion et les tranches d'âge.

**Produit choisi :** {{ Bouquet de fleurs }}
---

## 2) Fonctionnalités (récits utilisateurs)

- [ ] {{ Affichage des types de bouquet de fleurs }}
- [ ] {{ Formulaire d'ajout de fleurs }}
- [ ] {{ Consulter détails bouquets }}
- [ ] {{ Consulter détails bouquets }}

> Ajouter ici toute fonctionnalité optionnelle (ex. catégorie, actif, date de création, etc.).

---

## 3) Technologies utilisées

- {{ https://vuejs.org/ }}
- {{ https://getbootstrap.com/ }}
- {{ https://www.w3schools.com/ }}
- {{ https://chatgpt.com/ }}
- {{ Copilot inligne suggetions }}

---

## 4) Installation et démarrage

### Prérequis
- Node.js LTS

### Installation
```bash
{{ À compléter }}
````

### Démarrage en dev

```bash
{{ À compléter }}
```

### Build

```bash
{{ À compléter }}
```

---

## 5) Déploiement (GitHub Pages)

- **Nom du repo / dossier GitHub Pages :** `appweb-trpr01`
- **URL attendue :** {{ `https://<user>.github.io/appweb-trpr01/` }}
    

### Notes de configuration

- base URL (`base`) de Vite ajustée pour GitHub Pages
- commandes utilisées pour déployer (si script)
    

---

## 6) Architecture et organisation du code

Décrire la structure du projet et les responsabilités.

### Structure des dossiers

- `src/components/` : composants UI (responsabilité unique)
- `src/models/` : types/interfaces TypeScript (ex. `Product`)
- `src/services/` : logique utilitaire (export CSV)
- `src/assets/` : images (le logo)
- `src/css/` : style css
    

> Adapter à votre projet réel. L’objectif est d’expliquer **où** se trouve la logique et **pourquoi**.


### Composants clés

- `ProductTable` : Affichage sous forme de tableau avec affichage conditionnel
- `ProductForm` : Formulaire qui permet d'ajouter des produits avec validation.
- `DetailsForm` : Affichage des détails d'un produit sous forme d'accordéon. (à implémenter séparément de ProductTable?)
- `EditForm` : Formulaire généré quand bouton modification d'un produit est cliqué et qui permet de modifier les données de ce produit.
- `DuplicateForm` : Formulaire généré quand bouton duplication d'un produit est cliqué et qui permet de dupliquer les données de ce produit. (à venir)
...

---

## 7) Utilisation de l’IA (OBLIGATOIRE)

> **IMPORTANT :** Toute omission d’utilisation d’IA (même pour UI/CSS) peut entraîner **0** et une mention de plagiat.

### Outil(s) utilisé(s)

- _https://chatgpt.com/_
- _copilot inligne suggetions_
- _AppWebGPT_
    

### Comment l’IA a été utilisée

Décrire concrètement :

- Surtout pour le style des pages comme pour aligner le logo et le titre et pour aligner la liste des produits et le formulaire d'ajout.
- et aide au debug quand j'avais justement de la misère à aligner les containers (avec chatgpt)
- clarification TypeScript/Vue compréhension -> comprendre structure et fonctionnement d'un formulaire avec AppWebGPT le chatgpt du cours
- comme comment générer un id unique en TypeScript (marqué dans ProductForm)
- suggestions UI/CSS -> copilot inligne suggetions (marqué quand ça fait plus qu'autocompléter ce que je voulais écrire donc quand ça me donne une nouvelle idée)
- Ça m'est arrivé une fois dans product.ts quand je voulais corriger la valeur de retour du editedProduct qui est de base initialisé à null. 
- Copilot m'a suggéré d'ajouter la possibilité de null à Product vu que en effet le retour pouvait être l'un ou l'autre.

### À quel endroit
ProductForm
product.ts

#### ProductForm

- Ligne 29: pour générer un id unique
- Ligne 13 à 18: code ne provient pas de AppWebGPT mais je m'en suis servie pour comprendre comment les champs réactifs fonctionnent dans un formulaire.
- Ligne 31: AppWebGPT pour aussi comprendre comment convertir la string input prix du formulaire en nombre. J'ai ensuite réutiliser mes nouvelles connaissances.
    
#### product.ts

- Ligne 19: je voulais corriger la valeur de retour du editedProduct qui est de base initialisé à null et Copilot
inline suggestions m'a suggéré d'ajouter la possibilité de null à Product vu que en effet le retour pouvait être l'un ou l'autre.

### Exemples de prompts (2 à 5)

1. “comme comment générer un id unique en TypeScript?”
2. “comment aligner deux sections à côté en css?”
3. “explique moi la logique des champs réactif d'un formulaire”