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
    layout() {
      return this.$store.getters.getLayout;
    }
  },
  beforeCreate() {
    this.$store.dispatch('configureApp');
  },
  metaInfo() {
    return {
      htmlAttrs: {
        lang: this.$store.getters.getSelectedLanguage
      }
    }
  }
};
</script>

<style>
  body {
    color: #272643!important;
    background-color: #ebf1f4!important;
  }
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .content {
    margin: 20px;
  }
  .content h3 {
    text-align: center;
  }
  .content h3, .content h4, .content h5 {
    text-decoration: underline;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
