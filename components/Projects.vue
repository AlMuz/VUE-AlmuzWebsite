<template>
  <div>
    <h3>{{ $t('projectsPage.projects') }}</h3>
    <div>
      <div class="table-responsive">
        <table
          role="table"
          aria-busy="false"
          aria-colcount="2"
          class="table b-table"
        >
          <thead role="rowgroup">
            <tr role="row">
              <th role="columnheader" scope="col" aria-colindex="1">
                {{ this.$t('projectsPage.name') }}
              </th>
              <th role="columnheader" scope="col" aria-colindex="2">
                {{ this.$t('projectsPage.language') }}
              </th>
              <th role="columnheader" scope="col" aria-colindex="3">
                {{ this.$t('projectsPage.created') }}
              </th>
              <th role="columnheader" scope="col" aria-colindex="4">
                {{ this.$t('projectsPage.updated') }}
              </th>
            </tr>
          </thead>
          <tbody role="rowgroup">
            <tr
              v-for="(project, pindex) in filteredProjects"
              :key="pindex"
              role="row"
              @click.prevent="openProject(project.name)"
            >
              <td
                v-for="(data, name, index) in project"
                :key="index"
                :class="name"
                role="cell"
              >
                {{ data }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['projects'],
  computed: {
    filteredProjects() {
      return this.projects.map((project) => {
        const newProject = {}
        newProject.name = project.name
        newProject.language = project.language
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
  methods: {
    openProject(id) {
      this.$router.push('/projects/' + id)
    }
  }
}
</script>

<style lang="css" scoped>
thead tr {
  text-align: center;
}

tbody tr td {
  cursor: pointer;
}
</style>
