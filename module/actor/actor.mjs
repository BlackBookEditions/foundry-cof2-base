import CoActor from "../../../../systems/co/module/actor/actor.mjs";

export default class CofActor extends CoActor {
  _computeBaseFP() {
    return 3 + this.system.abilities.cha.mod;
  }

  /**
   * @description Porter une armure pour laquelle on n’est pas formé impose également un malus de -3 en initiative, en attaque et à tous les tests de FOR et de DEX.
   * @override
   * @returns 
   */
  getIncompetentMalusToInitiative() {
    return 0;
  }
}
