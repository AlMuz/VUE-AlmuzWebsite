<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
export default {
  head() {
    return {
      titleTemplate: `%s - ${this.$t('meta.titleTemplate')}`
    }
  }
}
</script>
