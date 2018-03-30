
<template>
    <div class="swiper-container app-home-banner">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="billboard in billboards" :key="billboard.id"> 
                <img width="100%" :src="billboard.imageUrl" alt="..." :title="billboard.name">
            </div>
        </div>
    </div>
</template>

<script>
// http://blog.csdn.net/xdongll/article/details/75504365
// https://m.maizuo.com/v4/api/billboard/home?__t=1519782360567
// import $ from 'zepto'

import Swiper from 'swiper'
import axios from 'axios'
import {mapState} from 'vuex'
import {GET_BILLBOARDS} from '../../../store/home/const'
export default {
  name:'app-home-banner',
  methods:{
      getBillBoards(){
          this.$store.dispatch(GET_BILLBOARDS)
      }
  },
  computed: {
      ...mapState({
          billboards:state=>state.home.billboards
      })
  },
  created () {
      this.getBillBoards()
  },
  updated () {
      new Swiper('.app-home-banner',{
          loop:true
      })
  }
}
</script>
<style lang="scss">

</style>


