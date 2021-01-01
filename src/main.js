import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Loader from "./components/app/Loader.vue";
import DefaultLayout from "./layout/DefaultLayout.vue";
import "./registerServiceWorker";

import "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.css";

Vue.use(Vuelidate);

Vue.component("default-layout", DefaultLayout);
Vue.component("Loader", Loader);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
