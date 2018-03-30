<template>
    <div class="main-box app-shop-detail">
       app-shop-detail-{{id}}
       <p>{{info.masterName}}</p>
        <p>
            <button @click="num-=num<1?0:1">-</button>
            <span class="price">{{num}}</span>
            <button @click="num++">+</button>
        </p>
        <p>
            <button @click="CONSTROL_CAR_GOODS({
                id,
                price:info.skuList[0].price,
                name:info.masterName,
                num,
                type:1})">
                加入购物车
            </button>
        </p>
    </div>
</template>

<script>

import axios from 'axios'
import {mapMutations} from 'vuex'
import {CONSTROL_CAR_GOODS} from '../../../store/shop/const'
export default {
  name:'app-shop-detail',
  props:['id'],
  data () {
      return {
         info:{},
         num:0
      }
  },

  methods:{
    getInfo () {
        axios.get(this.$root.config.host+'shop/api/item',{
            params:{id:this.id}
        }).then (({data}) =>{
            console.log(data)
            this.info = data.data
        })
    },
    ...mapMutations([CONSTROL_CAR_GOODS])
  },
  created () {
      this.getInfo()
  },
  components:{
     
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
  
    .app-shop-detail {
        padding-left:15px; 
        padding-right:15px; 
        .price{
            display:inline-block;
            margin: 0px 15px;
        }

        p{
            margin: 15px 0px;
        }
        
    }

</style>

