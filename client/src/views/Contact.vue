<template>
  <div class="contact">
    <h3>{{ $t("contactMePage.contactMe") }}</h3>
    <ContactMeIcons />
    <ContactMeForm />
  </div>
</template>

<script>
import ContactMeIcons from '@/components/ContactMeIcons';
import ContactMeForm from '@/components/ContactMeForm';

export default {
  components: {
    ContactMeIcons,
    ContactMeForm
  }
}
</script>

<style lang="css" scoped>

</style>
