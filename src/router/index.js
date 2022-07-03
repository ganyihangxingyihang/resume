import { createRouter, createWebHistory } from 'vue-router'

import Home from '../Home.vue'
import Introduce from '../components/Introduce.vue'
import IntroducePdf from '../components/IntroducePdf.vue'

const routerHistory = createWebHistory()

const routes = [
  {
    path: '/',
    component: Home,
    redirect: '/introduce',
    children: [
      { path: '/introduce', component: Introduce },
      { path: '/pdf', component: IntroducePdf }
    ]
  }
]

const router = createRouter({
  history: routerHistory,
  routes
})

export default router
