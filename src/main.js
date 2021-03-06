import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import Notifications from "vt-notifications";

Vue.use(Notifications);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  data: {
    //
  },
  methods: {
    checkSessionStorage() {
      if (sessionStorage.token && sessionStorage.id) {
        const payload = { token: sessionStorage.token, id: sessionStorage.id };
        store.dispatch("checkSessionStorage", payload);
      }
    },
  },
  mounted() {
    this.checkSessionStorage();
  },
  render: (h) => h(App),
}).$mount("#app");
