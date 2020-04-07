<template>
  <b-container class="header">
    <b-row>
      <b-col>
        <h1>Small conversation</h1>
      </b-col>
      <b-col class="text-right">
        <b-button @click="skipTutorial">
          Skip button
        </b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  methods: {
    skipTutorial() {
      this.$cookiz.set('intro', true)
      this.$router.push('/')
    }
  }
}
</script>

<style lang="css" scoped>
.header {
  padding: 50px;
  border-bottom: 1px solid #272643;
}
.btn {
  background-color: #d4d4d9 !important;
  color: #272643 !important;
  border: none !important;
}
</style>
