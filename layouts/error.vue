<template>
  <div>
    <template v-if="error.statusCode === 404">
      <p class="text_description-content">
        not found
      </p>
    </template>
    <template v-else>
      server error
    </template>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['error'],
  async mounted() {
    await this.$router.push('/')
  },
}
</script>
<style scoped></style>
