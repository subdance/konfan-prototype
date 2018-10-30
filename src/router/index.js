import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/homepage.vue'
import character from '@/character.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainPage',
      component: homePage,
    },
    {
      path: '/c',
      component: character,
    }
  ]
})
