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
  name: 'App',
  components: {
    GameRow,
    GameSelect,
    GameResults
  },
  computed: {
    ...mapState([
      'title',
      'gameLength'
    ]),
  },
  methods: {
    ...mapActions([      
      'submit',
      'gameLength6',
      'gameLength8',
      'gameLength10'
    ]),
    ...mapMutations([
      'gameCode',
      'feedback'
    ]),    
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
