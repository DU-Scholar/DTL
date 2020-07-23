<template>
  <div class="p-showcase">
    <div class="container p-showcase-links">
      <p>サークル詳細ページはこちら=></p>
      <router-link to="./detail">サークル詳細ページ</router-link>
    </div>
    <div class="container">
      <p>文字のサンプル</p>
      <p class="text_header--active">ヘッダー（選択時）</p>
      <p class="text_header--disabled">ヘッダー（別ページ）</p>
      <p class="text_search-item-ja">検索項目の文字（日本語）</p>
      <p class="text_search-item-en">検索項目の文字（英語）</p>
      <p class="text_button">ボタンの文字</p>
      <p class="text_card-title">サークル概要のタイトル文字</p>
      <p class="text_card-content">サークル概要の本文文字</p>
      <p class="text_description-title">サークル詳細のタイトル文字</p>
      <p class="text_description-subtitle">サークル詳細のサブタイトル文字</p>
      <p class="text_description-content">サークル詳細の本文文字</p>
      <p class="text_calendar-month">行事予定の月用文字</p>
      <p class="text_calendar-plan">行事予定の内容文字</p>
    </div>
    <div class="container">
      <p>ボタンのサンプル</p>
    </div>
    <div class="cards">
      <p>カードのサンプル</p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/mixins';
.container {
  @include c-container;
  margin: $action_margin-top;
}
.p-showcase-links {
  display: flex;
}
</style>
