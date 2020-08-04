<template>
  <div class="c-header">
    <div class="logo-wrapper">
      <h1 class="text_header--active">DTL<br />NAVI</h1>
      <img src="../assets/images/headerImage.png" />
    </div>
    <div class="header-list-wrapper">
      <ul class="header-list">
        <li><a class="text_header--disabled" href="">協賛企業</a></li>
        <li><a class="text_header--disabled" href="">Twitter</a></li>
        <li><a class="text_header--disabled" href="">Instagram</a></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
div.c-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  div.logo-wrapper {
    display: flex;
    flex-direction: row;
    h1 {
      font-size: 50px;
      margin-left: 20px;
    }
    img {
      height: 70px;
      margin: 30px 0px 0px 20px;
    }
  }
  div.header-list-wrapper {
    margin-right: 20px;
    ul.header-list {
      list-style-type: none;
      display: flex;
      flex-direction: row;
      align-items: center;
      margin: 0;
      height: 100%;
      li {
        margin: 0px 15px;
        a {
          text-decoration: none;
          &:hover {
            color: #2f5597;
          }
        }
      }
    }
  }
}
</style>
