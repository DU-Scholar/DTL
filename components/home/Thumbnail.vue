<template>
  <div
    v-if="(placeJudgement && gradeJudgement)"
    class="p-menu c-cards p-cards-list"
  >
    <div class="p-container-l">
      <div class="p-card-list-title text_card-title">
        <h3>{{ data.name }}</h3>
      </div>
      <img :src="`/detail/${group}/image1.png`" alt="集合写真" />
      <div class="p-sns">
        <a href="#">Twitter</a>
        <a href="#">Instagram</a>
      </div>
    </div>
    <div class="p-container-r text_card-content">
      <div>
        <ul>
          <li>練習頻度：週６回</li>
          <li v-if="data.basicInfo[0].place === 1">活動場所：今出川</li>
          <li v-if="data.basicInfo[0].place === 2">活動場所：京田辺</li>
          <li v-if="data.basicInfo[0].place === 3">活動場所：両方</li>
          <li v-if="data.basicInfo[0].canJoinGrade === 1">
            募集回生：新入生のみ
          </li>
          <li v-if="data.basicInfo[0].canJoinGrade === 2">
            募集回生：いつでも
          </li>
          <li>アピールポイント：{{ data.appeal }}</li>
          <div class="p-to-detail">
            <router-link :to="`/detail/${data.name}`">
              <a id="#" class="bt text_button">詳しく見る</a>
            </router-link>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    group: {
      required: true,
      type: String,
    },
    options: {
      type: Object,
    },
  },
  data() {
    return {
      data: {
        basicInfo: [{}],
      },
    }
  },
  computed: {
    gradeJudgement() {
      if (this.options.grade === 3 || this.options.grade === 2) {
        return true
      }
      return this.options.grade === this.data.basicInfo[0].canJoinGrade
    },
    placeJudgement() {
      if (this.options.place === 3 || this.data.basicInfo[0].place === 3) {
        return true
      }
      return this.options.place === this.data.basicInfo[0].place
    },
  },
  async mounted() {
    this.data = await require(`@/assets/data/${this.group}`)
  },
}
</script>
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
