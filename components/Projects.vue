<template>
  <div>
    <h3>{{ $t("projectsPage.projects") }}</h3>
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
                {{ this.$t("projectsPage.name") }}
              </th>
              <th role="columnheader" scope="col" aria-colindex="2">
                {{ this.$t("projectsPage.language") }}
              </th>
              <th role="columnheader" scope="col" aria-colindex="3">
                {{ this.$t("projectsPage.link") }}
              </th>
              <th role="columnheader" scope="col" aria-colindex="4">
                {{ this.$t("projectsPage.created") }}
              </th>
              <th role="columnheader" scope="col" aria-colindex="5">
                {{ this.$t("projectsPage.updated") }}
              </th>
            </tr>
          </thead>
          <tbody role="rowgroup">
            <tr v-for="(project, pindex) in projects" :key="pindex" role="row">
              <td
                v-for="(data, name, index) in project"
                :class="name"
                :key="index"
                role="cell"
              >
                <a :href="data" v-if="name == 'link'" target="_blank">
                  <i class="fab fa-github" />
                </a>
                <p v-else>
                  {{ data }}
                </p>
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
  props: ['projects']
}
</script>

<style lang="css" scoped>
thead tr {
  text-align: center;
}
.link {
  text-align: center;
}
.link a {
  font-size: 30px;
}
.link a .fab {
  color: #272643;
}
.link a .fab:hover {
  color: red;
}
</style>
