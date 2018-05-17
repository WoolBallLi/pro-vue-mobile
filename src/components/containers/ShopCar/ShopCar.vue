<template>
    <div class="main-box app-shop-car">
      
      <ul>
          <li v-for="good in cars" :key="good.id">
              <div class="left name">
                  {{good.name}}--{{good.price | money}}
              </div>
              <div class="right">
                   <button @click="CONSTROL_CAR_GOODS({
                        id:good.id,type:-1
                    })">-</button>
                    <span >{{good.num}}</span>
                    <button @click="CONSTROL_CAR_GOODS({
                        id:good.id,type:1
                    })">+</button>
              </div>
          </li>
      </ul>
        <p>
            总件数：{{all_info.all_num}}；总价钱：{{all_info.all_price | money}}；
        </p>
    </div>
</template>

<script>

import {mapState,mapMutations,mapGetters} from 'vuex'
import {CONSTROL_CAR_GOODS} from '../../../store/shop/const'


export default {
  name:'app-shop-car',
  data () {
      return {
        
      }
  },
  computed: {
    ...mapState({
        cars:state=>state.shop.cars
    }),
    ...mapGetters(['all_info'])
  },
  methods:{
   ...mapMutations([CONSTROL_CAR_GOODS])
  },
  mounted () {
      console.log(this)
  }
}
</script>

<style lang="scss" scoped>
  
    div{
        font-size: 18px;
        background: #fff;
    }
p{
    margin-top: 10px;
    background: aqua;
}
</style>

