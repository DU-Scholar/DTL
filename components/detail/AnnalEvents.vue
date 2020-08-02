<template>
  <div class="p-annualEvents c-cards">
    <table width="100%">
      <tbody width="100%">
        <tr>
          <th width="30%">
            <span class="mon">1月</span>
          </th>
          <th width="70%">
            <span class="event">テキスト</span>
          </th>
        </tr>
        <tr>
          <th width="30%">
            <span class="mon">2月</span>
          </th>
          <th width="70%">
            <span class="event">テキスト</span>
          </th>
        </tr>
        <tr>
          <th width="30%">
            <span class="mon">3月</span>
          </th>
          <th width="70%">
            <span class="event">テキスト</span>
          </th>
        </tr>
        <tr>
          <th width="30%">
            <span class="mon">4月</span>
          </th>
          <th width="70%">
            <span class="event">テキスト</span>
          </th>
        </tr>
        <tr>
          <th width="30%">
            <span class="mon">5月</span>
          </th>
          <th width="70%">
            <span class="event">テキスト</span>
          </th>
        </tr>
        <tr>
          <th width="30%">
            <span class="mon">6月</span>
          </th>
          <th width="70%">
            <span class="event">テキスト</span>
          </th>
        </tr>
        <tr>
          <th width="30%">
            <span class="mon">7月</span>
          </th>
          <th width="70%">
            <span class="event">テキスト</span>
          </th>
        </tr>
        <tr>
          <th width="30%">
            <span class="mon">8月</span>
          </th>
          <th width="70%">
            <span class="event">テキスト</span>
          </th>
        </tr>
        <tr>
          <th width="30%">
            <span class="mon">9月</span>
          </th>
          <th width="70%">
            <span class="event">テキスト</span>
          </th>
        </tr>
        <tr>
          <th width="30%">
            <span class="mon">10月</span>
          </th>
          <th width="70%">
            <span class="event">テキスト</span>
          </th>
        </tr>
        <tr>
          <th width="30%">
            <span class="mon">11月</span>
          </th>
          <th width="70%">
            <span class="event">テキスト</span>
          </th>
        </tr>
        <tr>
          <th width="30%">
            <span class="mon">12月</span>
          </th>
          <th width="70%">
            <span class="event">テキスト</span>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style scoped lang="scss">
@import 'assets/scss/mixins';
.p-annualEvents {
  padding: 20px;
  margin: 20px;
  width: 50vw;
  height: auto;
}
.p-annualEvents span.mon {
  @include text_calendar-month;
}
.p-annualEvents span.event {
  @include text_calendar-plan;
}
th {
  text-align: center;
}
</style>
