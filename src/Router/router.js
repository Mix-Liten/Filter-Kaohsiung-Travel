import Vue from 'vue'
import VueRouter from 'vue-router'

import App from '../App'
import Home from '../Home/Home.vue'
import Detail from '../Detail/Detail.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: App,
      children: [
        { path: '', component: Home },
        {
          path: '{:id}',
          component: Detail,
          props: true
        },
      ],
    }
  ],
})
