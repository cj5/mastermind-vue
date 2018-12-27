<template>
  <div class="game-timer">
    <button @click="gameTime" role="button">start timer</button>
    {{ gameTime }}
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'GameTimer',
  // methods: {
  //   ...mapActions([
  //     'gameTime'
  //   ])
  // }
}
</script>
