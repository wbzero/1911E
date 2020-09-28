import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      show:true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta:{
      show:false
    }
  },
  {
    path: '/lessone',
    name: 'Lessone',
    component: () => import('../views/lessone/index.vue'),
    meta:{
      show:true
    }
  },
  {
    path: '/course',
    name: 'Course',
    component: () => import('../views/course/index.vue'),
    meta:{
      show:true
    }
  },
  {
    path: '/practice',
    name: 'Practice',
    component: () => import('../views/practice/index.vue'),
    meta:{
      show:true
    }
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('../views/user/index.vue'),
    meta:{
      show:true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
