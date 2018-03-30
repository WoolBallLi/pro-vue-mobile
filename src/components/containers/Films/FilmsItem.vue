
<template>
    <router-link :to="{name:'detail',params:{id:info.id}}" class="films-item" tag="div">
        <img  :src="info.poster.thumbnail" alt="">


        <div class="info">
            <div class="title">
                <h3>{{info.name}}</h3>
                <p>
                    <span v-if="type==='now-playing'" class="grade">{{info.grade}}</span>
                    <i class="fa fa-angle-right"></i>
                </p>
            </div>
            <p class="desc">{{info.intro || '暂无描述'}}</p>
            <p  v-if="type==='now-playing'" class="cinema">
                {{info.cinemaCount}}家影院上映
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {{info.watchCount}}人购票
            </p>
            <p v-else class="time">
                {{info.premiereAt | date(true)}}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {{info.premiereAt | day}}
            </p>
        </div>
    </router-link>
</template>

<script>
export default {
  name:'films-item',
  props:['info','type']
}
</script>
<style lang="scss">
    .films-item{
        width: 100%;
        padding: 20px 0;
        border-bottom: dashed 1px #c9c9c9;
        cursor: pointer;
        display: flex;
        align-items: center;
        align-content: shrink;
        img{
            width: 0.6rem;
            height: auto;
            flex-shrink: 0;flex-grow: 0;
        }
        .info{
            flex-grow:1;flex-shrink:1;
            padding-left: 15px;
            .title{
                display: flex;justify-content: space-between;
                
                
                h3 {
                    font-size: 16px;
                    line-height: 32px;
                    color: #000;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    font-weight: normal;
                }

                p{
                    font-size: 16px;
                    color: #fc7103;
                    padding-right: 20px;
                    i{
                        color: #999;
                    }
                }


            }
            .desc{
                    height: 24px;
                line-height: 24px;
                color: #8e8e8e;
                font-size: 12px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                width: 100%;
                display: inline-block;
            }

            .cinema,.time{
                line-height: 24px;
                color: #8e8e8e;
                font-size: 12px;
            }

            .time{
                color:#ffb375;
            }
        }
    }
</style>


