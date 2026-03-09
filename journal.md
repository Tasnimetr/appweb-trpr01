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
- Durant cette séance, j'ai décidé de commencer par mettre en place la page d'affichage des produits en premier pour plus tard voir mes résultat.
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
- J'ai analysé les récits utilisateurs de mon mieux et j'ai décidé de les ordonner de la manière qui fait du sens pour moi comme la page d'affichage avant le formulaire.

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
- Aussi, vu qu'on n'utilise pas beaucoup css, j'ai eu un bug pour me rappeller les terminologies.

**Solutions / pistes testées**  
- Au final, je me suis servie de l'id du produit dans l'id de l'accordéon pour rendre chaque accordéon unique et 
- pouvoir ouvrir l'accordéon des détails d'un seul produit à la fois.
- Pour le style, je me suis servie de chatgpt.

---

## Séance 4 — _2026-03-03_ (Durée : _1h50m_)
**Objectif de la séance :**  
…Finaliser la mise en page des boutons

**Travail réalisé (8–10 lignes min)**  
- Cette séance, j'ai créer les deux autres boutons de duplication et de suppression.
- J'ai surtout travaillé sur la logique applicative de la duplication de mon produit.
- J'ai ajouté une méthode de duplication qui crée un nouvel produit avec les même données que l'original sauf pour l'id qui est généré au hasard.
- Ensuite, j'ai écarté les boutons l'un des autres. Je pense que ça permet un meilleur apperçu poru l'utilisateur.
- Ainsi, visuellement la nouvelle duplication s'affichait mais quand on modifie l'une, ça modifie l'autre.
- Grâce à quelques tests avec la console, j'ai pu trouver la cause et la régler. C'était une erreur de référence.
- Après m'être assuré que la modification d'un dupliqué ne modifie pas aussi l'original, J'ai fait en sorte que le switch entre les formulaires soit simple
- et qu'un utilisateur ne soit pas obligé de soumettre un formulaire pour passer à un autre, s'il change d'avis(Par exemple, je veux modifier à la place de dupliquer).
- J'ai aussi décidé de désactiver les champs du formulaire de duplication vu que l'option de modification existe déjà.

**Difficultés / bugs**  
- Comment séparer le nouveau produit de l'original à la duplication.
- Et comment stocker la copy du produit avec un nouvel id.

**Solutions / pistes testées**  
- Pour la séparation du nouveau produit et son original, je devais bien analyser son identification. J'ai donc décidé de me servir de la console pour afficher des messages 
- qui m'indiquent l'id de chaque produit au clic. J'ai trouvé que je ne faisais pas une copie mais plutôt une nouvelle référence au produit original. 
- Alors j'ai corrigé ça, j'ai décidé pour la duplication de faire la création d'un nouveau produit comme la méthode de création dans ProductForm. 
- J'ai repris toutes les mêmes données sauf pour l'id que j'ai généré au hasard.
- Après avoir bien penser, je crois que je devrais dorénavant attribuer les nouveaux id basé sur la longueur de la valeur de products(products.value.length) 
- à la place de la longue chaîne de string qui n'est pas conforme avec mes autres id de base.
- 

---

## Séance 5 — _2026-03-06_ (Durée : _2h50m_)
**Objectif de la séance :**  
…Achever les récits utilisateurs (la supression, la recherche par nom et l'état du stock) + veiller à la qualité du code

**Travail réalisé (8–10 lignes min)**  
- Durant cette séance, j'ai travaillé sur une nouvelle fonction qui supprime le produit sélectionné de la liste des produits.
- J'ai aussi corriger ma manière d'attribuer des id comme prévu dans la séance 4, maintenant ce n'est plus random mais basé sur la longueur de la valeur de products.
- J'ai décidé de changer ça car les id sont beaucoup plus cohérent maintenant et identifie mieux mes produits qaund à leur emplacement dans la liste.
- J'ai implémenté la confirmation de la supression. En fait, il y avait plusieurs options comme le modal de bootstrap ou un popover avec un timer mais 
- j'ai choisi d'ouvrir un dialogue avec le message de confirmation affiché en vert pour montrer que la supression est réussie et qui se ferme quand on clique sur un X. 
- Par la suite, j'ai mis en place la barre de recherche des types de fleurs pour les bouquets par nom. J'ai trouvé un très bon site qui m'a guidé à travers les étapes.
- J'ai fait en sorte que la liste des produits s'affiche en fonction de la recherche et que si il n'y a aucune correspondance, un message en rouge 
- qui dit "Aucun résultat correspondant!" s'affiche pour informer l'utilisateur. Pour améliorer la qualité du code, j'ai décidé de refactor rename la ref du 
- message de confirmation vu que je commence à implémenter d'autres types de messages comme pour la recherche ou le stock.
- J'ai aussi travaillé sur les codes de couleurs, pour le stock, j'ai décidé d'afficher tous montant en vert sauf s'il est égal ou plus bas que 3.
- Si le stock est en bas de 3, j'affiche que le stock est critique mais si c'est égal à zéro alors j'affiche un message plus détaillé qui indique que c'est en rupture de stock.
- Dans ma prochaine et dernière séance chez moi, je vais refactor rename product à mon produit réel concret, compléter la validation du champs prix et finalement
- l'exportation dans le format CSV.

**Difficultés / bugs**  
- J'ai beaucoup hésité sur comment afficher le message de supression.
- Je bloque encore sur la validation des prix.
- Le découpage en composants -> J'ai fini les 9 premiers récits utilisateurs mais je n'ai que 4 composants.

**Solutions / pistes testées**  
- Il y avait de nombreuses manière de faire la supression mais la plupart nécessite du javascript alors j'ai continuer à chercher d'autre façons.
- Heureusement vous avez mentionné la possibilité de pouvoir utiliser un dialogue alors j'ai fait mes recherches et j'ai essayé cette option qui a finit par bien marcher.
- Pour la validation, je dois faire plus de recherche et essayer de réellement comprendre les expressions régulières pour vraiment savoir quoi écrire.
- Je vais finir ce travail cette fin de semaine et séparer mon code en autans que de parties fonctionnelles.


---

## Résumé global (à compléter avant remise)
- **Ce dont je suis le plus fier/fière :** Ce dont je suis la plus fière c'est la fonctionnalité de mon projet web. Toutes les fonctionnalités de l'interface fonctionnent comme un vrai site web en ligne.
- **Ce que j’améliorerais avec plus de temps :** La qualité du code et le visuel.
- **3 apprentissages techniques :**  
  1) La première fois que je code une barre de recherche
  2) Comment filtrer une liste en vue
  3) Comment exporter une liste en CSV qui se télécharge

---

