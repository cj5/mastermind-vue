<template>
  <div :class="'game-results-wrapper '+showGameResults">
    <div class="game-results text-center">
      <p class="ft-sz-lg text-uppercase mb-3">{{ gameResult }}</p>
      <p>You solved the code in:</p>
      <p class="ft-sz-md">{{ gameTime }}</p>
      <button @click="resetState" role="button" class="results-button mt-5">Play again</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {  
  name: 'GameResults',
  data() {
    return {
      gameResultCopy: this.$store.state.gameResult,
      gameTime: '--'
    }
  },
  computed: {
    ...mapState([
      'gameResult',
      'showGameResults',
      // 'gameTime'
    ])
  },
  methods: {
    ...mapActions([
      'resetState'
    ])
  }
}
</script>
