<!--サークル詳細ページ-->
<template>
  <div class="p-detail"></div>
</template>
<script></script>
<style lang="scss" scoped>
  * {
  margin: 0;
  background-color: #E5F2F3;
  text-align: center;
  color: #595959;
}

h1 {
  font-size: 60px;
}

.intro-video  video  {
  width: 55%;
  height: 300px;
  border-radius: 30px;
  border: solid 6px white;
  outline: none;
  box-shadow: 20px 20px 60px #c9d0d0,
-20px -20px 60px #ffffff;
}
.intro {
  margin-top: 80px;
  border-bottom: solid 1px #A6A6A6;
  display: inline-block;
}

h3:before {
  content: url('./image_movie/iconmonstr-square-1.svg');
  margin-right: 5px;
}

.content, .content-m, h2 {
  text-align: left;
  width: 55vw;
  display: inline-block;
}

.pic_gather {
  height: 145px;
  width: 200px;
  float: left;
  margin-top: -9px;
  margin-right: 30px;
  border-radius: 50%;
  border: solid 4px white;
  box-shadow: 20px 20px 60px #c9d0d0,
-20px -20px 60px #ffffff;

}

.content p, h3 {
  overflow: hidden;
}

h3 {
  margin-left: 236px;
}

.feature {
  margin-bottom: 60px;
}

.content {
  margin-bottom: 25px;
}

/* 画像とテキストのバランス調整のレスポンシブ対応 */
@media (max-width: 700px){

  h1 {
    font-size: 50px;
  }
  
 h2{
   font-size: 20px;
 }
  h3 {
    font-size: 15px;
    margin-left: unset;
  }

  .pic_gather {
    height: 140px;
    width: 185px;
    margin-top: unset;
    margin-right: unset;
    float: none;
  }

  content p, h3 {
    overflow: unset;
  }

}

/* 動画のレスポンシブ対応 */
  @media (max-width: 530px){
    .intro-video video {
      width: 70%;
      height: 170px;
      border-radius: 30px;
      border: solid 4px white;
      outline: none;
    }
}
</style>
