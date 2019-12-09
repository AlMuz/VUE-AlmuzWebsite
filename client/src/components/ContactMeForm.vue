<template>
  <div>
    <p class="orContactMeUsing">{{ $t("contactMePage.orContactMeUsing") }}:</p>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        :label="$t('contactMePage.yourEmail')"
        label-for="input-1"
        :description="$t('contactMePage.yourEmailDescription')"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          :placeholder="$t('contactMePage.yourEmailPlaceholder')"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        :label="$t('contactMePage.yourName')"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          :placeholder="$t('contactMePage.yourNamePlaceholder')"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-3"
        :label="$t('contactMePage.yourMessage')"
        label-for="input-3"
      >
        <b-form-textarea
          id="input-3"
          v-model="form.message"
          required
          :placeholder="$t('contactMePage.yourMessagePlaceholder')"
          rows="3"
          max-rows="6"
        ></b-form-textarea>
      </b-form-group>
      <b-button type="submit" variant="primary">{{
        $t("contactMePage.submitBtn")
      }}</b-button>
      <b-button type="reset" variant="danger" class="ml-3">{{
        $t("contactMePage.resetBtn")
      }}</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
        message: ""
      },
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.name = "";

      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>

<style lang="css" scoped>
.orContactMeUsing {
  font-weight: bold;
}
</style>
