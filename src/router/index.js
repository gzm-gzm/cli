import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: {
      title: '详情',
      requireAuth:true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
    
  }
]

const router = new VueRouter({
  routes
})

export default router
