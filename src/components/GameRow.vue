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
export default {
  name: "row",
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
    updateColor1() {
      if (this.$el.className.includes('active')) {
        this.guessColor1 = this.$store.state.selectedColor;
        let selectedColor = this.$store.state.selectedColor;
        let n = parseInt(selectedColor.substring(selectedColor.indexOf("-") + 1));
        if (this.$store.state.selectedColor === 'color-'+n) {
          this.$store.state.guessCode[0] = n;
        }
        if (!this.$store.state.guessCode.includes(0)) {
          document.querySelector('.submit').classList.add('show');
         console.log('guessCode: '+this.$store.state.guessCode);
        }
      }
    },
    updateColor2() {
      if (this.$el.className.includes('active')) {
        this.guessColor2 = this.$store.state.selectedColor;
        let selectedColor = this.$store.state.selectedColor;
        let n = parseInt(selectedColor.substring(selectedColor.indexOf("-") + 1));
        if (this.$store.state.selectedColor === 'color-'+n) {
          this.$store.state.guessCode[1] = n;
        }
        if (!this.$store.state.guessCode.includes(0)) {
          document.querySelector('.submit').classList.add('show');
         console.log('guessCode: '+this.$store.state.guessCode);
        }
      }
    },
    updateColor3() {
      if (this.$el.className.includes('active')) {
        this.guessColor3 = this.$store.state.selectedColor;
        let selectedColor = this.$store.state.selectedColor;
        let n = parseInt(selectedColor.substring(selectedColor.indexOf("-") + 1));
        if (this.$store.state.selectedColor === 'color-'+n) {
          this.$store.state.guessCode[2] = n;
        }
        if (!this.$store.state.guessCode.includes(0)) {
          document.querySelector('.submit').classList.add('show');
         console.log('guessCode: '+this.$store.state.guessCode);
        }
      }
    },
    updateColor4() {
      if (this.$el.className.includes('active')) {
        this.guessColor4 = this.$store.state.selectedColor;
        let selectedColor = this.$store.state.selectedColor;
        let n = parseInt(selectedColor.substring(selectedColor.indexOf("-") + 1));
        if (this.$store.state.selectedColor === 'color-'+n) {
          this.$store.state.guessCode[3] = n;
        }
        if (!this.$store.state.guessCode.includes(0)) {
          document.querySelector('.submit').classList.add('show');
         console.log('guessCode: '+this.$store.state.guessCode);
        }
      }
    },
  }
};
</script>
