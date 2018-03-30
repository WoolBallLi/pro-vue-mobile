<template>
    <div class="main-box app-shop">
        <div class="title">—&nbsp;好货精选&nbsp;—</div> 
        

        <div class="items-list"    
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10"
        >
            <good-item v-for="good in goods" :key="good.id" :info="good"></good-item>
        </div>
            <!-- <div class="films-content"
                v-infinite-scroll="loadMore"
                infinite-scroll-disabled="loading"
                infinite-scroll-distance="10"
            >       

            </div> -->
        <back-top></back-top>
    </div>
</template>

<script>

import BackTop from '../../commons/backTop/backTop'
import {GET_GOODS} from '../../../store/shop/const'
import {mapState,mapActions} from 'vuex'
import GoodItem from './ShopGoodItem'


export default {
  name:'app-shop',
  data () {
      return {
          loading:false
      }
  },
  computed:{
      ...mapState({
          goods:state=>state.shop.goods
      })
  },
  methods:{
      ...mapActions([GET_GOODS]),
     getGoods (callback) {
         this[GET_GOODS](callback)
     },
     loadMore () {
         this.loading = true
         this.getGoods((hasMore)=>{
             if(!hasMore){
                 console.log('没有更多了...')
             }

             this.loading = false
         })
     }
  },
  components:{
      GoodItem,BackTop
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
  
    .app-shop {

        .title {
            height: 33px;
            background-color: #f2f2f2;
            line-height: 33px;
            font-size: 13px;
            text-align: center;
            color: #323232;
            margin-bottom: -5px;
        }

        .items-list{
            background-color: #f2f2f2;
            min-height: 510px;
            padding-right: 9px;
            padding-left: 9px; 
            display: flex;
            flex-flow: row wrap;
        }
    }

</style>

