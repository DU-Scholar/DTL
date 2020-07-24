<!--サークル詳細ページ-->
<template>
  <div class="p-detail">
    <div class="text_description-title">
      <h1>同大硬式</h1>
    </div>

    <div class="intro-video">
      <video
        autoplay
        muted
        playsinline
        preload="auto"
        src="@/assets/images/detail/615821837.288317.mp4"
        controls
      ></video>
    </div>

    <div class="intro">
      <div class="content">
        <h2 class="text_description-title">私たちはこんなサークルです</h2>
        <div class="info text_description-content">
          同硬は同志社大学唯一の大学公認のテニスサークルです!<br />
          なので大学のテニスコートが使えます！そんなサークルは同硬だけ！！！！！<br />
          テニスも遊びも全力で！🎾💃🏻<br />
          めちゃくちゃ楽しみます🤣🤣🤣<br />
          心配や不安は一切不必要！ 先輩後輩仲良くてすぐに馴染める！
          みんなが主人公になれます😉<br />
        </div>
      </div>
    </div>

    <div class="content">
      <div>
        <h2 class="text_description-title">当サークルの魅力はココ！</h2>
      </div>

      <div class="content">
        <h3 class="text_description-subtitle">テニスを全力で楽しむ！！</h3>
        <img
          class="pic_gather"
          src="@/assets/images/detail/図1.png"
          alt="集合写真"
        />
        <p class="text_description-content">
          私達は最高で週６回もテニスができるテニス好きが集まるサークルです。<br />
          同志社のサークルで一番強いサークルを決める夏団では男女ともに準優勝でした！<br />
          また四代対抗戦（同志社、立命館、関学、神大）などの対外試合が多いのも魅力です！
        </p>
      </div>

      <div class="content">
        <h3 class="text_description-subtitle">60年以上の歴史がある！！</h3>
        <img
          class="pic_gather"
          src="@/assets/images/detail/図2.png"
          alt="集合写真"
        />
        <p class="text_description-content">
          同大硬式は60年以上もの歴史がある由緒ただしいサークルです！<br />
          そのため縦の繋がりが強く、OB・OG戦などの世代を超えた交流も行っています！<br />
        </p>
      </div>

      <div class="content">
        <h3 class="text_description-subtitle">人が魅力！！！</h3>
        <img
          class="pic_gather"
          src="@/assets/images/detail/図3.png"
          alt="集合写真"
        />
        <p class="text_description-content">
          同大硬式の魅力は人にあります！<br />
          先輩がなんでも親身になって話を聞いてくれたり、休日には積極的に遊びに連れていってくれたりと、先輩後輩の垣根を超えた交流ができます！
        </p>
      </div>
    </div>
  </div>
</template>
<script></script>
<style lang="scss" scoped>
.p-detail {
  margin: 0;
  background-color: #e5f2f3;
  text-align: center;
}

.intro-video video {
  width: 55%;
  height: 300px;
  border-radius: 30px;
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
  border-radius: 50%;
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
