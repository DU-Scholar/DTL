<template>
  <div class="p-top">
    <div class="p-search-text">検索コマンド</div>
    <div class="p-menu c-cards"></div>
    <div class="p-search">
      <a id="#" class="bt text_button">上記の条件で検索</a>
    </div>
    <div class="p-menu c-cards p-cards-list">
      <div class="container-l">
        <div class="p-card-list-title text_card-title">
          <h3>同大硬式</h3>
        </div>
        <img src="/detail/ddkoushiki/図1.png" alt="集合写真" />
        <div class="p-sns">
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
      </div>
      <div class="container-r text_card-content">
        <div>
          <ul>
            <li>練習頻度：週６回</li>
            <li>活動場所：両方</li>
            <li>募集回生：新入生のみ</li>
            <li>アピールポイント：テニスのガチ度</li>
            <li>
              <a id="#" class="bt text_button">詳しく見る</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.p-top {
  padding: 0 70px;
}
.p-title {
  display: flex;
}
.p-header-list {
  margin: 4% 0 0 45%;
}
.p-list ul {
  display: flex;
}
.p-list ul > li {
  margin-right: 30px;
}
.p-list ul > li > a {
  text-decoration: none;
}
.p-search-text {
  color: #a6a6a6;
  font-size: 30px;
  margin: 4% 0 2% 0;
}
.p-menu {
  margin-top: 30px;
  display: flex;
}
ul {
  list-style: none;
}
.p-menu-bar {
  min-width: 22%;
  text-align: center;
}
.p-menu-bar ul > li {
  text-align: right;
}
.p-menu-bar ul > li > h2 {
  margin-bottom: 3%;
}
.p-menu-list {
  width: 70%;
  text-align: left;
}
.p-menu-list_button ul {
  display: flex;
}
.p-search {
  text-align: center;
}
.container-l {
  width: 35%;
  text-align: center;
}
.p-sns {
  text-align: center;
}
.p-sns a {
  text-decoration: none;
  margin-right: 30px;
  color: #bfbfbf;
}
.container-r {
  width: 50%;
}
.p-cards-list {
  margin-top: 10%;
  padding: 30px 60px;
}
.container-r ul > li {
  margin: 20px 0;
}
h3 {
  margin-top: 5px;
}
img {
  width: 250px;
  border-radius: 50px;
}
.container-r .bt {
  width: 55%;
  margin: 10px 0 0 0;
}
@import '@/assets/scss/mixins';
.container {
  @include c-container;
  margin: $action_margin-top;
}
.p-showcase-links {
  display: flex;
}
</style>
