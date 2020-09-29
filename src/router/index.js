import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/index.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home', // 主页面
    component: Home,
    meta: {
      show: true
    }
  },
  {
    path: '/login', // 登录页面
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: {
      show: false
    }
  },
  {
    path: '/lessone', // 课程页面
    name: 'Lessone',
    component: () => import('../views/lessone/index.vue'),
    meta: {
      show: true
    }
  },
  {
    path: '/course', // 约课记录页面
    name: 'Course',
    component: () => import('../views/course/index.vue'),
    meta: {
      show: true
    }
  },
  {
    path: '/coach', // 约课记录里的一对一辅导
    name: 'coach',
    component: () => import('../views/course/Coach.vue'),
    meta: {
      show: false
    }
  },
  {
    path: '/practice', // 练习页面
    name: 'Practice',
    component: () => import('../views/practice/index.vue'),
    meta: {
      show: true
    }
  },
  {
    path: '/user', // 我的页面
    name: 'User',
    component: () => import('../views/user/index.vue'),
    meta: {
      show: true
    }
  },

  // 学习日历
  {
    path: '/StudyCalendar',
    name: 'StudyCalendar',
    component: () => import('../views/home/components/StudyCalendar.vue'),
    meta: {
      show: false
    }
  },

  // 名师阵容跳转
  {
    path: '/tearch',
    name: 'tearch',
    component: () => import('../views/home/components/Tearch.vue'),
    meta: {
      show: false
    }
  },
  // 精品课程
  {
    path: '/Coursedetail',
    name: 'Coursedetail',
    component: () => import('../views/home/components/Coursedetail.vue'),
    meta: {
      show: false
    }
  },
  // 讲师详情
  {
    path: '/Lecturer',
    name: 'Lecturer',
    component: () => import('../views/home/components/Lecturer.vue'),
    meta: {
      show: false
    }
  },
  {
    path: '/study',
    name: 'study',
    component: () => import('../views/home/components/Study.vue'),
    meta: {
      show: false
    }
  },
  {
    path: '/video',
    name: 'Video',
    component: () => import('../views/home/components/Video.vue'),
    meta: {
      show: false
    }
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router