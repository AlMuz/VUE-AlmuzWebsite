<template>
  <div class="project">
    <h3>{{ project.name }}</h3>
  </div>
</template>

<script>
export default {
  async fetch({ store, params, error }) {
    // preparing selected project data
    try {
      await store.dispatch('projects/fetchProject', params.id)
    } catch (e) {
      error()
    }
  },
  computed: {
    project() {
      return this.$store.getters['projects/selectedProject']
    }
  },
  // checking for params id in url
  validate({ params }) {
    return Boolean(params.id)
  }
}
</script>

<style lang="css" scoped></style>
