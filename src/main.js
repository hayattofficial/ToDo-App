import Vue from "vue";
import App from "./App.vue";
import router from "./router"; // Import Vue Router instance
import "bootstrap/dist/css/bootstrap.css";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router, // Set up Vue Router
}).$mount("#app");
