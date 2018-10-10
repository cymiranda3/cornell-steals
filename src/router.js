import Vue from 'vue'
import Router from 'vue-router'
import About from './views/About.vue'
import Shop from './views/Shop.vue'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/Shop',
      name: 'Shop',
      component: Shop
    }
  ]
})
