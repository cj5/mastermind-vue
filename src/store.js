import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: 'Mastermind',
    selectedColor: 'color-1',
    gameLength: 8,
    rowCount: 0,
    gameCode: [],
    guessCode: [0,0,0,0],
    feedback: []  
  },
  mutations: {
    
  },
  actions: {
    selectedColor() {
      this.state.selectedColor = event.target.id;

      document.querySelector('.select-spot.active').classList.remove('active');
      event.target.classList.add('active');
    },
    gameCode() {
      //🐞 3, 2, 1, 1 => w, w, w, w; should be w, w, w, x
      let gameCode = [];
      for (let i = 0; i < 4; i++) {
        gameCode.push(Math.floor(Math.random() * 6 + 1));
      }
      this.state.gameCode = gameCode;
    },
    feedback() {
      const gameCodeSave = this.state.gameCode;
      let gameCode = gameCodeSave.map(x => x);
      const guessCode = this.state.guessCode;
      let feedback = [0,0,0,0]

      // CHECK FOR RIGHT COLOR IN RIGHT SPOT (RETURN BLACK PEG)
      for (let i = 0; i < 4; i++) {
        // console.log('--------');
        // console.log('i['+i+']: '+guessCode[i]+' (guess)');
        // console.log('i['+i+']: '+gameCode[i]);
        // console.log('--');
        for (let j = 0; j < 4; j++) {
          // console.log('j['+j+']: '+gameCode[j]);
          if (guessCode[i] === gameCode[i]) {
            feedback[i] = 2;
            gameCode[i] = -2;
            // console.log('feedback: '+feedback);
          }
        }
      }

      // CHECK FOR RIGHT COLOR IN WRONG SPOT (RETURN WHITE PEG)
      for (let i = 0; i < 4; i++) {
        // console.log('--------');
        // console.log('i['+i+']: '+guessCode[i]+' (guess)');
        // console.log('i['+i+']: '+gameCode[i]);
        // console.log('--');
        for (let j = 0; j < 4; j++) {
          // console.log('j['+j+']: '+gameCode[j]);
           if (guessCode[i] === gameCode[j] && guessCode[i] !== gameCode[i] && feedback[i] !== 2) {
            feedback[i] = 1;
            guessCode[i] = -1;
            gameCode[j] = -1
            // console.log('guessCode: '+guessCode);
            // console.log('gameCode: '+gameCode);
            // console.log('feedback: '+feedback);
          }
        }
      }

      gameCode = gameCodeSave;
      const sortedFeedback = feedback.sort().reverse();
      feedback = sortedFeedback;
      this.state.feedback = feedback;
      
      for (let i = 0; i < 4; i++) {
        if (feedback[i] === 2) {
          document.querySelector('.active #key-spot-'+(i+1)).classList.add('color-4');
        } else if (feedback[i] === 1) {
          document.querySelector('.active #key-spot-'+(i+1)).classList.add('color-3');
        }
      }
      if (feedback[0] && feedback[1] && feedback[2] && feedback[3] === 2 ) {
        setTimeout(() => {
          alert('You win!')
        }, 200);
      }
    }
  }
});
