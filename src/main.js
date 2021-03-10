import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueSelectImage from 'vue-select-image'

Vue.use(VueSelectImage)

Vue.config.productionTip = false

Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
require("vue-select-image/dist/vue-select-image.css");

new Vue({
  render: h => h(App),
}).$mount('#app')
