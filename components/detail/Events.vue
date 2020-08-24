<template>
  <div class="p-Events c-cards">
    <div>年間行事</div>
    <ul>
      <li>テキスト</li>
      <li>テキスト</li>
      <li>テキスト</li>
      <li>テキスト</li>
      <li>テキスト</li>
      <li>テキスト</li>
      <li>テキスト</li>
      <li>テキスト</li>
      <li>テキスト</li>
      <li>テキスト</li>
      <li>テキスト</li>
    </ul>
  </div>
</template>
<style scoped lang="scss">
@import 'assets/scss/mixins';
.p-Events {
  width: 100%;
  height: 100%;
  padding: 30px;
}
.p-Events ul {
  padding-left: 0;
}
.p-Events ul li {
  list-style: none;
  width: 30vw;
  text-align: center;
  margin: 10px auto;
}
.p-Events span.mon {
  @include text_calendar-month;
}
.p-Events span.event {
  @include text_calendar-plan;
}
th {
  text-align: center;
}
</style>
