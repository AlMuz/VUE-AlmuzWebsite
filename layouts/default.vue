<template>
  <b-container>
    <b-row>
      <b-col>
        <Jumbotron />
        <Navbar />
        <div class="content">
          <transition name="slide" mode="out-in">
            <nuxt />
          </transition>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Jumbotron from '@/components/Jumbotron'
import Navbar from '@/components/Navbar'
export default {
  components: {
    Jumbotron,
    Navbar
  },
  head () {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale
      },
      titleTemplate: `%s - ${this.$t('meta.titleTemplate')}`
    }
  }
}
</script>

<style>

</style>
