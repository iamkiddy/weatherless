import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
import Axios from "axios"
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false;
Vue.use(Vuesax)
Vue.use(Axios)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
