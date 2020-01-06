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
body {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #272643 !important;
  background-color: #ebf1f4 !important;
}
.content {
  margin: 20px;
}
.content h3 {
  text-align: center;
}
.content h3,
.content h4,
.content h5 {
  text-transform: uppercase;
  text-decoration: underline;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.slide-enter {
  opacity: 0;
}
.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity 0.5s;
}
.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
  transition: opacity 1s;
  opacity: 0;
}
.slide-move {
  transition: transform 1s;
}
@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(20px);
  }
}
</style>
