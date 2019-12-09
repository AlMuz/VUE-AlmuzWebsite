import Vue from "vue";
import BootstrapVue from 'bootstrap-vue';
import Notifications from 'vue-notification'
import VueMeta from 'vue-meta'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./translations/i18n";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
Vue.use(VueMeta);
Vue.use(Notifications);

Vue.config.productionTip = false;

Vue.filter('capitalize', function (value) {
  if (!value) return ''
  return value.toString().toUpperCase()
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
  mounted: () => document.dispatchEvent(new Event("x-app-rendered")),
}).$mount("#app");
