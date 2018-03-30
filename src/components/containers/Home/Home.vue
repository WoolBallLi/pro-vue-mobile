
<template>
    <div class="main-box home">
        <app-banner></app-banner>
        <!-- 电影盒子 -->
        <app-films-box :info="filmsbox.info" v-for="filmsbox in filmsboxs" :key="filmsbox.id"></app-films-box>
    </div>
</template>

<script>
import AppBanner from './Banner'
import AppFilmsBox from './FilmsBox'

export default {
  name:'home',
  data () {
      return {
          filmsboxs:[
              {id:1,info:{url:'now-playing',type:'hot',count:5,title:'正在热映'}},
              {id:2,info:{url:'coming-soon',type:'coming',count:3,title:'即将上映'}}
          ]
      }
  },
  components:{AppBanner,AppFilmsBox}
}
</script>
<style lang="scss">

</style>


