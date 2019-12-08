<template>
  <b-navbar>
    <b-navbar-nav class="left">
      <b-nav-item to="/">{{ $t("navbar.mainPage") }}</b-nav-item>
      <b-nav-item to="/about">{{ $t("navbar.aboutMe") }}</b-nav-item>
      <b-nav-item to="/contact">{{ $t("navbar.contactMe") }}</b-nav-item>
    </b-navbar-nav>
    <b-navbar-nav class="ml-auto">
      <b-nav-item-dropdown :text="selectedLanguage | capitalize" right>
        <b-dropdown-item
          v-for="(language, index) in languages"
          v-on:click="changeLanguage(language)"
          :key="index">
          {{ language | capitalize }}
        </b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  computed: {
    languages() {
      return this.$store.getters.getLanguages.filter(
        lang => lang != this.selectedLanguage
      );
    },
    selectedLanguage() {
      return this.$store.getters.getSelectedLanguage;
    }
  },
  methods: {
    changeLanguage(language) {
      this.$store.dispatch("changeLanguage", language);
    }
  }
}
</script>

<style lang="css">
.navbar {
  background-color: #272643!important;
}
.navbar .nav-item a {
  color: #FFF!important;
}
.navbar .left .nav-item a:hover {
  color: #ebebeb!important;
}
.navbar .dropdown-menu a {
  color: #000!important;
}
</style>
