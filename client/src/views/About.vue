<template>
  <div class="about">
    <h3>{{ $t("aboutMePage.aboutMe") }}</h3>
    <p v-html='$t("aboutMePage.information") '></p>
    <i18n path="aboutMePage.informationContactMe" tag="p">
      <router-link place="action" to='contact' tag='a'>{{ $t('aboutMePage.message') }}</router-link>
    </i18n>
    <h4>{{ $t("aboutMePage.techSkills") }}:</h4>
    <ul>
      <li v-for="(value, index) in skills" :key="index">
        {{ value }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        "PHP, Laravel, CakePHP, Pyrocms, Wordpress",
        "HTML&CSS, Javascript, Vue.js, React, Node.js, Express.js, React Native, SASS",
        "MySQL / MariaDB, MongoDB",
        "Git, Docker, Heroku",
        "Apache, Nginx",
        "Experience with Linux"
      ]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
