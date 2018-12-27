import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: 'Mastermind',
    selectedColor: 'color-1',
    gameLength: 8,
    rowCount: 0,
    gameCode: [],
    guessCode: [0,0,0,0],
    guessColor1: '',
    guessColor2: '',
    guessColor3: '',
    guessColor4: '',
    feedback: [],
    gameResult: '',
    gameTime: '',
    showGameResults: '',
    didWin: false
  },
  mutations: {
    gameCode() {
      let gameCode = [];
      for (let i = 0; i < 4; i++) {
        gameCode.push(Math.floor(Math.random() * 6 + 1));
      }
      this.state.gameCode = gameCode;
      console.log('gameCode: '+this.state.gameCode);
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
            // console.log('guessCode: '+this.state.guessCode);
            // console.log('gameCode: '+gameCode);
            // console.log('feedback: '+feedback);
          }
        }
      }

      gameCode = gameCodeSave;
      const sortedFeedback = feedback.sort().reverse();
      feedback = sortedFeedback;
      this.state.feedback = feedback;
      console.log('feedback: '+this.state.feedback);
      
      for (let i = 0; i < 4; i++) {
        if (feedback[i] === 2) {
          document.querySelector('.active #key-spot-'+(i+1)).classList.add('color-4');
        } else if (feedback[i] === 1) {
          document.querySelector('.active #key-spot-'+(i+1)).classList.add('color-3');
        }
      }
      if (feedback[0] && feedback[1] && feedback[2] && feedback[3] === 2 ) {
        this.state.didWin = true;
        setTimeout(() => {
          this.state.gameResult = 'You win!!'
          this.state.showGameResults = 'show win'
        }, 500);
      }
    },
  },
  actions: {
    // gameTime() {

    // },
    selectedColor() {
      this.state.selectedColor = event.target.id;

      document.querySelector('.select-spot.active').classList.remove('active');
      event.target.classList.add('active');
    },
    // ======================================================
    // ** Refactor these updateColorN() methods into one!! **
    updateColor1() {
      if (event.path[2].className.includes('active')) {
        let spotEl = document.querySelector('.active .spot-1');
        spotEl.className.split(" ").filter(c => !c.startsWith('color-'));
        if (spotEl.className.includes('color-')) {
          const colorClass = spotEl.className.split(" ").filter(c => c.startsWith('color'));
          spotEl.classList.remove(colorClass[0]);
        }
        this.guessColor1 = this.state.selectedColor;
        event.target.classList.add(this.guessColor1);
        let selectedColor = this.state.selectedColor;
        let n = parseInt(selectedColor.substring(selectedColor.indexOf("-") + 1));
        this.state.guessCode[0] = n;
        if (!this.state.guessCode.includes(0)) {
          document.querySelector('.submit').classList.add('show');
          console.log('guessCode: '+this.state.guessCode);
        }
      }
    },
    updateColor2() {
      if (event.path[2].className.includes('active')) {
        let spotEl = document.querySelector('.active .spot-2');
        spotEl.className.split(" ").filter(c => !c.startsWith('color-'));
        if (spotEl.className.includes('color-')) {
          const colorClass = spotEl.className.split(" ").filter(c => c.startsWith('color'));
          spotEl.classList.remove(colorClass[0]);
        }
        this.guessColor2 = this.state.selectedColor;
        event.target.classList.add(this.guessColor2);
        let selectedColor = this.state.selectedColor;
        let n = parseInt(selectedColor.substring(selectedColor.indexOf("-") + 1));
        this.state.guessCode[1] = n;
        if (!this.state.guessCode.includes(0)) {
          document.querySelector('.submit').classList.add('show');
          console.log('guessCode: '+this.state.guessCode);
        }
      }
    },
    updateColor3() {
      if (event.path[2].className.includes('active')) {
        let spotEl = document.querySelector('.active .spot-3');
        spotEl.className.split(" ").filter(c => !c.startsWith('color-'));
        if (spotEl.className.includes('color-')) {
          const colorClass = spotEl.className.split(" ").filter(c => c.startsWith('color'));
          spotEl.classList.remove(colorClass[0]);
        }
        this.guessColor3 = this.state.selectedColor;
        event.target.classList.add(this.guessColor3);
        let selectedColor = this.state.selectedColor;
        let n = parseInt(selectedColor.substring(selectedColor.indexOf("-") + 1));
        this.state.guessCode[2] = n;
        if (!this.state.guessCode.includes(0)) {
          document.querySelector('.submit').classList.add('show');
          console.log('guessCode: '+this.state.guessCode);
        }
      }
    },
    updateColor4() {
      if (event.path[2].className.includes('active')) {
        let spotEl = document.querySelector('.active .spot-4');
        spotEl.className.split(" ").filter(c => !c.startsWith('color-'));
        if (spotEl.className.includes('color-')) {
          const colorClass = spotEl.className.split(" ").filter(c => c.startsWith('color'));
          spotEl.classList.remove(colorClass[0]);
        }
        this.guessColor4 = this.state.selectedColor;
        event.target.classList.add(this.guessColor4);
        let selectedColor = this.state.selectedColor;
        let n = parseInt(selectedColor.substring(selectedColor.indexOf("-") + 1));
        this.state.guessCode[3] = n;
        if (!this.state.guessCode.includes(0)) {
          document.querySelector('.submit').classList.add('show');
          console.log('guessCode: '+this.state.guessCode);
        }
      }
    },
    submit({commit}) {
      commit('feedback');
      document.querySelector('.submit').classList.remove('show');
      if (this.state.rowCount < this.state.gameLength - 1) {        
        this.state.rowCount++
        document.querySelector('.row-wrapper.active').classList.remove('active');
        let activeClass = this.state.rowCount + 1;
        document.querySelector('.row-wrapper.row-'+activeClass).classList.add('active');
      } else if (this.state.rowCount >= this.state.gameLength - 1 && this.state.didWin === false) {
        setTimeout(() => {
          this.state.gameResult = 'You lose.'
          this.state.showGameResults = 'show lose'
        }, 500);
      }
      this.state.guessCode = [0,0,0,0];
    },
    gameLength6() { this.state.gameLength = 6; },
    gameLength8() { this.state.gameLength = 8; },
    gameLength10() { this.state.gameLength = 10; },
    resetState({commit}) {
      console.log('** reset state **');
      commit('gameCode');
      this.state.showGameResults = ''
      this.state.selectedColor = 'color-1';
      document.querySelector('.select-spot.active').classList.remove('active');
      document.querySelector('#color-1').classList.add('active');
      this.state.rowCount = 0;
      document.querySelector('.row-wrapper.active').classList.remove('active');
      document.querySelector('.row-1').classList.add('active');
      const guessSpotEls = (document.getElementsByClassName('guess-spot'));
      const keySpotEls = (document.getElementsByClassName('key-spot'));
      this.state.didWin = false;
      for (let i = 0; i < guessSpotEls.length; i++) {
        for (let j = 1; j <= 6; j++) {
          guessSpotEls[i].classList.remove('color-'+j);
          keySpotEls[i].classList.remove('color-'+j);
        }
      }
    }
  }
});
