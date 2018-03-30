
<template>
    <div class="films-bar">   
        <div @click="changeType('now-playing')" class="bar" :class="{active:type==='now-playing'}">正在热映</div>
        <div @click="changeType('coming-soon')" class="bar" :class="{active:type==='coming-soon'}">即将上映</div>
    </div>
</template>

<script>


export default {
  name:'films-bar',
  props:['type','changeType']
}
</script>
<style lang="scss" scoped>
    .films-bar {
        height: 46px;
        margin: 0 auto;
        border-bottom: solid #fe6e00 1px;
        overflow: hidden;
        
        .bar{
            float: left;
            width: 50%;
            height: 100%;
            text-align: center;
            font-size: 16px;
            line-height: 46px;
            color: #6a6a6a;
            cursor: pointer;

            &.active{
                color: #fe6e00;
                border-bottom: solid;
            }
        }
    }
</style>


