/* eslint-disable */

import Vue from 'vue';
import VueRouter from 'vue-router';
import vueResource from 'vue-resource';

import App from './App';
import list from './views/list.vue';
import content from './views/content.vue';
import about from './views/about.vue';

Vue.use(VueRouter);
Vue.use(vueResource);

// 开启debug模式
Vue.config.debug = true;
// 让 vue-resource 使用 content-type urlencode 的格式进行ajax请求
Vue.http.options.emulateJSON = true

//2.0 router
const router = new VueRouter({
  // html5 history模式
  mode: 'history',
  routes: [
    // 动态路径参数 以冒号开头
    {
      path: '/list',
      name: 'list',
      component: list
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/content',
      name: 'content',
      component: content
    },
    {
      // 覆盖所有条件, 默认指向首页
      path: '*',
      redirect: '/list'
    }
  ]
});

//替换 router.start
export default new Vue({
  el: '#app',
  router,
  render: h => h(App)
});

