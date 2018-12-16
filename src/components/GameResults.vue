<template>
  <div :class="'game-results-wrapper '+showGameResults">
    <div class="game-results text-center">
      <p class="ft-sz-lg">{{ gameResult }}</p>
      <p class="ft-sz-md">{{ time }}</p>
      <button @click="resetState" role="button" class="results-button">Play again</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {  
  name: "GameResults",
  data() {
    return {
      gameResultCopy: this.$store.state.gameResult,
      time: 'x:xx'
    }
  },
  computed: {
    ...mapState([
      'gameResult',
      'showGameResults'
    ])
  },
  methods: {
    ...mapActions([
      'resetState'
    ])
  }
}
</script>
