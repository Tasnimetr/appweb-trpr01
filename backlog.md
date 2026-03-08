# Backlog - TP01 - Gestionnaire de produits

> **Cours :** 420-W40-SF - Développement d’applications Web (Cégep de Sainte-Foy)  
> **Travail :** TP01 - Gestionnaire de produits  
> **Étudiant(e) :** {{ Tasnime Trabelsi }}
> **Dernière mise à jour :** {{ 2026-02-23 }}


---

## 1) Règles de backlog (à respecter)

- **Tâches petites** : idéalement 25 à 50 minutes.
- **Titres explicites** : “UI liste produits (tableau)” au lieu de “liste”.
- **Critères d’acceptation** : 1 à 3 points simples pour savoir si c’est “done”.
- **Ordre logique** : setup → affichage → interactions → validations → export → déploiement → finitions.
- **Suivi** : on bouge les statuts au fur et à mesure (visible).
- **Légende statut :** ⬜ À faire | 🟦 En cours | ✅ Fait | 🟥 Bloqué
- Priorités
	- **MUST** : requis par l’énoncé (récits 1 à 10 + méthodologie)
	- **SHOULD** : qualité/robustesse (cas limites, petits refactors)
	- **COULD** : bonus / nice-to-have (si tout le reste est stable)
- **IMPORTANT**: renommer backlog.md

---

## 2) Tableau du backlog

> Copiez/collez des lignes au besoin.

|  ID | Priorité | Statut | Titre (tâche) | Relié à (RU#) | Critères d’acceptation (définition de done) | Notes / obstacles |
| --: | :------: | :----: | ------------- | :-----------: | ------------------------------------------- | ----------------- |
|  A1 |   MUST   |   ✅   | Tableau des produits |    5   | Page affichage sous forme de tableau             | Aucun produit affiché avant ajout par formulaire |
|  A2 |   MUST   |   ✅   | Affichage produits |    5     | Tableau affiche nom produit, lien vers détails et options (boutons) | Rien encore à afficher dans le tableau, boutons créés plus tard |
|  A3 |   MUST   |   ✅   | Formulaire ajout produit |  1 | Champs formulaire-> nom, description, prix et stock |            |
|  A4 |   MUST   |   ✅   | Bouton ajout produit| 1       | Bouton "Ajouter" cliquable sous le formulaire |                 |
|  A5 |   MUST   |   🟥   | Validation au clic bouton | 1 | Formulaire non envoyé si données manquantes | Faire une fonction qui calcule les nombres après la virgules pour vérifier prix?|
|  A6 |   MUST   |   🟥   | Logique applicative |    1    | Produit **valide** ajouté par formulaire s'affiche dans la page d'affichage des produits | Implémenter validation et la tester |
|  B1 |  SHOULD  |   ✅   | Séparer form et table produit|| Séparer la section d'affichage produits et formulaire |   Lien vers autre page pour remplir formulaire?      |
|  A7 |   MUST   |   ✅   | Bouton modification produit |2| Nouveau bouton "Modifier" cliquable pour chaque produit |    id devrait être inclu?    |
|  A8 |   MUST   |   ✅   | Formulaire préremplit |   2   | Nouveau formulaire généré prérempli par les données du produit sélectionné |        |
|  B4 |  SHOULD  |   ✅   | Affichage formulaire  |   2   | Formulaire affiché et son titre selon ce qui est cliqué |    Même démarche pour duplication produit   |
|  A9 |   MUST   |   ✅   | Bouton duplication produit |3 | Nouveau bouton "Dupliquer" cliquable pour chaque produit |        |
|  A10|   MUST   |   ✅   | Formulaire préremplit |   3   | Nouveau formulaire généré prérempli par les données du produit sélectionné, sauf l'id |   Create un nouveau produit avec les même données ou copier celui séléctionner et le push avec un id différent?    |
|  B6 |  SHOULD  |   ✅   | Désactiver champs formulaire|3| Pour modifier il faut cliquer le bouton modifer et non dupliquer|        |
|  A11|   MUST   |   ✅   | Nouveau Id généré |     3     | Nouveau Id généré pour le nouveau produit duppliqué |   Trouver pourquoi l'id du produit original change aussi?   |
|  C1 |  COULD   |   ✅   | Switch formulaire facilement || Ne pas rester bloquer sur un formulaire si on décide de ne pas submit (la modification ou la duplication) | Possible car rien de créer ou de modifier avant de cliquer officiellement sur le bouton submit du formulaire |
|  A12|   MUST   |   ✅   | Bouton supression produit | 4 | Nouveau bouton "Supprimer" cliquable pour chaque produit |        |
|  A13|   MUST   |   ✅   | Confirmation suppression |  4 | Texte colorié s'affiche un moment confirmant clairement la supression du produit |        |
|  B2 |  SHOULD  |   ✅   | Produit supprimé disparaît |4 | Produit ne s'affiche plus parmi la liste table produits |       |
|  A14|   MUST   |   ✅   | Champs Recherche produits | 6 | Champs de recherche de produits à la page affichage produits |        |
|  A15|   MUST   |   ✅   | Recherche dynamique |    6    | La recherche filtre en temps réel |        |
|  B5 |  SHOULD  |   ✅   | Résultat recherche claire | 6 | un message apparaît si aucun résultat|        |
|  A16|   MUST   |   ✅   | Détails produits |     7      | Champs détails-> nom, description, prix et stock |  Afficher des détails sous forme d'accordéon      |
|  B3 |  SHOULD  |   ✅   | Accordéon collapse |     7    | Détail d'un produit collapse quand un autre produit est cliqué |   Trouver solution comment donner des ids différents pour ne pas qu'ils s'ouvrent tous |
|  A17|   MUST   |   ⬜   | Découpage application parties|| Faire le découpage de l'application en composants, en autans que de parties fonctionelles |        |
|  B6 |  SHOULD  |   ✅   | refactorisation nom produit  || Renommer var produit par le produit concret de mon application |        |
|  A18|   MUST   |   ✅   | Affichage quantités |    8    | Affichage en temps réel des quantités avec indicateur visuel (plus en stock -> rouge)|        | 
|  A19|   MUST   |   ✅   | Avertissement rupture stock |9| Texte colorié s'affiche si produit atteint stock critique (>=3) |        | 
|  A20|   MUST   |   🟦   | Bouton téléchargement CSV | 10| Nouveau bouton "Exporter" dans la page d'affichage des produits |        | 
|  A21|   MUST   |   🟦   | Exporter UI liste en CSV | 10 | UI liste produits se télécharge en format CSV |    qu'est-ce que CSV et comment ça marche?    | 
|  A22|   MUST   |   ✅   | Seed Liste produits |    5    | Seed produits dans la liste des produits |  J'aurais dû penser à ça dès le départ pour vérifier l'affichage des produits dans Tableau sans ajout à chaque fois   |
