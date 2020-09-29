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
  },
  {
    path: '/item',
    name: 'Item',
    component: () => import('../views/practice/Item.vue'),
    meta:{
      show:true
    }
  },
  {
    path: '/item2',
    name: 'Item2',
    component: () => import('../views/practice/Item2.vue'),
    meta:{
      show:true
    }
  },
  {
    path: '/item3',
    name: 'Item3',
    component: () => import('../views/practice/Item3.vue'),
    meta:{
      show:true
    }
  },
  {
    path: '/item4',
    name: 'Item4',
    component: () => import('../views/practice/Item4.vue'),
    meta:{
      show:true
    }
  },
  {
    path: '/item5',
    name: 'Item5',
    component: () => import('../views/practice/Item5.vue'),
    meta:{
      show:true
    }
  },
  {
    path: '/item6',
    name: 'Item6',
    component: () => import('../views/practice/Item6.vue'),
    meta:{
      show:true
    }
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/practice/Search.vue'),
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
