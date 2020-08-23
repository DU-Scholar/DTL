<!--サークル詳細ページ-->
<template>
  <div class="p-detail">
    <div class="text_description-title">
      <h1>{{ data.name }}</h1>
    </div>

    <div class="intro-video">
      <video
        autoplay
        muted
        playsinline
        preload="auto"
        :src="data.movie"
        controls
      ></video>
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
        <h3 class="text_description-subtitle">
          {{ element['title'] }}
        </h3>
        <img class="pic_gather" :src="element['image']" alt="集合写真" />
        <p class="text_description-content">
          <span v-html="element['about']"></span>
        </p>
      </div>
    </div>
    <div class="d-flex p-statistics">
      <div v-if="data">
        <Sex-chart :rate="data.statistics[0].sexRate" />
        <Faculty-chart />
      </div>
      <Events />
    </div>
  </div>
</template>
<script>
import { dataMapper } from '../../../store/dataConstructor'
import SexChart from '@/components/detail/SexPieChart'
import FacultyChart from '@/components/detail/FacultyPieChart'
import Events from '@/components/detail/AnnalEvents'
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
    }
  },
  // validate({ params }) {
  //   // return /同大硬式/.test(params.group)
  // },
  async mounted() {
    // パラメーター取得
    const params = this.$route.params.group
    // データ取得
    await this.fetchData({ name: params })
    this.data = await this.getData()
    this.sexRate = this.data.statistics[0].sexRate
  },
  methods: {
    ...dataMapper.mapGetters(['getData']),
    ...dataMapper.mapActions(['fetchData']),
  },
}
</script>
<style lang="scss" scoped>
.p-detail {
  margin: 0;
  background-color: #e5f2f3;
  text-align: center;
}

.intro-video video {
  width: 55%;
  height: 300px;
  border-radius: 20px;
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
</style>
