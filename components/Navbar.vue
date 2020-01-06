<template>
  <b-navbar toggleable="lg" type="dark">
    <b-navbar-toggle target="nav-collapse" />
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="left">
        <b-nav-item :to="localePath('index')">
          {{ $t("navbar.aboutMe") }}
        </b-nav-item>
        <b-nav-item :to="localePath('projects')">
          {{ $t("navbar.projectsPage") }}
        </b-nav-item>
        <b-nav-item to="/contact">
          {{ $t("navbar.contactMe") }}
        </b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown :text="selectedLanguage | capitalize" right>
          <b-dropdown-item
            v-for="locale in availableLocales"
            :to="switchLocalePath(locale.code)"
            :key="locale.code"
          >
            {{ locale.code | capitalize }}
          </b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  computed: {
    languages () {
      return this.$i18n.locales
    },
    selectedLanguage () {
      return this.$i18n.locale
    },
    availableLocales () {
      return this.languages.filter(i => i.code !== this.selectedLanguage)
    }
  }
}
</script>

<style lang="css" scoped>
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
