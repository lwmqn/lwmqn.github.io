import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('@/views/Home.vue')
const Examples = () => import('@/views/Examples.vue')
const Documentation = () => import('@/views/Documentation.vue')

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      name: 'Home'
    },
    {
      path: '/examples',
      component: Examples,
      name: 'Examples'
    },
    {
      path: '/documentation',
      component: Documentation,
      name: 'Documentation'
    }
  ]
})

export default router
