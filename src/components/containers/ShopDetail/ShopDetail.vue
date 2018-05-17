<template>
    <div class="main-box app-shop-detail">
        <img width="100%" :src="info.skuList[0].images[0]" alt="">
        <div>
            <p>{{info.masterName}}</p>
            <p>
                <button @click="num-=num<1?0:1">-</button>
                <span class="price">{{num}}</span>
                <button @click="num++">+</button>
            </p>
            <p>
                <button class="btn" @click="CONSTROL_CAR_GOODS({
                id,
                price:info.skuList[0].price,
                name:info.masterName,
                num,
                type:1})">
                    加入购物车
                </button>
            </p>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { mapMutations } from "vuex";
import { CONSTROL_CAR_GOODS } from "../../../store/shop/const";
export default {
  name: "app-shop-detail",
  props: ["id"],
  data() {
    return {
      info:{
        skuList:{
          images:{}
        }
      },
      num: 0
    };
  },

  methods: {
    getInfo() {
      axios
        .get(this.$root.config.host + "shop/api/item", {
          params: { id: this.id }
        })
        .then(({ data }) => {
          console.log(data);
          this.info = data.data;
        });
    },
    ...mapMutations([CONSTROL_CAR_GOODS])
  },
  created() {
    this.getInfo();
  },
  components: {},
  mounted() {}
};
</script>

<style lang="scss" scoped>
.app-shop-detail {
  .price {
    display: inline-block;
    margin: 0px 15px;
  }
  div {
    width: 100%;
    height:100%;
    background: #fff;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    p {
    font-size:18px;

      button {
        margin-top: 10px;
        margin-bottom: 10px;
      }
    }
    .btn{
      width: 3rem;
      height: 0.5rem;
      background: orange;
      border-radius: 0.3rem;
        margin-top: 10px;
        margin-bottom: 10px;
    }
  }
}
</style>

