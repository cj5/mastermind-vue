<template>
  <div id="app">
    <h1 class="d-flex justify-content-center">{{ title }}</h1>    
    <div class="gameboard-wrapper d-flex justify-content-center">
      <GameSelect />
      <div class="gameboard">
        <GameRow v-for="(i, key) in gameLength" :key="key" :rowLabel="key+1" :class="{ active: key === activeKey }"/>
      </div>      
    </div>
    <button @click="moveActive" class="submit" role="button" aria-label="button">Submit</button>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { mapMutations, mapActions } from 'vuex';
import GameRow from './components/GameRow';
import GameSelect from './components/GameSelect';

let count = 0;

export default {
  name: "app",
  components: {
    GameRow,
    GameSelect
  },
  data() {
    return {
      activeKey: count
    }
  },
  computed: mapState([
    'title',
    'gameCount',
    'gameLength'
  ]),
  methods: {
    ...mapActions(['gameCode']),
    moveActive() {
      if (count < this.gameLength - 1) {
        count++
        this.activeKey = count;
        document.querySelector('.submit').style.display = 'none';
      }
    }
  },
  mounted() {
    this.gameCode();
  }
};
</script>

<style lang="scss">
  @import "/styles/main.scss";
</style>
