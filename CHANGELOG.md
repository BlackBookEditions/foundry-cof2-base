# 2.1.4

- Mise à jour du guide du système par rapport au groupement par choix des modificateurs
- Mise à jour des Peuples par rapport au groupement par choix des modificateurs
- Correction de l'équipement Piège explosif
- Mise àjour des rencontres par rapport à la résolution de type Sauvegarde : Araignée géante, chimère draconique, CryoHydre, Dragon des forêts, Drake givré, Skrambler
- Mise à jour des prétirés par rapport à la résolution de type Sauvegarde : Ionas, Keyrel, Chanterune
- Mise à jour des capacités et des prétirés: modification du nombre de cibles. Correction de Sommeil, Sort illusoire et Ecuyer. 49 capacités avec 0 pour indiquer illimité et non un chiffre élevé.

# 2.1.3

## Corrections
Merci Morkheer pour les avoir signalées (issue [#83](https://github.com/BlackBookEditions/foundry-cof2-base/issues/83))
- Capacités du moine
  - Poings de fer (Voie du poing) : ajout du modificateur de FOR manquant dans les DM de l'action Frappe, réécriture du texte inGame
  - Puissance du ki (Voie de la maîtrise) : dé bonus → dé malus, cible attaque à distance → attaque magique, ajout DM magiques +2d4°
  - Agilité héroïque (Voie du vent) : texte inGame corrigé (bonus permanent automatique)

Merci Morkheer pour les avoir signalées (issue [#85](https://github.com/BlackBookEditions/foundry-cof2-base/issues/85))
- Capacités du prêtre
  - Correction de la capacité Protéger un allié (guerrier) qui ajoutait le 2+rang en caractéristique de perception au lieu d'un bonus aux jets de compétence
  - Correction de Arme de lumière qui n'avait pas les bons bonus de dommages sur les armes alliées
  - Correction de Ailes célestes pour qu'elle consomme bien le mana
  - Correction de Vigueur divine pour qu'elle fasse bien une attaque magique en opposition
  - Correction dans le système pour la capacité Récupération majeure pour laquelle le deuxième dé d'évolution n'était pas converti

Merci Jaka pour l'avoir signalée
- Correction de Protéger un allié : le bonus est aux jets de compétence et non aux jets de caractéristique

# 2.1.1

- Ajout multiciblage dans le guide, organisation des chapitres, corrections

# 2.1.0

## Guide du système

- Mise à jour complète des sections "Options du Système", "Jet d'attaque", "Jet de dommages", "Jet de sauvegarde" et "Jet en opposition" pour refléter le nouveau système multi-cibles
- Suppression des Notes de Version obsolètes (fonctionnalités désormais implémentées)
- Ajout du statut "Autre" dans la documentation de l'enricher @Test

# 2.0.0

- Compatibilité Foundry V14

# 1.6.5

## Corrections

Merci Morkheer pour les avoir signalées

- Capacités de l'ensorceleur (issue [#78](https://github.com/BlackBookEditions/foundry-cof2-base/issues/78))
  - Amitié (Voie de l'envouteur) : espace en trop devant la formule de difficulté qui empêche le jet opposé
  - Arme de mana (Voie de l'invocateur) : durée à @rang au lieu de 3
  - Choc (Voie de l'invocateur) : statut "renversé" manquant
- Capacités du forgesort (issue [#79](https://github.com/BlackBookEditions/foundry-cof2-base/issues/79))
  - Grosse tête : @int - @con → @niv _ @int - @niv _ @con
  - Statuette : spell: false → spell: true
  - Grande Taille : texte inGame clarifié avec explication de la limitation @niv sur les encounters
  - Rune de garde : ajout manaCost: 3 pour forcer le coût à 3 PM au lieu de 5
- Capacités du druide (issue [#82](https://github.com/BlackBookEditions/foundry-cof2-base/issues/82))
  - Maître de la survie : ajouté le modificateur CON 2 + @rang pour les tests de récupération
  - Bâton de druide : @fagi → @agi dans la formule de dégâts
  - Nuée d'insectes : apply: both → apply: others sur le modificateur magic
- Capacités du magicien : (issue [#81](https://github.com/BlackBookEditions/foundry-cof2-base/issues/81))
  - Ajout du familier du magicien et correction de la capacité Familier de la voie de la magie universelle

# 1.6.3

- Guide utilisateur : Renommage d'une image (cof2_capacity_liee.webp)
- Diminution de la hauteur de l'image des scènes et des compendiums

# 1.6.2

- Ajout de modificateurs sur la capacité Charge fantastique (issue [#77](https://github.com/BlackBookEditions/foundry-cof2-base/issues/77))
- Correction du NC du milicien (issue [#75](https://github.com/BlackBookEditions/foundry-cof2-base/issues/75))
- Uniformisation du terme Épée (issue [#74](https://github.com/BlackBookEditions/foundry-cof2-base/issues/74))

# 1.6.1

- Mise à jour du guide utilisateur par rapport à l'enricher @Test

# 1.6.0

- Changement dans les droits des compendiums : les joueurs ont la visibilité sur le guide du système, le livre des règles et les objets
- Les noms de fichiers des images de Elluwe, Keyrel et Tybur sont maintenant en minuscules
- Utilisation de l'enricher @Test pour les scénarios Tour errante et Requiem pour Clairval

# 1.5.1

- Modification des prétirés : ajout des capacités avec une résolution Sauvegarde
- Amélioration des images des rencontres (merci Sasmira)
- Unité manquante pour le prix de l'armure de plaques, de l'épée longue et de la lance

# 1.5.0

- Ajout des Actions de Sauvegarde pour les profils et les voies de prestige
- Ajout des Actions de Sauvegarde pour les capacités de rencontre et mise à jour des rencontres
- Correction d'un lien cassé et Animal Fantastique manquant

# 1.4.1

- Mise à jour du guide utilisateur pour la version 1.4.0
- Correction de la formule de l'équipement Feu grégeois

# 1.4.0

- Modification de l'image du peuple demi-orc (issue [#55](https://github.com/BlackBookEditions/foundry-cof2-base/issues/55))
- Correction Rapière et Vivelame pour ajuster le critique (issue [#57](https://github.com/BlackBookEditions/foundry-cof2-base/issues/57))
- Correction lance cavalerie équipable (issue [#56](https://github.com/BlackBookEditions/foundry-cof2-base/issues/56))
- Correction de mauvais rang (issue [#53](https://github.com/BlackBookEditions/foundry-cof2-base/issues/53))
- Modification des effets avec durée Combat
- Capacité Dentelles et rapière activable et temporaire (issue [#57](https://github.com/BlackBookEditions/foundry-cof2-base/issues/57))
- Correction de la résolution de Nature nourricière (issue [#63](https://github.com/BlackBookEditions/foundry-cof2-base/issues/63))
- Corrections mineures pour les armes (issue [#70](https://github.com/BlackBookEditions/foundry-cof2-base/issues/70))
  - Épée courte : Type de dommages actuellement Tranchants au lieu de Perforants
  - Lance de cavalerie : Équipable non coché
  - Arbalète Lourde : dans la description, elle se recharge sur une Action Limité et non de mouvement.
  - Couteaux de lancer : Dans l’effet « attaque de contact », la formule de compétence doit être @atc et il manque le bonus de force aux dommages
- Correction Protéger un allié : Modificateur "Caractéristique" qui doit être "Jet de compétence".

# 1.3.0

- Correction de la formule de l'attaque sournoise
- Prétirés : Mise à jour des capacités avec les dernières versions
- Correction sur les rencontres
- Correction de la capacité Vampirisation

# 1.2.0

- Capacités Attaque sournoise, Dentelles et rapières : Correction formule
- Capacité diversité : orthographe
- Correction ortographe arme
- Peuple demi-elfe séparé en trois peuples selon l'origine
- Amélioration visuelle des journaux (police et fond) par Sasmira
- Frappe de golem : correction des dommages (issue [#50](https://github.com/BlackBookEditions/foundry-cof2-base/issues/50))
- Mise à jour du guide utilisateur pour la version 1.1.0

# 1.1.0

- Ajoute la caractéristique INT aux dommages de l'arc de feu (issue [#41](https://github.com/BlackBookEditions/foundry-cof2-base/issues/41))
- Corrige l'ordre des capacités de la voie du pagne
- Correction de la Constitution héroïque de la voie de la nature du druide et harmonisation du texte
- Problème de coût en point de compétence (issue [#46](https://github.com/BlackBookEditions/foundry-cof2-base/issues/46))

# 1.0.7

- Correction lien image manque (issue [#33](https://github.com/BlackBookEditions/foundry-cof2-base/issues/33))
- Image mal définie dans le css (issue [#34](https://github.com/BlackBookEditions/foundry-cof2-base/issues/34))
- Correction capacité Course du vent (issue [#35](https://github.com/BlackBookEditions/foundry-cof2-base/issues/35))

# 1.0.6

- Correctif sur les liens des compendiums

# 1.0.5

- Diverses corrections suite au changement d'id

# 1.0.4

- Correction du lien vers les images (suite changement id)

# 1.0.3

- Changement de l'id du package Foundry

# 1.0.2

- Release technique pour le déploiement automatique

# 1.0.1

- Ajout du répertoire templates lors du build
- Ajout du déploiement automatique

# 1.0.0

- Sortie officielle du module
