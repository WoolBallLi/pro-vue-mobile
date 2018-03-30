import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/containers/Home/Home.vue'
import Films from '../components/containers/Films/Films.vue'
import Detail from '../components/containers/Detail/Detail.vue'
import NotFound from '../components/containers/NotFound/NotFound.vue'
import Position from '../components/containers/Position/Position.vue'
import Login from '../components/containers/Login/Login.vue'
import Mine from '../components/containers/Mine/Mine.vue'
import Shop from '../components/containers/Shop/Shop.vue'
import ShopDetail from '../components/containers/ShopDetail/ShopDetail.vue'
import ShopCar from '../components/containers/ShopCar/ShopCar.vue'

import Second from '../components/containers/Second/Second.vue'
import SecondOne from '../components/containers/Second/SecondOne.vue'
import SecondTwo from '../components/containers/Second/SecondTwo.vue'

//全局注册插件
Vue.use(Router)


import store from '../store'
let router =  new Router({
  // mode:'history',
  routes: [//路由表
    // {path:'',component:Home},//默认路由
    {path:'/',redirect:'/home'},//重定向
    {
      path:'/home',
      name:'home',
      component:Home
    },
    {
      path:'/films',
      name:'films',
      component:Films
    },
    
    {
      path:'/second',
      name:'second',
      component:Second,
      redirect:{name:'secondOne'},
      children:[
        // {path:'',redirect:'secondOne'},
        {path:'secondOne',name:'secondOne',component:SecondOne},
        {path:'secondTwo',name:'secondTwo',component:SecondTwo}
      ]
    },
    {
      path:'/detail/:id',
      name:'detail',
      component:Detail,
      props:true,
      // beforeEnter: (to, from, next) => {
      //   console.log('马上要进入到详情页了')
      //   next()
      // }
    },
    {
      path:'/position',name:'position',component:Position
    },
    {
      path:'/mineinfo',name:'mineinfo',redirect:to=>{
        //判断是否登陆...
        let {username} = store.state.particles.userInfo
        return {name:username?'mine':'login'}
      }
    },
    {
      path:'/login',name:'login',component:Login
    },
    {
      path:'/mine',name:'mine',component:Mine
    },
    {
      path:'/shop',name:'shop',component:Shop
    },
    {
      path:'/shopcar',name:'shopcar',component:ShopCar
    },
    {
      path:'/shopdetail/:id',name:'shopdetail',component:ShopDetail,props:true
    },
    {
      path:'/404',name:'404',component:NotFound
    },
    {
      path:'**',redirect:{name:'404'}
    }
  ]

})

// router.beforeEach((to, from, next) => {
//   console.log('router is changed',to,from)
//   next()
// })


export default router
