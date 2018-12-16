<template>
  <div id="app">
    <GameResults />
    <h1 class="d-flex justify-content-center">{{ title }}</h1>
    <div class="game-length-buttons">
      <button @click="gameLength6">6</button>
      <button @click="gameLength8">8</button>
      <button @click="gameLength10">10</button>
    </div>
    <div class="gameboard-wrapper d-flex justify-content-center">      
      <GameSelect />
      <div class="gameboard">
        <GameRow v-for="(i, key) in gameLength" :key="key" :rowLabel="key+1" />
        <!-- :class="{ active: key === activeKey }" -->
      </div>      
    </div>
    <button @click="submit" class="submit" role="button" aria-label="button">Submit</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import GameRow from './components/GameRow';
import GameSelect from './components/GameSelect';
import GameResults from './components/GameResults';

export default {
  name: "app",
  components: {
    GameRow,
    GameSelect,
    GameResults
  },
  data() {
    return {
      activeKey: this.$store.state.rowCount
    }
  },
  computed: {
    ...mapState([
      'title',
      'gameLength'
    ]),
  },
  methods: {
    ...mapActions([      
      'submit'
    ]),
    ...mapMutations([
      'gameCode',
      'feedback'
    ]),
    
    gameLength6() { this.$store.state.gameLength = 6; },
    gameLength8() { this.$store.state.gameLength = 8; },
    gameLength10() { this.$store.state.gameLength = 10; },
  },
  mounted() {
    this.gameCode();
    document.querySelector('.row-1').classList.add('active');
  }
};
</script>

<style lang="scss">
  @import "/styles/main.scss";
</style>
