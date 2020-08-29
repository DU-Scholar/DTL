<template>
  <div class="p-faculty-constitution c-cards text_description-content">
    <h4>学部構成</h4>
    <p v-if="!faculties.length">データなし</p>
    <div v-for="(val, idx) of faculties" :key="idx">
      <!--      <p v-if="val === 1">-->
      <!--        経済-->
      <!--      </p>-->
      <p v-if="val === 2">
        経済学部
      </p>
      <p v-if="val === 3">
        政策学部
      </p>
      <p v-if="val === 4">
        法学部
      </p>
      <p v-if="val === 5">
        社会学部
      </p>
      <p v-if="val === 6">
        文学部
      </p>
      <p v-if="val === 7">
        神学部
      </p>
      <p v-if="val === 8">
        文化情報学部
      </p>
      <p v-if="val === 9">
        理工学部
      </p>
      <p v-if="val === 10">
        生命医科学部
      </p>
      <p v-if="val === 11">
        スポーツ健康科学部
      </p>
      <p v-if="val === 12">
        心理学部
      </p>
      <p v-if="val === 13">
        グローバル・コミュニケーション学部
      </p>
      <p v-if="val === 14">
        グローバル地域文化学部
      </p>
      <p v-if="val === 15">
        その他
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    faculties: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
<style scoped>
.p-faculty-constitution {
  margin: 20px;
  text-align: center;
  padding: 30px;
}
</style>
