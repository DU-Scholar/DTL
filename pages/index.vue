<template>
  <div class="p-top">
    <div class="p-search-text">検索コマンド</div>
    <div v-if="device === 'pc'" class="p-menu c-cards">
      <div class="p-menu-list">
        <div class="p-menu-list_button">
          <ul>
            <li>
              <h2 class="text_search-item-ja">練習頻度</h2>
              <p class="text_search-item-en">practice</p>
            </li>
            <form class="p-menu-list_options">
              <li>
                <input
                  id="f1"
                  v-model="options.practice"
                  class="bt"
                  type="radio"
                  name="practice"
                  value="1"
                  @click="handleFrequency('1')"
                />
                <label for="f1" class="text_button">多め</label>
              </li>
              <li>
                <input
                  id="f2"
                  v-model="options.practice"
                  class="bt"
                  type="radio"
                  name="practice"
                  value="2"
                  @click="handleFrequency('2')"
                />
                <label for="f2" class="text_button">そこそこ</label>
              </li>
              <li>
                <input
                  id="f3"
                  v-model="options.practice"
                  class="bt"
                  type="radio"
                  name="practice"
                  value="3"
                  @click="handleFrequency('3')"
                />
                <label for="f3" class="text_button">少なめ</label>
              </li>
            </form>
          </ul>
        </div>
        <div class="p-menu-list_button">
          <ul>
            <li>
              <h2 class="text_search-item-ja">活動場所</h2>
              <p class="text_search-item-en">place</p>
            </li>
            <li>
              <input
                id="p1"
                v-model="options.place"
                class="bt"
                type="radio"
                name="place"
                value="1"
                @click="handlePlace('1')"
              />
              <label for="p1" class="text_button">今出川キャンパス</label>
            </li>
            <li>
              <input
                id="p2"
                v-model="options.place"
                class="bt"
                type="radio"
                name="place"
                value="2"
                @click="handlePlace('2')"
              />
              <label for="p2" class="text_button">京田辺キャンパス</label>
            </li>
          </ul>
        </div>
        <div class="p-menu-list_button">
          <ul>
            <li>
              <h2 class="text_search-item-ja">人数</h2>
              <p class="text_search-item-en">people</p>
            </li>
            <li>
              <input
                id="n1"
                v-model="options.people"
                class="bt"
                type="radio"
                name="people"
                value="1"
                @click="handlePeople('1')"
              />
              <label for="n1" class="text_button">賑やか</label>
            </li>
            <li>
              <input
                id="n2"
                v-model="options.people"
                class="bt"
                type="radio"
                name="people"
                value="2"
                @click="handlePeople('2')"
              />
              <label for="n2" class="text_button">アットホーム</label>
            </li>
          </ul>
        </div>
        <div class="p-menu-list_button">
          <ul>
            <li>
              <h2 class="text_search-item-ja">参加可能回生</h2>
              <p class="text_search-item-en">grade</p>
            </li>
            <li>
              <input
                id="g1"
                v-model="options.grade"
                class="bt"
                type="radio"
                name="grade"
                value="1"
                @click="handleGrade('1')"
              />
              <label for="g1" class="text_button">新入生</label>
            </li>
            <li>
              <input
                id="g2"
                v-model="options.grade"
                class="bt"
                type="radio"
                name="grade"
                value="2"
                @click="handleGrade('2')"
              />
              <label for="g2" class="text_button">いつでも</label>
            </li>
          </ul>
        </div>
      </div>
      <div v-if="isDisplay" class="p-search">
        <a class="link-bt text_button">上記の条件で検索</a>
      </div>
    </div>
    <div v-if="device === 'sp'" class="c-cards">
      <div class="p-sp-menu">
        <div class="bt_select sp_button">
          <select v-model="options.practice" class="text_button">
            <option value="">練習頻度</option>
            <option value="1">多め</option>
            <option value="2">そこそこ</option>
            <option value="3">少なめ</option>
          </select>
        </div>
        <div class="bt_select sp_button">
          <select v-model="options.place" class="text_button">
            <option value="">活動場所</option>
            <option value="1">今出川キャンパス</option>
            <option value="2">京田辺キャンパス</option>
          </select>
        </div>
        <div class="bt_select sp_button">
          <select v-model="options.people" class="text_button">
            <option value="">人数</option>
            <option value="1">大人数</option>
            <option value="2">アットホーム</option>
          </select>
        </div>
        <div class="bt_select sp_button">
          <select v-model="options.grade" class="text_button">
            <option value="">参加可能回生</option>
            <option value="1">新入生</option>
            <option value="2">いつでも</option>
          </select>
        </div>
        <div class="p-search">
          <a class="link-bt text_button">上記の条件で検索</a>
        </div>
      </div>
    </div>
    <div v-for="(group, idx) in data['groups']" :key="idx">
      <Thumbnail :group="group" :options="options" />
    </div>
  </div>
</template>

<script>
import Thumbnail from '@/components/home/Thumbnail'
import groups from '@/assets/data/Circles'
export default {
  components: {
    Thumbnail,
  },
  data() {
    return {
      data: groups,
      device: '',
      isDisplay: false,
      options: {
        practice: '',
        place: '',
        people: '',
        grade: '',
      },
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      if (window.innerWidth <= 768) {
        this.device = 'sp'
      } else {
        this.device = 'pc'
      }
    },
    handleFrequency(val) {
      if (this.options.practice === val) {
        this.options.practice = ''
      }
    },
    handlePlace(val) {
      if (this.options.place === val) {
        this.options.place = ''
      }
    },
    handlePeople(val) {
      if (this.options.people === val) {
        this.options.people = ''
      }
    },
    handleGrade(val) {
      if (this.options.grade === val) {
        this.options.grade = ''
      }
    },
  },
}
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
.p-search-text {
  color: #a6a6a6;
  font-size: 30px;
  margin: 4% 0 2% 0;
}
.p-menu {
  margin-top: 30px;
  padding: 10px 40px;
}
ul {
  list-style: none;
}
.p-menu-list_button ul {
  display: flex;
  margin-top: 3%;
  margin-bottom: 7%;
}
.p-menu-list_button ul li {
  margin: auto 5% auto 0;
}
.p-menu-list_button ul li h2 {
  margin-bottom: 10px;
  width: 200px;
}
.p-menu-list_options {
  display: flex;
}
.p-search {
  text-align: center;
  height: 100px;
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
  border-radius: 50px;
}
.p-container-r .bt {
  margin: 10px 0 0 0;
  text-align: center;
}
/*レスポンシブ*/
@media screen and (max-width: 1024px) {
  .p-menu-list_button ul li h2 {
    margin-bottom: 10px;
    width: 144px;
  }
}
@media screen and (max-width: 768px) {
  .p-sp-menu {
    padding-top: 1px;
    margin-bottom: 20px;
  }
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
  .p-top {
    padding: 0;
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
/*サンプルのボタン*/
.bt_select {
  overflow: hidden;
  width: 315px;
  margin: 2em auto;
  box-shadow: 15px 15px 30px #c4cbcb, -15px -15px 30px #ffffff;
}
.bt_select select {
  width: 100%;
  cursor: pointer;
  border: none;
  outline: none;
  background: transparent;
  appearance: none;
}
.bt_select select::-ms-expand {
  display: none;
}
.bt_select.sp_button {
  position: relative;
  border-radius: 50px;
  background: #e5f2f3;
}
.bt_select.sp_button::before {
  position: absolute;
  top: 40%;
  right: 15%;
  width: 0;
  height: 0;
  padding: 0;
  content: '';
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 8px solid #7f7f7f;
  pointer-events: none;
}
.bt_select.sp_button select {
  padding: 8px 38px 8px 38px;
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
