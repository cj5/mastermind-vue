import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: 'Mastermind',
    colorClass: 'color-1',
    gameCount: 0,
    gameLength: 8,
    // gameCode: []
  },
  mutations: {
    
  },
  actions: {
    selectedColor() {
      this.state.colorClass = event.target.id;

      document.querySelector('.select-spot.active').classList.remove('active');
      event.target.classList.add('active');
    },
    gameCode() {
      let gameCode = [];
      for (let i = 0; i < 4; i++) {
        gameCode.push(Math.floor((Math.random() * 6) + 1));
      }
      this.state.gameCode = gameCode;
      console.log('gameCode => '+gameCode);
    }
  }
});
