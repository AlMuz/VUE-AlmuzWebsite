<template>
  <div class="project">
    <h1>{{ project.name }}</h1>
  </div>
</template>

<script>
export default {
  computed: {
    project () {
      return this.$store.getters['projects/selectedProject']
    }
  },
  fetch ({ store, params }) {
    return store.dispatch('projects/fetchProject', params.id)
  }
}
</script>

<style lang="css" scoped>
</style>
