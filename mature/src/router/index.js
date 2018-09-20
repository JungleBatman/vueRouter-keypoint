import Vue from 'vue'
import Router from 'vue-router'

import index from '@/components/index/index'
import first from '@/components/first/first'
import second from '@/components/second/second'

import third from '@/components/third/third'
import one from '@/components/third/chidren/one'
import two from '@/components/third/chidren/two'

import fourth from '@/components/fourth/fourth'
import one1 from '@/components/fourth/chidren/one'
import one11 from '@/components/fourth/chidren/children/one1'
import two11 from '@/components/fourth/chidren/children/two1'
import two1 from '@/components/fourth/chidren/two'
import one12 from '@/components/fourth/chidren/children/one2'
import two12 from '@/components/fourth/chidren/children/two2'

import fifth from '@/components/fifth/fifth'

Vue.use(Router)

export default new Router({
  routes: [
    //  首页
    {
      path: '/',
      name: 'index',
      component: index
    },
    //普通路径而已
    {
      path: '/first',
      name: 'first',
      component: first
    },
    //  动态传参
    {
      path: '/second/:id',
      name: 'second',
      component: second
    },
    //  有一层子路由的时候。
    {
      path: '/third',
      name:'third',
      redirect:'/third/two',
      component: third,
      children:[
        {
          path: "one",
          component: one
        },
        {
          path: "two",
          component: two
        }
      ]
    },
    //  有多层子子子路由的时候，。
    {
      path: '/fourth',
      component: fourth,
      redirect:'/fourth/two',
      children:[
        {
          path: "one",
          component: one1,
          redirect:'/fourth/one/two',
          children:[
            {
              path:"one",
              component:one11
            },
            {
              path:"two",
              component:two11
            }
          ]
        },
        {
          path: "two",
          component: two1,
          redirect:'/fourth/two/two',
          children:[
            {
              path:"one",
              component:one12
            },
            {
              path:"two",
              component:two12
            }
          ]
        }
      ]
    },
    //函数跳转路由
    {
      path: '/fifth',
      component: fifth,
    }
  ]
})
