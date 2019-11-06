<template>
  <b-container>
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
  components: {
    Jumbotron,
    CustomNavbar
  },
}
</script>

<style lang="css" scoped>
</style>
