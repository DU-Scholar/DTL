<template>
  <div class="p-faculty-constitution c-cards text_description-content">
    <h4>学部構成</h4>
    <p v-if="!faculties.length">データなし</p>
    <div v-for="(val, idx) of faculties" :key="idx">
      <!--      <p v-if="val === 1">-->
      <!--        経済-->
      <!--      </p>-->
      <p v-if="val === 2">
        経済
      </p>
      <p v-if="val === 3">
        政策
      </p>
      <p v-if="val === 4">
        法
      </p>
      <p v-if="val === 5">
        社会
      </p>
      <p v-if="val === 6">
        文学
      </p>
      <p v-if="val === 7">
        神学
      </p>
      <p v-if="val === 8">
        文化情報
      </p>
      <p v-if="val === 9">
        理工
      </p>
      <p v-if="val === 10">
        生命医科
      </p>
      <p v-if="val === 11">
        スポ健
      </p>
      <p v-if="val === 12">
        心理
      </p>
      <p v-if="val === 13">
        グロコミ
      </p>
      <p v-if="val === 14">
        グロ地
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
