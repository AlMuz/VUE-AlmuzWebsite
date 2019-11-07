<template>
  <b-container class="header">
    <b-row class="text-right">
      <b-col>
        <h1>Introduction</h1>
      </b-col>
      <b-col>
         <b-button variant="danger" v-on:click="skipTutorial">Skip button</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  methods: {
    skipTutorial() {
      this.$store.dispatch('skipIntro');
    },
  }
}
</script>

<style media="screen">
  .header {
    padding: 50px;
    border-bottom: 1px solid #272643;
  }
</style>
