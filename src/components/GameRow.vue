<template>
  <div :class="'row-wrapper row-'+rowLabel">
    <p class="row-label position-absolute">{{ rowLabel }}</p>
    <div class="guess-spot-wrapper d-flex">
      <div :class="'guess-spot spot-1 '+guessColor1" @click="updateColor1"></div>
      <div :class="'guess-spot spot-2 '+guessColor2" @click="updateColor2"></div>
      <div :class="'guess-spot spot-3 '+guessColor3" @click="updateColor3"></div>
      <div :class="'guess-spot spot-4 '+guessColor4" @click="updateColor4"></div>
    </div>
    <div class="key-spot-wrapper d-flex flex-column">
      <div class="top-row d-flex">
        <div id="key-spot-1" class="key-spot"></div>
        <div id="key-spot-2" class="key-spot"></div>
      </div>
      <div class="bottom-row d-flex">
        <div id="key-spot-3" class="key-spot"></div>
        <div id="key-spot-4" class="key-spot"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'GameRow',
  props: {
    rowLabel: Number,
  },
  data() {
    return {
      guessColor1: '',
      guessColor2: '',
      guessColor3: '',
      guessColor4: '',
    };
  },
  methods: {
    ...mapActions([
      'updateColor1',
      'updateColor2',
      'updateColor3',
      'updateColor4',
    ])
  }
};
</script>
