<template>
  <div class="select-wrapper dflex flex-column">
    <div id="color-1" class="select-spot color-1 active" @click="selectedColor"></div>
    <div id="color-2" class="select-spot color-2" @click="selectedColor"></div>
    <div id="color-3" class="select-spot color-3" @click="selectedColor"></div>
    <div id="color-4" class="select-spot color-4" @click="selectedColor"></div>
    <div id="color-5" class="select-spot color-5" @click="selectedColor"></div>
    <div id="color-6" class="select-spot color-6" @click="selectedColor"></div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: mapActions(["selectedColor"])
};
</script>
