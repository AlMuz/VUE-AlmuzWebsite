<template>
  <b-jumbotron>
    <b-row>
      <b-col md="4" cols="12">
        <b-img
          src="@/assets/images/me.png"
          fluid
          alt="Responsive image"
          rounded="circle"
          class="mx-auto d-block"
        ></b-img>
      </b-col>
      <b-col md="7" offset-md="1">
        <h1>{{ $t("jumbotron.nameAndSurname") }}</h1>
        <h2>{{ $t("jumbotron.position") }}</h2>
      </b-col>
    </b-row>
  </b-jumbotron>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
.jumbotron {
  margin-bottom: 0!important;
  border-radius: 0!important;
}
</style>
