# Journal - TP01 - Gestionnaire de produits

> **Cours :** 420-W40-SF - Développement d’applications Web (Cégep de Sainte-Foy)  
> **Travail :** TP01 - Gestionnaire de produits  
> **Étudiant(e) :** {{ Tasnime Trabelsi }}
> **Période :** {{ 2026-02-20 }} → {{ 2026-03-06 }}

---

## Consignes
Pour **chaque séance**, écrire **8 à 10 lignes** (minimum) qui incluent :
- ce que j’ai fait (concret, vérifiable)
- les difficultés / erreurs rencontrées
- comment j’ai résolu (ou tenté de résoudre)

> **IMPORTANT** : écrire en fin de séance pendant que c’est frais.
> **IMPORTANT** : renommer ce fichier backlog.md

---

## Séance 1 — _2026-02-20_ (Durée : _2h50m_)
**Objectif de la séance :**  
Initialiser le projet et mettre en place les fichiers de base._

**Travail réalisé (8–10 lignes min)**  
- Durant cette séance, j'ai regardé la vidéo complète explicative du TP1.
- Après avoir relu l'énoncé du TP1, j'ai commencé par créer mon repository sur GitHub que j'ai ensuite cloné parmi mes fichiers tp01.
- J'ai fait l'installation complète du nouveau projet Vue, l'installation Bootstrap de la manière vue en classe et
- j'ai fait un commit après chaque étape avec un message précisant mon intention.
- Par contre, ce qui m'a fait perdre un peu de temps vers la moitié de la séance c'est quand j'ai voulu re-arranger l'emplacement de mon app
- mais ça a causé quelques problèmes car j'ai cloné mon app à l'intérieur de la même app de base que je voulais déplacer.
- Alors j'ai supprimé le dossier et cloné de nouveau mon repository dans le bon dossier que je voulais.
- Pour terminer, j'ai créer un fichier backlog et j'analyse les récits utilisateurs afin de pouvoir faire la liste des étapes et savoir comment décortiquer les composantes à la prochaine séance.
- Au prochain cours, je vais compléter le backlog, implémenter mon idée de produit et commencer la mise en place du formulaire
- d'ajouts de produits et la page d'affichage des produits.

**Difficultés / bugs**  
- Erreur de clonage repository git_  
- Problème de style import fichier... J'ai mal importé mon fichier style.css dans main.ts et ça m'a pris un moment pour trouver la cause_

**Solutions / pistes testées**  
- _J’ai supprimer le clône et refait à nouveau_  
- _J’ai corriger le chemin d'import du fichier de style_

---

## Séance 2 — _2026-02-24_ (Durée : _1h50m_)
**Objectif de la séance :**  
Créer le formulaire qui ajoute effectivement des produits à la table.

**Travail réalisé (8–10 lignes min)**  
- Durant cette séance, j'ai mis en place la page d'affichage des produits pour plus tard voir mes résultat.
- J'ai créé le formulaire des produits avec tous les champs nécessaire pour que ce critère soit acceptée.
- Mon interface de produits se trouvait de base avec mon formulaire mais j'ai fini par changer cette emplacement.
- Je l'ai plutôt déplacer vers un autre fichier que j'ai pu ainsi importer là où j'avais besoin des produits comme à la page des produits.
- Le bouton d'ajout a effectivement ajouté les données du fomulaire parmi la liste des produits donc j'ai pu compléter 4 de mes tâches du backlog. 
- J'ai vraiment pris mon temps pour les faire mais je suis confiante qu'au prochain cours,
- je vais pouvoir finir la validation des données et mettre en place tous les boutons(modification, duplication et supression)
- Le plus grand défi c'était par rapport à comment décortiquer les composantes et le processus à suivre pour que les choses fonctionnent de manière propre.

**Difficultés / bugs**  
- le découpage de l'application en composantes

**Solutions / pistes testées**  
- J'ai analysé les récits utilisateurs de mon mieux et j'ai mis du temps pour les ordonner de la manière qui fait du sens pour moi comme la page d'affichage avant le formulaire.

---

## Séance 3 — _2026-02-27_ (Durée : _2h50m_)
**Objectif de la séance :**  
…Faire la validation des inputs du formulaire et mettre en place les boutons

**Travail réalisé (8–10 lignes min)**  
- Cette séance, j'ai commencé par séparer mon formulaire de la liste des produits.
- J'ai décidé de les ajuster un à côté de l'autre pour une meilleure visibilité.
- Ensuite, j'ai pris soin de faire le tour de tous mon code pour corriger le nommage, certains titres et le style css.
- Ce qui m'a pris le plus de temps c'est l'affichage des détails. Je suis allée avec un format accordéon de Bootstrap mais dans mon cas c'était un seul item accordeon flush
- qui boucle à travers une boucle foreach. Le fichier ProductTable a été sujet à de nombreux changements; c'étais une table mais ce ne le sera plus vu que l'accordéon affiche
- tous les détails, les champs et même le bouton modifier. J'ai tester grâce à la console que ça sélectionne le bon produit et ça fonctionner. 
- Alors, je vais sous peu ajouter les deux autres options de boutons. 
- De plus, cette séance, j'ai commencé les validations des données du produit.
- Pour le moment, je bloque juste sur comment valider les nombres (pour prix et stock).
- Sinon, j'ai réussi à afficher le message pour le nom trop court et ça s'enlève dès que un produit valide est soumis.

**Difficultés / bugs**  
- Quand je clique sur l'accordéon d'un produit, tous les autres s'ouvrent alors j'ai du chercher un bon moment pour trouver le problème et faire fonctionner le collapse.
- Aussi, vu qu'on n'utilise pas beaucoup css, j'ai un peu bugger pour me rappeller les terminologies.

**Solutions / pistes testées**  
- Au final, je me suis servie de l'id du produit dans l'id de l'accordéon pour rendre chaque accordéon unique et 
- pouvoir ouvrir l'accordéon des détails d'un seul produit à la fois.
- Pour le style, chatgpt a pu m'aider à faire du sens.

---

## Séance 4 — _2026-03-03_ (Durée : _1h50m_)
**Objectif de la séance :**  
…

**Travail réalisé (8–10 lignes min)**  
- …
- …
- …
- …
- …
- …
- …
- …
- …

**Difficultés / bugs**  
- …

**Solutions / pistes testées**  
- …


---

## Séance 5 — _2026-03-06_ (Durée : _1h50m_)
**Objectif de la séance :**  
…

**Travail réalisé (8–10 lignes min)**  
- …
- …
- …
- …
- …
- …
- …
- …
- …

**Difficultés / bugs**  
- …

**Solutions / pistes testées**  
- …


---

## Résumé global (à compléter avant remise)
- **Ce dont je suis le plus fier/fière :** …
- **Ce que j’améliorerais avec plus de temps :** …
- **3 apprentissages techniques :**  
  1) …  
  2) …  
  3) …

---

