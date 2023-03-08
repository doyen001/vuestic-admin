// Polyfills
import 'es6-promise/auto'
import 'babel-polyfill'
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { ColorThemePlugin } from '../services/ColorThemePlugin'
import store from '../store/index'
import router from '../router/index'
import VuesticPlugin from '../vuestic-theme/vuestic-plugin'
import '../i18n/index'
import YmapPlugin from 'vue-yandex-maps'
import VueClipboard from 'vue-clipboard2'

Vue.use(VuesticPlugin)
Vue.use(YmapPlugin)
Vue.use(VueClipboard)

Vue.use(ColorThemePlugin,
  {
    // Add or change theme colors here
    themes: {
      // primary: '#f06595',
      // blurple: '#7289DA',
    },
  })

router.beforeEach((to, from, next) => {
  store.commit('setLoading', true)
  next()
})

router.afterEach((to, from) => {
  store.commit('setLoading', false)
})

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
