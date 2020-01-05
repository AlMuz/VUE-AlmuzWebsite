<template>
  <b-container>
    <b-row>
      <b-col>
        <Jumbotron />
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
export default {
  components: {
    Jumbotron
  }
}
</script>

<style>

</style>
