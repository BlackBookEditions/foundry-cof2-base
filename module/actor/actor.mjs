import CoActor from "../../../../systems/co/module/actor/actor.mjs";

export default class CofActor extends CoActor {
  _computeBaseFP() {
    return 3 + this.system.abilities.cha.mod;
  }

  /**
   * @description Retourne le malus à l'initiative lié à l'armure
   * @override
   * @returns Pas de malus dans COF
   */
  getOverloadMalusToInitiative() {
    return 0;
  }
  
  /**
   * @description Retourne le malus à l'initiative lié à l'incompétence armes/armures
   * @override
   * @returns 
   */
  getIncompetentMalusToInitiative() {
    return 0;
  }
}
