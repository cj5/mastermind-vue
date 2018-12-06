<template>
  <div id="app">
    <h1 class="d-flex justify-content-center">{{ title }}</h1>    
    <div class="gameboard-wrapper d-flex justify-content-center">
      <GameSelect />
      <div class="gameboard">
        <GameRow v-for="(i, key) in 10" :key="key" :rowLabel="key+1" :class="{ active: key === 0 }"/>
      </div>
    </div>    
  </div>
</template>

<script>
import { mapState } from 'vuex';
import GameRow from './components/GameRow';
import GameSelect from './components/GameSelect';

export default {
  name: "app",
  components: {
    GameRow,
    GameSelect
  },
  computed: mapState([
    'title',
  ]),
};
</script>

<style lang="scss">
  @import "/styles/main.scss";
</style>
