<template>
  <b-navbar type="dark" variant="dark">
    <b-navbar-nav>
      <b-nav-item to="/">{{ $t("navbar.mainPage") }}</b-nav-item>
      <b-nav-item to="/about">{{ $t("navbar.aboutMe") }}</b-nav-item>
    </b-navbar-nav>
    <b-navbar-nav class="ml-auto">
      <b-nav-item-dropdown :text="selectedLanguage | capitalize" right>
        <b-dropdown-item v-for="language in languages" v-on:click="changeLanguage(language)">{{ language | capitalize }}</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  computed: {
    languages() {
      var languages = this.$store.getters.getLanguages;
      return this.$store.getters.getLanguages.filter(lang => lang != this.selectedLanguage);
    },
    selectedLanguage() {
      return this.$store.getters.getSelectedLanguage;
    }
  },
  methods: {
    changeLanguage(language) {
      this.$store.dispatch('changeLanguage', language);
    }
  }
}
</script>
