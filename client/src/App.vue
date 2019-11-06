<template>
  <div id="app">
    <component v-bind:is="layout"></component>
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
    //  return this.$store.getters.layout
    return 'DefaultLayout'
   }
  },
  beforeCreate() {
    this.$store.dispatch('setLanguages');
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
