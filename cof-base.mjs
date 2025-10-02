Hooks.once("init", () => {
  console.info("COF Livre des règles | Initialisation du module...")

  // Load Martial Training
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

  console.info("COF Livre de base | Fin de l'initialisation du module")
})

Hooks.once("ready", async () => {
  console.info("COF Livre des règles | Module prêt")
})

/*
/* Render Journal Sheet Hook to style the Journal Entry
 */
Hooks.on("renderJournalEntrySheet", (application, element, context, options) => {
  if (application.document.getFlag("cof-base", "isJournalCOF") === true) {
    element.classList.add("journal-cof-base")
  }
})

/*
 * Hook renderCOSidebarMenu
 */
Hooks.on("renderCOSidebarMenu", async (application, html, context, options) => {
  console.log("COF Livre des règles | Ajout du menu dans la barre latérale")
  let element = html.querySelector(".co.support")
  //if (!element) element = html.querySelector(".co.system")

  if (element) {
      const renderedHtml = await foundry.applications.handlebars.renderTemplate("modules/cof2-base/templates/sidebar-menu.hbs", {
      user: game.user,
    })

    if (renderedHtml !== "") {
      element.insertAdjacentHTML("afterend", renderedHtml)
    }
  }
})