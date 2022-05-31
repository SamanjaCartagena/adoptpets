import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import './assets/sass/index.sass'
Vue.config.productionTip = false

const app = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
app.$mount('#app')
Vue.use(BootstrapVue)
