Hooks.once("init", () => {
  console.info("COF | Module COF loading...")

  // Load Martial Training
  if (game.system.CONST.martialTrainingsWeapons.length == 0) {
    // Mains nues
    game.system.CONST.martialTrainingsWeapons.push({ key: "unarmed", label: "COF.config.martialTrainingWeapon.unarmed" })

    // Bâton
    game.system.CONST.martialTrainingsWeapons.push({ key: "staff", label: "COF.config.martialTrainingWeapon.staff" })

    // Bâton ferré
    game.system.CONST.martialTrainingsWeapons.push({ key: "ironStaff", label: "COF.config.martialTrainingWeapon.ironStaff" })

    // Dague
    game.system.CONST.martialTrainingsWeapons.push({ key: "dagger", label: "COF.config.martialTrainingWeapon.dagger" })

    // Épée à deux mains
    game.system.CONST.martialTrainingsWeapons.push({ key: "greatSword", label: "COF.config.martialTrainingWeapon.greatSword" })

    // Épée bâtarde
    game.system.CONST.martialTrainingsWeapons.push({ key: "bastardSword", label: "COF.config.martialTrainingWeapon.bastardSword" })

    // Épée courte
    game.system.CONST.martialTrainingsWeapons.push({ key: "shortSword", label: "COF.config.martialTrainingWeapon.shortSword" })

    // Épée longue
    game.system.CONST.martialTrainingsWeapons.push({ key: "longSword", label: "COF.config.martialTrainingWeapon.longSword" })

    // Épieu
    game.system.CONST.martialTrainingsWeapons.push({ key: "spear", label: "COF.config.martialTrainingWeapon.spear" })

    // Fléau
    game.system.CONST.martialTrainingsWeapons.push({ key: "flail", label: "COF.config.martialTrainingWeapon.flail" })

    // Fléau à deux mains
    game.system.CONST.martialTrainingsWeapons.push({ key: "greatFlail", label: "COF.config.martialTrainingWeapon.greatFlail" })

    // Gourdin
    game.system.CONST.martialTrainingsWeapons.push({ key: "club", label: "COF.config.martialTrainingWeapon.club" })

    // Hache
    game.system.CONST.martialTrainingsWeapons.push({ key: "axe", label: "COF.config.martialTrainingWeapon.axe" })

    // Hache à deux mains
    game.system.CONST.martialTrainingsWeapons.push({ key: "greatAxe", label: "COF.config.martialTrainingWeapon.greatAxe" })

    // Lance
    game.system.CONST.martialTrainingsWeapons.push({ key: "lance", label: "COF.config.martialTrainingWeapon.lance" })

    // Lance de cavalerie
    game.system.CONST.martialTrainingsWeapons.push({ key: "cavalryLance", label: "COF.config.martialTrainingWeapon.cavalryLance" })

    // Marteau
    game.system.CONST.martialTrainingsWeapons.push({ key: "hammer", label: "COF.config.martialTrainingWeapon.hammer" })

    // Masse
    game.system.CONST.martialTrainingsWeapons.push({ key: "mace", label: "COF.config.martialTrainingWeapon.mace" })

    // Pique
    game.system.CONST.martialTrainingsWeapons.push({ key: "pike", label: "COF.config.martialTrainingWeapon.pike" })

    // Rapière
    game.system.CONST.martialTrainingsWeapons.push({ key: "rapier", label: "COF.config.martialTrainingWeapon.rapier" })

    // Stylet
    game.system.CONST.martialTrainingsWeapons.push({ key: "stiletto", label: "COF.config.martialTrainingWeapon.stiletto" })

    // Vivelame
    game.system.CONST.martialTrainingsWeapons.push({ key: "swiftblade", label: "COF.config.martialTrainingWeapon.swiftblade" })

    // Arbalète de poing
    game.system.CONST.martialTrainingsWeapons.push({ key: "handCrossbow", label: "COF.config.martialTrainingWeapon.handCrossbow" })

    // Arbalète légère
    game.system.CONST.martialTrainingsWeapons.push({ key: "lightCrossbow", label: "COF.config.martialTrainingWeapon.lightCrossbow" })

    // Arbalète lourde
    game.system.CONST.martialTrainingsWeapons.push({ key: "heavyCrossbow", label: "COF.config.martialTrainingWeapon.heavyCrossbow" })

    // Arc court
    game.system.CONST.martialTrainingsWeapons.push({ key: "shortBow", label: "COF.config.martialTrainingWeapon.shortBow" })

    // Arc long
    game.system.CONST.martialTrainingsWeapons.push({ key: "longBow", label: "COF.config.martialTrainingWeapon.longBow" })

    // Couteau de lancer
    game.system.CONST.martialTrainingsWeapons.push({ key: "throwingKnife", label: "COF.config.martialTrainingWeapon.throwingKnife" })

    // Dague (version jet)
    game.system.CONST.martialTrainingsWeapons.push({ key: "throwingDagger", label: "COF.config.martialTrainingWeapon.throwingDagger" })

    // Fronde
    game.system.CONST.martialTrainingsWeapons.push({ key: "sling", label: "COF.config.martialTrainingWeapon.sling" })

    // Hachette (version jet)
    game.system.CONST.martialTrainingsWeapons.push({ key: "throwingAxe", label: "COF.config.martialTrainingWeapon.throwingAxe" })

    // Javelot
    game.system.CONST.martialTrainingsWeapons.push({ key: "javelin", label: "COF.config.martialTrainingWeapon.javelin" })

    // Lance (version jet)
    game.system.CONST.martialTrainingsWeapons.push({ key: "throwingSpear", label: "COF.config.martialTrainingWeapon.throwingSpear" })

    // Pétoire
    game.system.CONST.martialTrainingsWeapons.push({ key: "handCannon", label: "COF.config.martialTrainingWeapon.handCannon" })

    // Mousquet
    game.system.CONST.martialTrainingsWeapons.push({ key: "musket", label: "COF.config.martialTrainingWeapon.musket" })
  }

  if (game.system.CONST.martialTrainingsArmors.length == 0) {
    // Tissus matelassés, fourrures
    game.system.CONST.martialTrainingsArmors.push({ key: "paddedClothFur", label: "COF.config.martialTrainingArmor.paddedClothFur" })

    // Cuir simple
    game.system.CONST.martialTrainingsArmors.push({ key: "leather", label: "COF.config.martialTrainingArmor.leather" })

    // Cuir renforcé, broigne
    game.system.CONST.martialTrainingsArmors.push({ key: "studdedLeather", label: "COF.config.martialTrainingArmor.studdedLeather" })

    // Chemise de mailles
    game.system.CONST.martialTrainingsArmors.push({ key: "chainShirt", label: "COF.config.martialTrainingArmor.chainShirt" })

    // Cotte de mailles
    game.system.CONST.martialTrainingsArmors.push({ key: "chainMail", label: "COF.config.martialTrainingArmor.chainMail" })

    // Armure de plaques
    game.system.CONST.martialTrainingsArmors.push({ key: "plateArmor", label: "COF.config.martialTrainingArmor.plateArmor" })

    // Plaque complète
    game.system.CONST.martialTrainingsArmors.push({ key: "fullPlate", label: "COF.config.martialTrainingArmor.fullPlate" })
  }

  if (game.system.CONST.martialTrainingsShields.length == 0) {
    // Petit bouclier
    game.system.CONST.martialTrainingsShields.push({ key: "smallShield", label: "COF.config.martialTrainingShield.smallShield" })

    // Grand bouclier
    game.system.CONST.martialTrainingsShields.push({ key: "largeShield", label: "COF.config.martialTrainingShield.largeShield" })
  }
})

Hooks.once("ready", async () => {
  console.info("COF | Module COF loaded.")
})
