/*!

=========================================================
* Vue Argon Dashboard - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Api from './api'
import './registerServiceWorker'
import ArgonDashboard from './plugins/argon-dashboard'
import VueToast from 'vue-toast-notification'

import 'vue2-dropzone/dist/vue2Dropzone.min.css'
import 'vue-toast-notification/dist/theme-default.css'

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('token') === null) {
      next({ path: '/login' })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.authPage)) {
    if (localStorage.getItem('token') !== null) {
      next({ path: '/dashboard' })
    } else {
      next()
    }
  } else {
    next()
  }
})

Vue.config.productionTip = false

Vue.use(ArgonDashboard)
Vue.use(require('vue-moment'))
Vue.use(VueToast, {
  position: 'top'
})

Vue.prototype.$api = Api

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
