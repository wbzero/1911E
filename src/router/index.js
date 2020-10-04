import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/index.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
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
    path: '/item',
    name: 'Item',
    component: () => import('../views/practice/Item.vue'),
    meta: {
      show: true
    }
  },
  {
    path: '/item2',
    name: 'Item2',
    component: () => import('../views/practice/Item2.vue'),
    meta: {
      show: true
    }
  },
  {
    path: '/item3',
    name: 'Item3',
    component: () => import('../views/practice/Item3.vue'),
    meta: {
      show: true
    }
  },
  {
    path: '/item4',
    name: 'Item4',
    component: () => import('../views/practice/Item4.vue'),
    meta: {
      show: true
    }
  },
  {
    path: '/item5',
    name: 'Item5',
    component: () => import('../views/practice/Item5.vue'),
    meta: {
      show: true
    }
  },
  {
    path: '/item6',
    name: 'Item6',
    component: () => import('../views/practice/Item6.vue'),
    meta: {
      show: true
    }
  },
  {
    path: '/item7',
    name: 'Item7',
    component: () => import('../views/practice/Item7.vue'),
    meta:{
      show:true
    },
      redirect: '/item7_1',
    children: [
      {

        path: '/item7_1',
        name: 'item7_1',
        component: () => import('../views/practice/itme7/item7_1.vue'),
      },
      {
        path: '/item7_2',
        name: 'item7_2',
        component: () => import('../views/practice/itme7/item7_2.vue'),
      },
      {
        path: '/item7_3',
        name: 'item7_3',
        component: () => import('../views/practice/itme7/item7_3.vue'),
      },
      {
        path: '/item7_4',
        name: 'item7_4',
        component: () => import('../views/practice/itme7/item7_4.vue'),
      },
      {
        path: '/item7_5',
        name: 'item7_5',
        component: () => import('../views/practice/itme7/item7_5.vue'),
      },
      {
        path: '/item7_6',
        name: 'item7_6',
        component: () => import('../views/practice/itme7/item7_6.vue'),
      },
      {
        path: '/item7_7',
        name: 'item7_7',
        component: () => import('../views/practice/itme7/item7_7.vue'),
      }

    ]
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/practice/Search.vue'),
    meta: {
      show: true
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
    path: '/appointment', // 约课记录里的一对一辅导中的预约课程
    name: 'appointment',
    component: () => import('../views/course/Appointment.vue'),
    meta: {
      show: false
    }
  },
  {
    path: '/search', // 约课记录里的一对一辅导中的搜索
    name: 'search',
    component: () => import('../views/course/Search.vue'),
    meta: {
      show: false
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
    
  {
    path: '/Currency', //我的余额
    name: 'Currency',
    component: () => import('../views/user/Currency.vue'),
    meta: {
      show: false
    }
  },
  {
    path: '/friends', // 我的关注
    name: 'Friends',
    component: () => import('../views/user/Friends.vue'),
    meta: {
      show: false
    }
  },
  {
    path: '/star', // 我的收藏
    name: 'Star',
    component: () => import('../views/user/Star.vue'),
    meta: {
      show: false
    }
  },
  {
    path: '/bill', // 课程订单
    name: 'Bill',
    component: () => import('../views/user/Bill.vue'),
    meta: {
      show: false
    }
  },
  {
    path: '/bills', //会员订单
    name: 'Bills',
    component: () => import('../views/user/Bills.vue'),
    meta: {
      show: false
    }
  },
  {
    path: '/billse', // 约课订单
    name: 'Billse',
    component: () => import('../views/user/Billse.vue'),
    meta: {
      show: false
    }
  },
  {
    path: '/coupon', //我的优惠券
    name: 'Coupon',
    component: () => import('../views/user/Coupon.vue'),
    meta: {
      show: false
    }
  },
  {
    path: '/card', //我的学习卡
    name: 'Card',
    component: () => import('../views/user/Card.vue'),
    meta: {
      show: false
    }
  },
  {
    path: '/diamond', // 开通会员
    name: 'Diamond',
    component: () => import('../views/user/Diamond.vue'),
    meta: {
      show: false
    }
  },
  {
    path: '/bell', // 消息通知
    name: 'Bell',
    component: () => import('../views/user/Bell.vue'),
    meta: {
      show: false
    }
  },
  {
    path: '/invition', //意见反馈
    name: 'Invition',
    component: () => import('../views/user/Invition.vue'),
    meta: {
      show: false
    }
  },
  {
    path: '/service', // 在线客服
    name: 'Service',
    component: () => import('../views/user/Service.vue'),
    meta: {
      show: false
    }
  },
  {
    path: '/setting', // 设置
    name: 'Setting',
    component: () => import('../views/user/Setting.vue'),
    meta: {
      show: false
    }
  },
  {
    path: '/info', //个人信息
    name: "Info",
    component: () => import('../views/user/Info.vue'),
    meta:{
      show:false
    }
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('../views/lessone/order.vue'),
    meta:{
      show:false
    }
  },

 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router