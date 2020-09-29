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
    path: '/currency',
    name: 'Currency',
    component: () => import('../views/user/Currency.vue'),
    meta:{
      show:false
    }
  },
  {
    path: '/friends',
    name: 'Friends',
    component: () => import('../views/user/Friends.vue'),
    meta:{
      show:false
    }
  },
  {
    path: '/star',
    name: 'Star',
    component: () => import('../views/user/Star.vue'),
    meta:{
      show:false
    }
  },
  {
    path: '/bill',
    name: 'Bill',
    component: () => import('../views/user/Bill.vue'),
    meta:{
      show:false
    }
  },
  {
    path: '/bills',
    name: 'Bills',
    component: () => import('../views/user/Bills.vue'),
    meta:{
      show:false
    }
  },
  {
    path: '/billse',
    name: 'Billse',
    component: () => import('../views/user/Billse.vue'),
    meta:{
      show:false
    }
  },
  {
    path: '/coupon',
    name: 'Coupon',
    component: () => import('../views/user/Coupon.vue'),
    meta:{
      show:false
    }
  },
  {
    path: '/card',
    name: 'Card',
    component: () => import('../views/user/Card.vue'),
    meta:{
      show:false
    }
  },
  {
    path: '/diamond',
    name: 'Diamond',
    component: () => import('../views/user/Diamond.vue'),
    meta:{
      show:false
    }
  },
  {
    path: '/bell',
    name: 'Bell',
    component: () => import('../views/user/Bell.vue'),
    meta:{
      show:false
    }
  },
  {
    path: '/invition',
    name: 'Invition',
    component: () => import('../views/user/Invition.vue'),
    meta:{
      show:false
    }
  },
  {
    path: '/service',
    name: 'Service',
    component: () => import('../views/user/Service.vue'),
    meta:{
      show:false
    }
  },
  {
    path: '/setting',
    name: 'Setting',
    component: () => import('../views/user/Setting.vue'),
    meta:{
      show:false
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
