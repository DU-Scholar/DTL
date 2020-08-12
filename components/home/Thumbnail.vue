<template>
  <div class="p-menu c-cards p-cards-list">
    <div class="p-container-l">
      <div class="p-card-list-title text_card-title">
        <h3>同大硬式</h3>
      </div>
      <img src="/detail/ddkoushiki/図1.png" alt="集合写真" />
      <div class="p-sns">
        <a href="#">Twitter</a>
        <a href="#">Instagram</a>
      </div>
    </div>
    <div class="p-container-r text_card-content">
      <div>
        <ul>
          <li>練習頻度：週６回</li>
          <li>活動場所：両方</li>
          <li>募集回生：新入生のみ</li>
          <li>アピールポイント：テニスのガチ度</li>
          <div class="p-to-detail">
            <a id="#" class="bt text_button">詳しく見る</a>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.p-menu {
  margin-top: 30px;
  display: flex;
}
ul {
  list-style: none;
}
.p-menu-list_button ul {
  display: flex;
}
.p-container-l {
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
.p-container-r {
  width: 50%;
}
.p-cards-list {
  margin-top: 10%;
  padding: 30px 60px;
}
.p-container-r ul > li {
  margin: 20px 0;
}
h3 {
  margin-top: 5px;
}
img {
  width: 250px;
  border-radius: 50px;
}
.p-container-r .bt {
  margin: 10px 0 0 0;
  text-align: center;
}
/*レスポンシブ*/
@media screen and (max-width: 768px) {
  .p-container-l {
    width: 47%;
  }
  .c-cards {
    width: 100%;
  }
}
@media screen and (max-width: 700px) {
  h3 {
    padding-top: 10px;
  }
  .p-menu {
    display: block;
    margin: 0 auto;
  }
  .p-container-l,
  .p-container-r {
    width: 100%;
  }
  .p-menu ul {
    padding-left: 0;
  }
  .p-cards-list {
    padding: 0 10px;
  }
  .p-container-r .bt {
    margin: 4px 0 20px 0;
    text-align: center;
  }
  .p-to-detail {
    text-align: center;
  }
}
</style>
