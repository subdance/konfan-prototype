import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/homepage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainPage',
      component: homePage
    }
  ]
})
