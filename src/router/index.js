import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'  
import demo1 from '../pages/demo1/index.vue' 
import demo2 from '../pages/demo2/index.vue' 
import demo3 from '../pages/demo3/index.vue'
import demo4 from '../pages/demo4/index.vue'
import demo5 from '../pages/demo5/index.vue'
import demo6 from '../pages/demo6/index.vue'
import demo7 from '../pages/demo7/index.vue'
import demo8 from '../pages/demo8/index.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/demo1',
      name: 'demo1',
      component: demo1
    },
    {
      path: '/demo2',
      name: 'demo2',
      component: demo2
    },
    {
      path: '/demo3',
      name: 'demo3',
      component: demo3
    },
    {
      path: '/demo4',
      name: 'demo4',
      component: demo4
    },
    {
      path: '/demo5',
      name: 'demo5',
      component: demo5
    },
    {
      path: '/demo6',
      name: 'demo6',
      component: demo6
    },
    {
      path: '/demo7',
      name: 'demo7',
      component: demo7
    },
    {
      path: '/demo8',
      name: 'demo8',
      component: demo8
    },
  ]
})
