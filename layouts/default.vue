<template>
  <div class="layout">
    <Header />
    <Nuxt />
  </div>
</template>
<script>
import Header from '../components/Header'
export default {
  components: {
    Header,
  },
}
</script>
<style lang="scss">
@import '@/assets/scss/mixins';
html {
  background-color: $clr_background;
}
</style>
