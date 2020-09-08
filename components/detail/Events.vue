<template>
  <div class="p-Events c-cards text_description-content">
    <h4>年間行事</h4>
    <div v-for="(event, idx) in events" :key="idx">
      <ul>
        <li>{{ event }}</li>
      </ul>
      <p v-if="!event">年間行事データなし</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    events: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
<style scoped lang="scss">
@import 'assets/scss/mixins';
.p-Events {
  width: 100%;
  height: 100%;
  padding: 30px;
  text-align: center;
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
@media screen and (max-width:1024px) {
  .p-Events {
  margin-left: 20px;
 }
}
@media screen and (max-width:768px) {
 .p-Events {
  width: auto;
  margin-left: 0;
 }
}
</style>
