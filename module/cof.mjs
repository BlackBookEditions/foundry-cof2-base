import CofActor from "./actor/actor.mjs";

Hooks.once("init", () => {
    console.info("COF | Module COF loading...");

    CONFIG.Actor.documentClass = CofActor;

    // Load Martial Training
    if (game.co.config.martialTrainingsWeapons.length == 0) {
        game.co.config.martialTrainingsWeapons.push({key: 'club', label: "CO.config.martialTrainingWeapon.club"});
        game.co.config.martialTrainingsWeapons.push({key: 'stick', label: "CO.config.martialTrainingWeapon.stick"});
        game.co.config.martialTrainingsWeapons.push({key: 'ironedstick', label: "CO.config.martialTrainingWeapon.ironed-stick"});
        game.co.config.martialTrainingsWeapons.push({key: 'dagger', label: "CO.config.martialTrainingWeapon.dagger"});
        game.co.config.martialTrainingsWeapons.push({key: 'bastard-sword', label: "CO.config.martialTrainingWeapon.bastard-sword"});
        game.co.config.martialTrainingsWeapons.push({key: 'short-sword', label: "CO.config.martialTrainingWeapon.short-sword"});
        game.co.config.martialTrainingsWeapons.push({key: 'long-sword', label: "CO.config.martialTrainingWeapon.long-sword"});
        game.co.config.martialTrainingsWeapons.push({key: 'axe', label: "CO.config.martialTrainingWeapon.axe"});
        game.co.config.martialTrainingsWeapons.push({key: 'two-handed-sword', label: "CO.config.martialTrainingWeapon.two-handed-sword"});
        game.co.config.martialTrainingsWeapons.push({key: 'two-handed-axe', label: "CO.config.martialTrainingWeapon.two-handed-axe"});
        game.co.config.martialTrainingsWeapons.push({key: 'mace', label: "CO.config.martialTrainingWeapon.mace"});
        game.co.config.martialTrainingsWeapons.push({key: 'hammer', label: "CO.config.martialTrainingWeapon.hammer"});
        game.co.config.martialTrainingsWeapons.push({key: 'rapier', label: "CO.config.martialTrainingWeapon.rapier"});
        game.co.config.martialTrainingsWeapons.push({key: 'vivelame', label: "CO.config.martialTrainingWeapon.vivelame"});
        game.co.config.martialTrainingsWeapons.push({key: 'katana', label: "CO.config.martialTrainingWeapon.katana"});
    }

    if (game.co.config.martialTrainingsArmors.length == 0) {
        game.co.config.martialTrainingsArmors.push({key: 'leather', label: "CO.config.martialTrainingArmor.leather"});
        game.co.config.martialTrainingsArmors.push({key: 'reinforced-leather', label: "CO.config.martialTrainingArmor.reinforced-leather"});
        game.co.config.martialTrainingsArmors.push({key: 'mail', label: "CO.config.martialTrainingArmor.mail"});
        game.co.config.martialTrainingsArmors.push({key: 'half-plate', label: "CO.config.martialTrainingArmor.half-plate"});
        game.co.config.martialTrainingsArmors.push({key: 'full-plate', label: "CO.config.martialTrainingArmor.full-plate"});
    }

})

Hooks.once("ready", async () => {   
    console.info("COF | Module COF loaded.");
})
