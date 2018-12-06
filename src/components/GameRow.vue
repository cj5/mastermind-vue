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
export default {
  name: "row",
  props: {
    rowLabel: Number,
    // rowActive: Function
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
      if (this.$el.className.includes('active')) {
        this.guessColor1 = this.$store.state.colorClass;
      }      
    },
    updateColor2() {
      if (this.$el.className.includes('active')) {
        this.guessColor2 = this.$store.state.colorClass;
      }
    },
    updateColor3() {
      if (this.$el.className.includes('active')) {
        this.guessColor3 = this.$store.state.colorClass;
      }
    },
    updateColor4() {
      if (this.$el.className.includes('active')) {
        this.guessColor4 = this.$store.state.colorClass;
      }
    },
  }
};
</script>
