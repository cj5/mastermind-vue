<template>
  <div id="app">
    <h1 class="d-flex justify-content-center">{{ title }}</h1>
    <div class="game-length-buttons">
      <button @click="gameLength6()">6</button>
      <button @click="gameLength8()">8</button>
      <button @click="gameLength10()">10</button>
    </div>
    <div class="gameboard-wrapper d-flex justify-content-center">      
      <GameSelect />
      <div class="gameboard">
        <GameRow v-for="(i, key) in gameLength" :key="key" :rowLabel="key+1" :class="{ active: key === activeKey }"/>
      </div>      
    </div>
    <button @click="submit" class="submit" role="button" aria-label="button">Submit</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import GameRow from './components/GameRow';
import GameSelect from './components/GameSelect';

// let rowCount = 0;

export default {
  name: "app",
  components: {
    GameRow,
    GameSelect
  },
  data() {
    return {
      activeKey: this.$store.state.rowCount
    }
  },
  computed: mapState([
    'title',
    'gameLength'
  ]),
  methods: {
    ...mapActions([
      'gameCode',
      'feedback'
    ]),
    submit() {
      document.querySelector('.submit').classList.remove('show');
      if (this.$store.state.rowCount < this.gameLength - 1) {
        this.$store.state.rowCount++
        this.activeKey = this.$store.state.rowCount;
      }
      this.feedback();
      console.log('feedback: '+this.$store.state.feedback);
      this.$store.state.guessCode = [0,0,0,0];      
    },
    gameLength6() { this.$store.state.gameLength = 6; },
    gameLength8() { this.$store.state.gameLength = 8; },
    gameLength10() { this.$store.state.gameLength = 10; },
  },
  mounted() {
    this.gameCode();
    console.log('gameCode: '+this.$store.state.gameCode);    
  }
};
</script>

<style lang="scss">
  @import "/styles/main.scss";
</style>
