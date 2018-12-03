<template>
  <div class="select-wrapper dflex flex-column">
    <div class="select-spot color-1 active" @click.self="setActive"></div>
    <div class="select-spot color-2" @click.self="setActive"></div>
    <div class="select-spot color-3" @click.self="setActive"></div>
    <div class="select-spot color-4" @click.self="setActive"></div>
    <div class="select-spot color-5" @click.self="setActive"></div>
    <div class="select-spot color-6" @click.self="setActive"></div>
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
