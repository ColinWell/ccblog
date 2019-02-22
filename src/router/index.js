import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/page/home/home'
import PCenter from '@/page/pcenter/pcenter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PCenter',
      component: PCenter
    }
  ]
})
