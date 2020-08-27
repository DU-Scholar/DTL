<template>
  <div class="c-header">
    <div class="logo-wrapper">
      <a href="/">
        <h1 class="text_header--active">DTL <br class="on_sp" />NAVI</h1>
      </a>
      <img src="../assets/images/headerImage.png" />
    </div>
    <div class="header-list-wrapper">
      <ul class="header-list">
        <li v-if="hidden">
          <a class="text_header--disabled" href="">協賛企業</a>
        </li>
        <li>
          <a class="text_header--disabled" href="https://twitter.com/dtl_staff"
            >Twitter</a
          >
        </li>
        <li>
          <a
            class="text_header--disabled"
            href="https://www.instagram.com/doshisha_tennis_league/"
            >Instagram</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hidden: false,
    }
  },
}
</script>
<style lang="scss" scoped>
div.c-header {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  div.logo-wrapper {
    display: flex;
    flex-direction: row;
    a {
      text-decoration: none;
      h1 {
        font-size: 50px;
        margin-left: 20px;
        br.on_sp {
          display: none;
        }
      }
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
        margin: auto 15px;
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
@media screen and (max-width: 480px) {
  div.c-header {
    div.logo-wrapper {
      h1 {
        font-size: 30px;
        br.on_sp {
          display: block;
        }
      }
      img {
        height: 50px;
        margin-left: 0px;
      }
    }
    div.header-list-wrapper {
      margin-right: 10px;
      ul.header-list {
        flex-direction: column;
      }
    }
  }
}
</style>
