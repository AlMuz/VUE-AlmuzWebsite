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
  computed: {
    projects () {
      return this.$store.getters['projects/projects'].map((project) => {
        const newProject = {}
        newProject.name = project.name
        newProject.language = project.language
        newProject.link = project.html_url
        newProject.created = this.$moment(new Date(project.created_at)).format(
          'YYYY-MM-DD HH:mm:ss'
        )
        newProject.updated = this.$moment(new Date(project.updated_at)).format(
          'YYYY-MM-DD HH:mm:ss'
        )

        return newProject
      })
    }
  },
  async fetch ({ store }) {
    if (store.getters['projects/projects'].length === 0) {
      await store.dispatch('projects/fetch')
    }
  },
  head () {
    return {
      title: this.$t('meta.projectsPage')
    }
  }
}
</script>
