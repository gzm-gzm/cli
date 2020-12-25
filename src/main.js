import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import http from './http/axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.prototype.$http = http;
Vue.use(ElementUI);

Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  // 修改title名称
  if (to.meta.title) {
    document.title = to.meta.title
  } else {
    next()
  }
  console.log(to.meta.requireAuth, 'to.meta.requireAuth');
  if (to.meta.requireAuth) { //判断路由meta.requireAuth为true的时候(在路由设置的时候 如果是undefined就是没有在路由设置)
    if (JSON.parse(localStorage.getItem("login")) == null) { //在判断缓存如果为空的时候就要登录
      console.log('没有登录')
      router.push({ path: '/login', query: { redirect: to.fullPath } })
      next()
    } else {
      console.log('登录成功');
      next()
    }
  }
  else {
    if (to.name === 'login' && JSON.parse(localStorage.getItem("login"))) {
      router.push('/')
    } else {
      next()
    }
  }
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
