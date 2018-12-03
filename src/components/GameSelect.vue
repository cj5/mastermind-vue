<template>
  <div class="select-wrapper dflex flex-column">
    <div class="select-spot select-1 active" @click.self="setActive"></div>
    <div class="select-spot select-2" @click.self="setActive"></div>
    <div class="select-spot select-3" @click.self="setActive"></div>
    <div class="select-spot select-4" @click.self="setActive"></div>
    <div class="select-spot select-5" @click.self="setActive"></div>
    <div class="select-spot select-6" @click.self="setActive"></div>
  </div>
</template>

<script>
export default {
  methods: {
    setActive(event) {
      document.querySelector('.select-spot.active').classList.remove('active');
      event.target.classList.add('active');
    }
  }
}
</script>
