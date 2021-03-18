import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'

import DefaultLayout from './layouts/Simple.vue'
import AuthLayout from './layouts/AuthLayout.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue) 
Vue.config.productionTip = false
Vue.component('default-layout', DefaultLayout)
Vue.component('auth-layout', AuthLayout)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
