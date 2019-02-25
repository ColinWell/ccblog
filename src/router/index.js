import Vue from 'vue'
import Router from 'vue-router'
//import Touch from "../../utils/touch.js";
import HelloWorld from '@/components/HelloWorld'
import Home from '@/page/home/home'
import PCenter from '@/page/pcenter/pcenter'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        component: resolve => require(['../page/home/home.vue'], resolve),
        meta: { headTitle: '自述文件' },
    },
		{
      path: '/pcenter',
      name: 'PCenter',
      component: PCenter
    },
		{
		  path: '/article/detail',
		  name: 'detail',
		  component: resolve => require(['../page/article/detail.vue'], resolve),
		},
		{
		    path: '/404',
		    component: resolve => require(['../page/404.vue'], resolve),
		    meta: { title: '404' }
		},
		{
		    path: '*',
		    redirect: '/404'
		}
  ]
})
