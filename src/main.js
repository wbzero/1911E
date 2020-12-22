import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import moment from 'moment/moment'
import { Area } from 'vant';

Vue.use(Area);

Vue.filter('moment', function (value, formatString) {
  formatString = formatString || 'YYYY/MM/DD HH:mm:ss';
  return moment(value * 1000).format(formatString); // value可以是普通日期 20170723
  //return moment.unix(value).format(formatString); // 这是时间戳转时间
});
Vue.filter('times', function (value, formatString) {
  formatString = formatString || 'YYYY.MM.DD HH:mm';
  return moment(value * 1000).format(formatString); // value可以是普通日期 20170723
  //return moment.unix(value).format(formatString); // 这是时间戳转时间
});
Vue.use(ElementUI);
Vue.use(Vant);
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')