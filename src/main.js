import Vue from 'vue'
import router from './Router/router'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

new Vue({
  el: '#app',
  router,
  template: '<router-view/>',
})
