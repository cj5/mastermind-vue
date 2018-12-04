<template>
  <div id="app">
    <h1 class="d-flex justify-content-center">{{ title }}</h1>    
    <div class="gameboard-wrapper d-flex justify-content-center">
      <GameSelect />
      <div class="gameboard">      
        <GameRow rowLabel="1" />
        <GameRow rowLabel="2" />
        <GameRow rowLabel="3" />
        <GameRow rowLabel="4" />
        <GameRow rowLabel="5" />
        <GameRow rowLabel="6" />
        <GameRow rowLabel="7" />
        <GameRow rowLabel="8" />
        <GameRow rowLabel="9" />
        <GameRow rowLabel="10" />
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
    'title'
  ]),
  mounted() {
    document.querySelector('.row-wrapper.row-1').classList.add('active');
  }
};
</script>

<style lang="scss">
  @import "/styles/main.scss";
</style>
