<template>
    <div class="app-shop-item">

        <router-link :to="{name:'shopdetail',params:{id:info.id}}" tag="div" class="content">
            <img width="100%" :src="info.skuList[0].image+'?x-oss-process=image/resize,m_fill,h_300,w_300'" alt="">
        
            <p class="desc"> {{info.masterName}}</p>

            <p class="info">
                <span class="price">{{info.skuList[0].price | money}}</span>
                <span class="sale">已售{{info.skuList[0].salesCount}}</span>
            </p>
        </router-link>

    </div>
</template>

<script>


export default {
  name:'app-shop-item',
  props:['info'],
  data () {
      return {
         
      }
  },
  methods:{
    
  },
  created () {
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
  .app-shop-item{
      width: 50%;
      padding: 5px 2.5px 0px;
    //   display: inline-block;
       
       .content {
            background: #fff;
       }
      .sale {
          display: inline-block;margin-left: 15px;
          font-size: 9px;
        color: #999;
        margin-left: 15px;
      }

      .desc {
          font-size: 12px;
            height: 34px;
            color: #323232;
            text-align: left;
            padding-left: 6px;
      }

      .price {
          font-size: 13px;
            color: #ff5000;
            padding-left: 6px;

      }
  }
</style>

