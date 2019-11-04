<template>
  <b-container id="app">
    <b-row>
      <b-col>
        <Jumbotron />
        <CustomNavbar />
        <router-view />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import CustomNavbar from '@/components/CustomNavbar';
import Jumbotron from '@/components/Jumbotron';
export default {
  name: 'app',
  components: {
    Jumbotron,
    CustomNavbar
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
