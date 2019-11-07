<template>
  <div id="app">
    <transition name="fade" :duration="1000" mode="out-in">
      <component v-bind:is="layout"></component>
    </transition>
  </div>
</template>

<script>
import DefaultLayout from '@/layouts/Default';
import ConversationLayout from '@/layouts/Conversation';

export default {
  name: 'app',
  components: {
    DefaultLayout,
    ConversationLayout
  },
  computed: {
    layout () {
      return this.$store.getters.getLayout;
   }
  },
  beforeCreate() {
    this.$store.dispatch('configureApp');
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #ebf1f4;
  height: 100vh;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
