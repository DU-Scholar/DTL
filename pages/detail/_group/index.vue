<!--サークル詳細ページ-->
<template>
  <div class="p-detail">
    <div class="text_description-title">
      <h1>{{ data.rightName }}</h1>
    </div>

    <div v-if="data.movie" class="intro-video">
      <video
        autoplay
        muted
        playsinline
        preload="auto"
        :src="data.movie"
        controls
      ></video>
    </div>
    <div v-if="!data.movie && data">
      <img class="intro-pic" :src="data.descriptions[0].image" />
    </div>
    <div class="intro">
      <div class="content">
        <h2 class="text_description-title">私たちはこんなサークルです</h2>
        <div class="info text_description-content">
          <span v-html="data.LongDescription"></span>
        </div>
      </div>
    </div>

    <div class="content">
      <div>
        <h2 class="text_description-title">当サークルの魅力はココ！</h2>
      </div>
      <div
        v-for="(element, idx) of data.descriptions"
        :key="idx"
        class="content"
      >
        <h3 class="text_description-subtitle">{{ element['title'] }}</h3>
        <img class="pic_gather" :src="element['image']" alt="集合写真" />
        <p class="text_description-content">
          <span v-html="element['about']"></span>
        </p>
      </div>
    </div>
    <div class="d-flex p-statistics content">
      <div v-if="data" class="p-statistics__right">
        <div v-if="data.statistics[0].sexRate">
          <Sex-chart :rate="data.statistics[0].sexRate" />
        </div>
        <div
          v-if="!data.statistics[0].sexRate"
          class="text_description-content"
        >
          ※性別データなし
        </div>
        <Faculty-chart :faculties="data.statistics[0].gakubu" />
      </div>
      <Events :events="data.Event" />
    </div>
    <div class="d-flex p-form">
      <div class="p-pdf">
        <a id="#" class="link-bt text_button" @click="handleNone">新歓情報</a>
        <p v-if="!isBiradisplay" class="text_description-content">
          現在ビラはダウンロードできません
        </p>
      </div>
      <div class="p-gform">
        <a
          :href="data.contactForm"
          id="#"
          target="_blank"
          class="link-bt text_button"
          >お問い合わせ</a
        >
      </div>
    </div>
    <div class="back">
      <RouterLink to="/" class="link-bt text_button">検索画面へ戻る</RouterLink>
    </div>
  </div>
</template>
<script>
import { dataMapper } from '../../../store/dataConstructor'
import SexChart from '@/components/detail/SexPieChart'
import FacultyChart from '@/components/detail/FacultyPieChart'
import Events from '@/components/detail/Events'
export default {
  components: {
    Events,
    SexChart,
    FacultyChart,
  },
  props: {
    options: {
      type: Object,
      require: false,
      default: () => ({}),
    },
  },
  data() {
    return {
      data: '',
      isBiraNone: true,
      isBiradisplay: true,
    }
  },
  validate({ params }) {
    return /(アルバトロス|checkmate|コスモス|クリーム|ダブルフォルト|同大硬式|エトランゼ|フライスペック|グリーン|インペリアル|レスカ|ノービス|ピーナツ|レジーナ|うぃってぃー)/.test(
      params.group
    )
  },
  async mounted() {
    // パラメーター取得
    const params = this.$route.params.group
    // データ取得
    await this.fetchData({ name: params })
    this.data = await this.getData()
    // this.sexRate = this.data.statistics[0].sexRate
  },
  methods: {
    ...dataMapper.mapGetters(['getData']),
    ...dataMapper.mapActions(['fetchData']),
    handleNone() {
      if (this.isBiraNone) {
        this.isBiradisplay = false
        return true
      }
      this.isBiradisplay = true
    },
  },
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/mixins';
.text_description-title h1 {
  font-size: 3rem;
}
.p-detail {
  margin: 0;
  background-color: #e5f2f3;
  text-align: center;
}
.p-statistics__right {
  width: 40%;
}
.intro-pic {
  width: 50%;
  height: 50%;
}
.intro-video video {
  width: 55%;
  height: 300px;
  border-radius: 50px;
  border: solid 6px white;
  outline: none;
  box-shadow: 20px 20px 60px #c9d0d0, -20px -20px 60px #ffffff;
}
.intro {
  margin-top: 80px;
  border-bottom: solid 1px #a6a6a6;
  display: inline-block;
}

h3:before {
  content: url('~@/assets/images/detail/iconmonstr-square-1.svg');
  margin-right: 7px;
}

.content {
  text-align: left;
  display: inline-block;
  width: 65vw;
}
.d-flex {
  display: flex;
  flex-direction: row;
  margin: auto;
}
.p-form {
  width: 100%;
}
.p-pdf,
.p-gform {
  width: 50%;
}
@media screen and (max-width: 768px) {
  .p-pdf,
  .p-gform {
    width: 100%;
  }
}
@media screen and (max-width: 480px) {
  .d-flex {
    flex-direction: column;
  }
}
.info {
  text-align: center;
  line-height: 30px;
  text-align: left;
  margin-bottom: 35px;
}

.pic_gather {
  height: 145px;
  width: 200px;
  float: left;
  margin-top: -9px;
  margin-right: 30px;
  border-radius: 30px;
  border: solid 4px white;
  box-shadow: 20px 20px 60px #c9d0d0, -10px -10px 50px #ffffff;
}

.content p {
  line-height: 30px;
}

.content p,
h3 {
  overflow: hidden;
}

h3 {
  margin-left: 236px;
}

.content {
  margin-bottom: 25px;
}
/* 画像とテキストのバランス調整のレスポンシブ対応 */
@media (max-width: 700px) {
  h3 {
    margin-left: unset;
  }

  .pic_gather {
    height: 140px;
    width: 185px;
    margin-bottom: 30px;
    margin-top: unset;
    margin-right: unset;
    float: none;
  }

  content p,
  h3 {
    overflow: unset;
  }
}
.p-statistics {
  justify-content: center;
  align-items: center;
}
/* 動画のレスポンシブ対応 */
@media (max-width: 530px) {
  .intro-video video {
    width: 70%;
    height: 170px;
    border-radius: 30px;
    border: solid 4px white;
    outline: none;
  }
}
@media (max-width: 768px) {
  .d-flex {
    display: block;
  }
  .p-statistics__right {
    width: 100%;
  }
}
</style>
