import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/main.less";

Vue.config.productionTip = false;

// Form Validation
import VeeValidate from "vee-validate";
Vue.use(VeeValidate);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
