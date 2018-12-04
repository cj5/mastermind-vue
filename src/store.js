import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: 'Mastermind',
    colorClass: 'color-2'
  },
  mutations: {
    
  },
  actions: {
    selectedColor () {
      console.log(event.target.id);
      this.state.colorClass = event.target.id;
      document.querySelector('.select-spot.active').classList.remove('active');
      event.target.classList.add('active');      
    }
  }
});