<template>
    <div class="main-box detail">

        <img width="100%" :src="film.cover.origin" alt="">

        <div class="desc-box">影片介绍</div>

        <div class="content">
            <p class="content-info">
                <span>导&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演:</span><span>{{film.director}}</span>
            </p>
            <p class="content-info">
                <span>主&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演:</span>
                <span v-for="(actor,i) in film.actors" :key="i">
                    {{actor.name}}|
                </span>
            </p>
            <p class="content-info">
                <span>地区语言:</span><span>{{film.language}}</span>
            </p>
            <p class="content-info">
                <span>类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型:</span><span>{{film.category}}</span>
            </p>
            <p class="content-info">
                <span>上映时间：</span><span>{{film.premiereAt | date(true)}}</span>
            </p>


            <p class="content-intro">{{film.synopsis}}</p>
        </div>


        <div class="operation"><button class="order-btn">立即购票</button></div>

    </div>
</template>

<script>

import axios from 'axios'
import {mapMutations} from 'vuex'
import {SETTITLE} from '../../../store/particles/const'

export default {
  name:'detail',
  props:['id'],
  data () {
      return {
          film:{
              cover:{}
          }
      }
  },
  methods:{
      getFilmInfo(){
            axios.get(this.$root.config.host+'mz/v4/api/film/'+this.id,{
                params:{__t:Date.now()}
            }).then(res => {
                this.film = res.data.data.film
                //更改store中的title
                this[SETTITLE](this.film.name)             
            })
      },
      ...mapMutations([SETTITLE])
  },
  created () {
      this.getFilmInfo()
  },
  mounted () {
      //path
    //   this.$route.params.id
      //query
    //   this.$route.query.name
  }
}
</script>

<style lang="scss" scoped>
    .detail {
        color: #333;
        .desc-box{
                margin: 16px auto;
                border-left: 16px solid RGB(228, 200, 156);
                font-size: 16px;
                padding-left: 4px;
        }

        .content-info{
            height: 18px;
            overflow: hidden;
            margin-bottom: 10px;
            padding-left: 20px;
        }

        .content-intro{
                text-overflow: ellipsis;
                margin-bottom: 80px;
                padding-left: 20px;
                padding-right: 20px;
        }

        .operation{
                position: fixed;
                left: 0;
                bottom: 20px;
                width: 100%;
                text-align: center;

                .order-btn{
                    font-size: 14px;
                    min-width: 156px;
                    height: 36px;
                    line-height: 36px;
                    border: none;
                    background-color: #fe8233;
                    padding: 0;
                    margin: 0;
                    border-radius: 18px;
                    color: #fff;
                    -webkit-transition: 0.5s ease;
                }
        }
    }
</style>

