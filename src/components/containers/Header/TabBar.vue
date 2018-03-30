<template>
  <div class="app-header-tabbar">
      <div class="tabbar-left">
        <div @click="toggleNav" class="nav-btn"><i class="fa fa-navicon"></i></div>
        <div class="nav-title">{{title}}</div>
      </div>
      <div class="tabbar-right">
        <router-link to="/position" tag="div" class="nav-city">{{city}}</router-link>
        <div class="nav-user"><i class="fa fa-user"></i></div>
      </div>
      <div  @click="toggleNav" class="mask" v-if="isNavShow"></div>
  </div>
</template>

<script>


import { GETPOSITION,SETTITLE,SETTITLEBYROUTE } from '@/store/particles/const'
import {mapState,mapActions,mapMutations} from 'vuex'

export default {
  name:'app-header-tabbar',
  props:['isNavShow','toggleNav'],
  mounted () {
    //初始化的时候根据路由判断title
     this[SETTITLEBYROUTE](this.$route)
    //全局路由钩子，监听路由变化后更改title
    this.$router.beforeEach((to, from, next) => {
      this[SETTITLEBYROUTE](to)
      next()
    })
    
  },
  computed: {
    ...mapState({
      'city':state=>state.particles.city,
      'title':state=>state.particles.title
    })
  },
  methods: {
    ...mapActions([GETPOSITION]),
    ...mapMutations([SETTITLE,SETTITLEBYROUTE])
  },
  created () {
    this[GETPOSITION]()
  }
}
</script>

<style lang="scss">

.app-header-tabbar{
    background: #282828;
    position: fixed;
    z-index: 500;
    top: 0;
    right: 0;
    left: 0;
    width: auto;
    height: 50px;
    line-height: 50px;
    overflow: hidden;

    display: flex;justify-content: space-between;

    .tabbar-left,.tabbar-right{
      display: flex;align-items: center;
    }

    .nav-btn{
      width: 48px;
      text-align: center;
      border-right: 1px solid #222;
      box-shadow: 1px 0 1px #363636;
      color: #999;

    }
    .nav-title{
      padding: 0 1em;
      float: left;
      font-size: 14px;
      color: #efefef;
      text-overflow: ellipsis;
      white-space: nowrap;
      displdday: inline-block;
      overflow: hidden;
    }
    .nav-city{
          font-size: 14px;
          padding: 0 6px;
          color: #999;
    }
    .nav-user{
          font-size: 16px;
          width: 48px;
          text-align: center;
          color: #999;
    }

}

</style>

