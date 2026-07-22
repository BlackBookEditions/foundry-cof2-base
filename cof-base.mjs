Hooks.once("init", () => {
  console.info("COF Livre des règles | Initialisation du module...")

  // Chargement des formations martiales (armes, armures, boucliers) si elles ne sont pas déjà présentes dans le système.
  if (game.system.CONST.martialTrainingsWeapons.length == 0) {
    // Mains nues
    game.system.CONST.martialTrainingsWeapons.push({ key: "unarmed", label: "COFBASE.config.martialTrainingWeapon.unarmed" })

    // Bâton
    game.system.CONST.martialTrainingsWeapons.push({ key: "staff", label: "COFBASE.config.martialTrainingWeapon.staff" })

    // Bâton ferré
    game.system.CONST.martialTrainingsWeapons.push({ key: "ironStaff", label: "COFBASE.config.martialTrainingWeapon.ironStaff" })

    // Dague
    game.system.CONST.martialTrainingsWeapons.push({ key: "dagger", label: "COFBASE.config.martialTrainingWeapon.dagger" })

    // Épée à deux mains
    game.system.CONST.martialTrainingsWeapons.push({ key: "greatSword", label: "COFBASE.config.martialTrainingWeapon.greatSword" })

    // Épée bâtarde
    game.system.CONST.martialTrainingsWeapons.push({ key: "bastardSword", label: "COFBASE.config.martialTrainingWeapon.bastardSword" })

    // Épée courte
    game.system.CONST.martialTrainingsWeapons.push({ key: "shortSword", label: "COFBASE.config.martialTrainingWeapon.shortSword" })

    // Épée longue
    game.system.CONST.martialTrainingsWeapons.push({ key: "longSword", label: "COFBASE.config.martialTrainingWeapon.longSword" })

    // Épieu
    game.system.CONST.martialTrainingsWeapons.push({ key: "spear", label: "COFBASE.config.martialTrainingWeapon.spear" })

    // Fléau
    game.system.CONST.martialTrainingsWeapons.push({ key: "flail", label: "COFBASE.config.martialTrainingWeapon.flail" })

    // Fléau à deux mains
    game.system.CONST.martialTrainingsWeapons.push({ key: "greatFlail", label: "COFBASE.config.martialTrainingWeapon.greatFlail" })

    // Gourdin
    game.system.CONST.martialTrainingsWeapons.push({ key: "club", label: "COFBASE.config.martialTrainingWeapon.club" })

    // Hache
    game.system.CONST.martialTrainingsWeapons.push({ key: "axe", label: "COFBASE.config.martialTrainingWeapon.axe" })

    // Hache à deux mains
    game.system.CONST.martialTrainingsWeapons.push({ key: "greatAxe", label: "COFBASE.config.martialTrainingWeapon.greatAxe" })

    // Lance
    game.system.CONST.martialTrainingsWeapons.push({ key: "lance", label: "COFBASE.config.martialTrainingWeapon.lance" })

    // Lance de cavalerie
    game.system.CONST.martialTrainingsWeapons.push({ key: "cavalryLance", label: "COFBASE.config.martialTrainingWeapon.cavalryLance" })

    // Marteau
    game.system.CONST.martialTrainingsWeapons.push({ key: "hammer", label: "COFBASE.config.martialTrainingWeapon.hammer" })

    // Masse
    game.system.CONST.martialTrainingsWeapons.push({ key: "mace", label: "COFBASE.config.martialTrainingWeapon.mace" })

    // Pique
    game.system.CONST.martialTrainingsWeapons.push({ key: "pike", label: "COFBASE.config.martialTrainingWeapon.pike" })

    // Rapière
    game.system.CONST.martialTrainingsWeapons.push({ key: "rapier", label: "COFBASE.config.martialTrainingWeapon.rapier" })

    // Stylet
    game.system.CONST.martialTrainingsWeapons.push({ key: "stiletto", label: "COFBASE.config.martialTrainingWeapon.stiletto" })

    // Vivelame
    game.system.CONST.martialTrainingsWeapons.push({ key: "swiftblade", label: "COFBASE.config.martialTrainingWeapon.swiftblade" })

    // Arbalète de poing
    game.system.CONST.martialTrainingsWeapons.push({ key: "handCrossbow", label: "COFBASE.config.martialTrainingWeapon.handCrossbow" })

    // Arbalète légère
    game.system.CONST.martialTrainingsWeapons.push({ key: "lightCrossbow", label: "COFBASE.config.martialTrainingWeapon.lightCrossbow" })

    // Arbalète lourde
    game.system.CONST.martialTrainingsWeapons.push({ key: "heavyCrossbow", label: "COFBASE.config.martialTrainingWeapon.heavyCrossbow" })

    // Arc court
    game.system.CONST.martialTrainingsWeapons.push({ key: "shortBow", label: "COFBASE.config.martialTrainingWeapon.shortBow" })

    // Arc long
    game.system.CONST.martialTrainingsWeapons.push({ key: "longBow", label: "COFBASE.config.martialTrainingWeapon.longBow" })

    // Couteau de lancer
    game.system.CONST.martialTrainingsWeapons.push({ key: "throwingKnife", label: "COFBASE.config.martialTrainingWeapon.throwingKnife" })

    // Dague (version jet)
    game.system.CONST.martialTrainingsWeapons.push({ key: "throwingDagger", label: "COFBASE.config.martialTrainingWeapon.throwingDagger" })

    // Fronde
    game.system.CONST.martialTrainingsWeapons.push({ key: "sling", label: "COFBASE.config.martialTrainingWeapon.sling" })

    // Hachette (version jet)
    game.system.CONST.martialTrainingsWeapons.push({ key: "throwingAxe", label: "COFBASE.config.martialTrainingWeapon.throwingAxe" })

    // Javelot
    game.system.CONST.martialTrainingsWeapons.push({ key: "javelin", label: "COFBASE.config.martialTrainingWeapon.javelin" })

    // Lance (version jet)
    game.system.CONST.martialTrainingsWeapons.push({ key: "throwingSpear", label: "COFBASE.config.martialTrainingWeapon.throwingSpear" })

    // Pétoire
    game.system.CONST.martialTrainingsWeapons.push({ key: "handCannon", label: "COFBASE.config.martialTrainingWeapon.handCannon" })

    // Mousquet
    game.system.CONST.martialTrainingsWeapons.push({ key: "musket", label: "COFBASE.config.martialTrainingWeapon.musket" })
  }

  if (game.system.CONST.martialTrainingsArmors.length == 0) {
    // Tissus matelassés, fourrures
    game.system.CONST.martialTrainingsArmors.push({ key: "paddedClothFur", label: "COFBASE.config.martialTrainingArmor.paddedClothFur" })

    // Cuir simple
    game.system.CONST.martialTrainingsArmors.push({ key: "leather", label: "COFBASE.config.martialTrainingArmor.leather" })

    // Cuir renforcé, broigne
    game.system.CONST.martialTrainingsArmors.push({ key: "studdedLeather", label: "COFBASE.config.martialTrainingArmor.studdedLeather" })

    // Chemise de mailles
    game.system.CONST.martialTrainingsArmors.push({ key: "chainShirt", label: "COFBASE.config.martialTrainingArmor.chainShirt" })

    // Cotte de mailles
    game.system.CONST.martialTrainingsArmors.push({ key: "chainMail", label: "COFBASE.config.martialTrainingArmor.chainMail" })

    // Armure de plaques
    game.system.CONST.martialTrainingsArmors.push({ key: "plateArmor", label: "COFBASE.config.martialTrainingArmor.plateArmor" })

    // Plaque complète
    game.system.CONST.martialTrainingsArmors.push({ key: "fullPlate", label: "COFBASE.config.martialTrainingArmor.fullPlate" })
  }

  if (game.system.CONST.martialTrainingsShields.length == 0) {
    // Petit bouclier
    game.system.CONST.martialTrainingsShields.push({ key: "smallShield", label: "COFBASE.config.martialTrainingShield.smallShield" })

    // Grand bouclier
    game.system.CONST.martialTrainingsShields.push({ key: "largeShield", label: "COFBASE.config.martialTrainingShield.largeShield" })
  }

  // Postures défensives : manœuvre propre à COF2, absente de COC2 et de CTH, donc portée par ce module.
  // Le statut fournit le bonus de DEF, l'entrée defenseStances le bouton de la barre d'outils des fiches.
  if (game.system.CONST.defenseStances.length === 0) {
    CONFIG.statusEffects.push(
      {
        id: "partialDef",
        name: "COFBASE.customStatus.partialDef",
        img: "systems/co2/ui/effects/partialdef.webp",
        changes: [{ key: "system.combat.def.bonuses.effects", mode: 2, value: 3 }],
        description: "COFBASE.customStatus.partialDefDescription",
      },
      {
        id: "fullDef",
        name: "COFBASE.customStatus.fullDef",
        img: "systems/co2/ui/effects/totaldef.webp",
        changes: [{ key: "system.combat.def.bonuses.effects", mode: 2, value: 5 }],
        description: "COFBASE.customStatus.fullDefDescription",
      },
    )

    game.system.CONST.defenseStances.push(
      {
        id: "partialDef",
        icon: "fa-solid fa-shield-halved",
        activateLabel: "COFBASE.customStatus.partialDefActivate",
        deactivateLabel: "COFBASE.customStatus.partialDefDeactivate",
      },
      {
        id: "fullDef",
        icon: "fa-solid fa-shield",
        activateLabel: "COFBASE.customStatus.fullDefActivate",
        deactivateLabel: "COFBASE.customStatus.fullDefDeactivate",
      },
    )
  }

  // Récupération rapide et complète : règles propres à COF2, absentes de COC2 et de CTH, donc portées par ce module. 
  // La mécanique reste dans le système (CharacterData#useRecovery), qui manipule des champs du modèle, recharge les capacités et émet les hooks co2.preUseRecovery / co2.postUseRecovery.
  // Seul le déclencheur est ici : les deux boutons de la barre d'outils des fiches.
  if (game.system.CONST.restActions.length === 0) {
    game.system.CONST.restActions.push(
      {
        id: "fastRest",
        icon: "fa-solid fa-mug-saucer",
        label: "CO.ui.fastRest",
        handler: (actor) => actor.system.useRecovery(false),
      },
      {
        id: "fullRest",
        icon: "fa-solid fa-bed",
        label: "CO.ui.fullRest",
        handler: (actor) => actor.system.useRecovery(true),
      },
    )
  }

  // Objets de départ copiés sur tout nouveau personnage : Mains nues et Support sont des objets
  // de COF2, portés par les compendiums de ce module.
  if (game.system.CONST.baseItems.length === 0) {
    game.system.CONST.baseItems.push(
      "Compendium.cof2-base.cof-2-base-items.Item.bwUmODTqsTqPbRr9", // Mains nues
      "Compendium.cof2-base.cof-2-base-items.Item.0PawJrcH7daQ8RoJ", // Support
    )
  }

  // Tags d'équipement : les trois tags existants sont propres à COF2 et ne sont portés que par les
  // compendiums de ce module, c'est donc lui qui les déclare. Le système ne connaît que leurs
  // identifiants, auxquels il ne réagit que si la règle correspondante est activée.
  if (Object.keys(game.system.CONST.EQUIPMENT_TAGS).length === 0) {
    Object.assign(game.system.CONST.EQUIPMENT_TAGS, {
      dmtemporaires: { id: "dmtemporaires", label: "COFBASE.equipment.tags.dmtemporaires" },
      dmtemporairespossibles: { id: "dmtemporairespossibles", label: "COFBASE.equipment.tags.dmtemporairespossibles" },
      legere: { id: "legere", label: "COFBASE.equipment.tags.legere" },
    })
  }

  // Règles propres à COF2, absentes de COC2 et de CTH. Les mécaniques restent dans le système —
  // relance des jets et mise à jour des cartes de chat, récupération, application des dommages —
  // seule leur disponibilité est activée ici.
  Object.assign(game.system.CONST.rules, { luckPoints: true, recoveryPoints: true, tempDamage: true })

  console.info("COF Livre de base | Fin de l'initialisation du module")
})

Hooks.once("ready", async () => {
  console.info("COF Livre des règles | Module prêt")
})

/*
/* Render Journal Sheet Hook to style the Journal Entry
 */
Hooks.on("renderJournalEntrySheet", (application, element, context, options) => {
  if (application.document.getFlag("cof2-base", "isJournalCOF") === true) {
    element.classList.add("journal-cof-base")
  }
})

/*
 * Hook renderCOSidebarMenu
 */
Hooks.on("renderCOSidebarMenu", async (application, html, context, options) => {
  console.log("COF Livre des règles | Ajout du menu dans la barre latérale")
  let element = html.querySelector(".co.support")

  if (element) {
    const renderedHtml = await foundry.applications.handlebars.renderTemplate("modules/cof2-base/templates/sidebar-menu.hbs", {
      user: game.user,
    })

    if (renderedHtml !== "") {
      element.insertAdjacentHTML("afterend", renderedHtml)
    }
  }
})
