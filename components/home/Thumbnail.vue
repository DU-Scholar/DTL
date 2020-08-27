<template>
  <div
    v-if="(placeJudgement && gradeJudgement && practiceJudgement && peopleJudgement)"
    class="p-menu c-cards p-cards-list"
  >
    <div class="p-container-l">
      <div class="p-card-list-title text_card-title">
        <h3>{{ data.name }}</h3>
      </div>
      <img :src="`/detail/${group}/samnail.png`" alt="集合写真" />
      <div class="p-sns">
        <a :href="`${data.Twitter}`"
          ><img src="~@/assets/images/Twitter.png" alt="Twitter"
        /></a>
        <a :href="`${data.Instagram}`"
          ><img src="~@/assets/images/Instagram.png" alt="Instagram"
        /></a>
      </div>
    </div>
    <div class="p-container-r text_card-content">
      <div>
        <ul>
          <li v-if="data.basicInfo[0].practice === 1">練習頻度：多め</li>
          <li v-if="data.basicInfo[0].practice === 2">練習頻度：そこそこ</li>
          <li v-if="data.basicInfo[0].practice === 3">練習頻度：少なめ</li>
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
              <a id="#" class="link-bt text_button">詳しく見る</a>
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
      default: () => {},
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
    practiceJudgement() {
      if (this.options.practice === false) {
        return true
      }
      return this.options.practice === String(this.data.basicInfo[0].practice)
    },
    placeJudgement() {
      if (this.options.place === false || this.data.basicInfo[0].place === 3) {
        return true
      }
      return this.options.place === String(this.data.basicInfo[0].place)
    },
    peopleJudgement() {
      if (this.options.people === false) {
        return true
      }
      if (this.options.people === '1' && this.data.basicInfo[0].members > 80) {
        return true
      }
      return this.options.people === '2' && this.data.basicInfo[0].members <= 80
    },
    gradeJudgement() {
      if (this.options.grade === false || this.options.grade === 2) {
        return true
      }
      return this.options.grade === String(this.data.basicInfo[0].canJoinGrade)
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
  margin-top: 5px;
  text-align: center;
}
.p-sns a img {
  width: 40px;
  border-radius: 0;
}
.p-sns a:hover {
  opacity: 0.6;
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
