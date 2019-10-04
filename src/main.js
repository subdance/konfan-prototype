// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'fullpage.js/dist/fullpage.css'
import APlayer from '@moefe/vue-aplayer';
import VueFullPage from 'vue-fullpage.js'

Vue.use(VueFullPage);
Vue.use(APlayer, {
  defaultCover: 'https://github.com/u3u.png',
  productionTip: true,
});


Vue.use(ElementUI);

var VueScrollTo = require('vue-scrollto');

Vue.use(VueScrollTo)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
