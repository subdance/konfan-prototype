import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/page_loader/homepage.vue'
import character from '@/page_loader/character.vue'
import album from '@/page_loader/album.vue'
import teaRoom from '@/page_loader/tea_room.vue'
import videoRoom from '@/page_loader/video_room.vue'

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
    },
    {
      path: '/a',
      component: album,
    },
    {
      path: '/v',
      component: videoRoom,
    },
    {
      path: '/t',
      component: teaRoom,
    },

  ]
})
