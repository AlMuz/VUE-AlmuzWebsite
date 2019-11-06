<template>
  <div id="chat">
    <b-container>
      <b-row class="text-right mt-5">
        <b-col>
          <h1>Introduction</h1>
        </b-col>
        <b-col>
           <b-button variant="danger" v-on:click="skipTutorial">Skip button</b-button>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="fixed-bottom">
      <b-row v-for="index in 10" :key="index" :class="dynamicClass(index)">
        <b-col md="6">
          {{index}}
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  methods: {
    skipTutorial() {
      this.$store.dispatch('skipIntro');
    },
    dynamicClass(index) {
      if(index % 2 == 0) {
        return "text-right"
      }
      return "text-left"
    }
  }
}
</script>

<style lang="css" scoped>
</style>
