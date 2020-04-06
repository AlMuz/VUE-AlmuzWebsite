<template>
  <div class="projects">
    <Projects :projects="projects" />
  </div>
</template>

<script>
import Projects from '~/components/Projects'

export default {
  components: {
    Projects
  },
  async fetch({ store }) {
    if (store.getters['projects/projects'].length === 0) {
      await store.dispatch('projects/fetch')
    }
  },
  computed: {
    projects() {
      return this.$store.getters['projects/projects']
    }
  },
  head() {
    return {
      title: this.$t('meta.projectsPage')
    }
  }
}
</script>
