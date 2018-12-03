<template>
  <div :class="'row-wrapper row-'+rowLabel">
    <p class="row-label position-absolute">{{ rowLabel }}</p>
    <div class="guess-spot-wrapper d-flex">
      <div class="guess-spot spot-1" @click="updateColor1" :style="{ backgroundColor: guessColor1 }"></div>
      <div class="guess-spot spot-2" @click="updateColor2" :style="{ backgroundColor: guessColor2 }"></div>
      <div class="guess-spot spot-3" @click="updateColor3" :style="{ backgroundColor: guessColor3 }"></div>
      <div class="guess-spot spot-4" @click="updateColor4" :style="{ backgroundColor: guessColor4 }"></div>
    </div>
    <div class="key-spot-wrapper d-flex flex-column">
      <div class="top-row d-flex">
        <div class="key-spot"></div>
        <div class="key-spot"></div>
      </div>
      <div class="bottom-row d-flex">
        <div class="key-spot"></div>
        <div class="key-spot"></div>
      </div>
    </div>
  </div>
</template>

<script>
const red = '#e82c0c';
const blue = '#2739E8';
const white = '#fff';
const black = '#333';
const green = '#39B050';
const yellow = '#FFF145';

export default {
  name: "row",
  props: {
    rowLabel: String,
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
    updateColor1() {
      this.guessColor1 = blue;
    },
    updateColor2() {
      this.guessColor2 = green;
    },
    updateColor3() {
      this.guessColor3 = yellow;
    },
    updateColor4() {
      this.guessColor4 = black;
    }
  }
};
</script>
