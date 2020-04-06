<template>
  <div class="about">
    <h3>{{ $t('aboutMePage.aboutMe') }}</h3>
    <p v-html="$t('aboutMePage.information')" />
    <i18n path="aboutMePage.informationContactMe" tag="p">
      <nuxt-link to="/contact">
        {{ $t('aboutMePage.message') }}
      </nuxt-link>
    </i18n>
    <h4>{{ $t('aboutMePage.techSkills') }}:</h4>
    <ul>
      <li v-for="(value, index) in skills" :key="index">
        {{ value }}
      </li>
    </ul>
    <h4>{{ $t('aboutMePage.workExperience') }}</h4>
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
              {{ this.$t('aboutMePage.role') }}
            </th>
            <th role="columnheader" scope="col" aria-colindex="2">
              {{ this.$t('aboutMePage.company') }}
            </th>
          </tr>
        </thead>
        <tbody role="rowgroup">
          <tr v-for="(value, index) in workExperience" :key="index" role="row">
            <td role="cell">
              {{ $t(`aboutMePage.${value.role}`) }}
            </td>
            <td role="cell">
              {{ value.company }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        'PHP, Laravel, CakePHP, Pyrocms, Wordpress',
        'HTML&CSS, Javascript, Vue.js, React, Node.js, Express.js, React Native, SASS',
        'MySQL / MariaDB, MongoDB',
        'Git, Docker, Heroku',
        'Apache, Nginx',
        'Experience with Linux'
      ],
      fields: [
        { key: 'role', label: this.$t('aboutMePage.role') },
        { key: 'company', label: this.$t('aboutMePage.company') }
      ],
      workExperience: [
        { role: 'itIntern', company: 'Accenture Latvia' },
        { role: 'itIntern', company: 'SIA Mendo' },
        { role: 'webDev', company: 'SIA Mendo' }
      ]
    }
  },
  head() {
    return {
      title: this.$t('meta.aboutPage')
    }
  }
}
</script>

<style lang="css" scoped>
.table th {
  border-bottom: 2px solid #272643;
  border-top: 0;
}
.table td {
  border-top: 1px solid #272643;
}
</style>
