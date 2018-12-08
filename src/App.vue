<template>
  <div id="app">
    <h1 class="d-flex justify-content-center">{{ title }}</h1>    
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
import { mapState } from 'vuex';
import { mapMutations, mapActions } from 'vuex';
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
    ...mapActions(['gameCode']),
    submit() {
      document.querySelector('.submit').style.display = 'none';
      if (this.$store.state.rowCount < this.gameLength - 1) {
        this.$store.state.rowCount++
        this.activeKey = this.$store.state.rowCount;
      }
      console.log('do guess checking');
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
