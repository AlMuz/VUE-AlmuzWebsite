<template>
  <div class="projects">
    <h3>{{ $t("mainPage.projects") }}</h3>
    <div class="loaded" v-if="!loading">
      <div class="table-responsive">
        <table role="table" aria-busy="false" aria-colcount="2" class="table b-table">
          <thead role="rowgroup">
            <tr role="row">
              <th role="columnheader" scope="col" aria-colindex="1"> {{ this.$t("mainPage.name") }} </th>
              <th role="columnheader" scope="col" aria-colindex="2"> {{ this.$t("mainPage.language") }} </th>
              <th role="columnheader" scope="col" aria-colindex="3"> {{ this.$t("mainPage.link") }} </th>
              <th role="columnheader" scope="col" aria-colindex="4"> {{ this.$t("mainPage.created") }} </th>
              <th role="columnheader" scope="col" aria-colindex="5"> {{ this.$t("mainPage.updated") }} </th>
            </tr>
          </thead>
          <tbody role="rowgroup">
            <tr role="row" v-for="project in projects">
              <td role="cell" v-for="(data, name) in project" :class="name">
                <a :href="data" target="_blank" v-if="name == 'link'">
                  <i class="fab fa-github"></i>
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
    <div class="loader text-center" v-else>
      <i class="fas fa-5x fa-spin fa-spinner"></i>
    </div>
  </div>
</template>

<script>
export default {
    props: ["loading", "projects"]
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
