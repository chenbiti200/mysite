import Vue from 'vue'
import Router from 'vue-router'

import film from '@/components/film/film'
import cinema from '@/components/cinema/cinema'
import discount from '@/components/discount/discount'
import me from '@/components/me/me'
// 这个除了 index用. 其他的使用 都是@ 这样代表src 这个主目录

Vue.use(Router)

export default new Router({
  routes: [
  // 这个就是路由啦 然后就是配置路由

    {
      path: '/',
      redirect:"film"
      // 
      // name: 'HelloWorld',
      // component: HelloWorld
    },
    {
      path:"/film",
      name:"film",
      component:film
      // 这个就是他的组件 也就是引进过来的
    },
    {
      path:"/cinema",
      name:"cinema",
      component:cinema
      // 这个就是他的组件 也就是引进过来的
    },
    {
      path:"/discount",
      name:"discount",
      component:discount
      // 这个就是他的组件 也就是引进过来的
    },
    {
      path:"/me",
      name:"me",
      component:me
      // 这个就是他的组件 也就是引进过来的
    }



    // 然后这个就是配置里面的路由的 都是在这里管理
  ]
})
