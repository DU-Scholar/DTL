<template>
  <div class="container top">
    <p>サークル詳細ページはこちら=></p>
    <router-link to="./detail">サークル詳細ページ</router-link>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/mixins';
.container {
  @include c-container;
  display: flex;
  margin: $action_margin-top;
}
p {
  text-align: center;
  margin-right: 20px;
}
</style>
