<template>
    <div class="main-box app-position">

        <div class="city-box">
            <p>GPS定位你所在的城市</p>
            <ul class="city-list">
                <li class="city-item now">北京</li>
            </ul>
        </div>
        <div class="city-box">
            <p>热门城市</p>
            <ul class="city-list">
                <li @click="getCity(hot)" v-for="(hot,i) in hots" :key="i" class="city-item">{{hot}}</li>
            </ul>
        </div>

    </div>
</template>
<script>
import {mapMutations} from 'vuex'
import { SETPOSITION } from '../../../store/particles/const'
export default {
    name:'app-position',
    data () {
        return {
            hots:['北京','上海','广州','深圳']
        }
    },
    methods:{
        getCity (city) {
            this.$store.commit(SETPOSITION,city)
            localStorage.city = city
            this.$router.push({name:'home'})
        }
    }
}
</script>

<style lang="scss" scoped>
    .app-position {
            p{  
                padding-left: 15px;
                font-size: 14px;
                line-height: 40px;
                background-color: #ebebeb;
                margin-top: -1px;
            }
        .city-list{
            margin: 0;
            min-width: 320px;
                background-color: #fff;
            
            .city-item{
                    width: 25%;
                    font-size: 16px;
                    line-height: 46px;
                    text-align: center;
                    display: inline-block;
                    cursor: pointer;
                    color: #838383;
                    border-bottom: #ebebeb 1px solid;

                &.now{
                        color: #e2941a;
                }
            }
        }
    }
</style>

