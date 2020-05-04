import Vue from "vue";
import App from "./App.vue";
import Ionic from "@ionic/vue";
import { IonicVueRouter } from "@ionic/vue";
import "@ionic/core/css/core.css";
import "@ionic/core/css/ionic.bundle.css";
import router from "./routes";
import VModal from "vue-js-modal";

Vue.config.productionTip = false;
Vue.use(Ionic);
Vue.use(IonicVueRouter);
Vue.use(VModal);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
