<template>
  <div :class="'row-wrapper row-'+rowLabel">
    <p class="row-label position-absolute">{{ rowLabel }}</p>
    <div class="guess-spot-wrapper d-flex">
      <div class="guess-spot spot-1" @click="updateColor"></div>
      <div class="guess-spot spot-2" @click="updateColor"></div>
      <div class="guess-spot spot-3" @click="updateColor"></div>
      <div class="guess-spot spot-4" @click="updateColor"></div>
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
// const red = '#e82c0c';
// const blue = '#2739E8';
// const white = '#fff';
// const black = '#333';
// const green = '#39B050';
// const yellow = '#FFF145';

export default {
  name: "row",
  props: {
    rowLabel: String
  },
  // data() {
  //   return {
  //     guessColor1: '',
  //     guessColor2: '',
  //     guessColor3: '',
  //     guessColor4: '',
  //   };
  // },
  methods: {
    updateColor() {
      // this.guessColor1 = blue;
      // setTimeout(() => {
      //   const guessSpot = document.querySelector('.guess-spot');
      //   console.log(guessSpot.style.backgroundColor);
      // }, 0);
    }
  }
};
</script>
