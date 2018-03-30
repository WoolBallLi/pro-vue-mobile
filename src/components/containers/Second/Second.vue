
<template>
    <div class="main-box second">
        123
        <router-link :to="{name:'secondOne'}">secondOne</router-link>
        <router-link :to="{path:'/second/secondTwo'}" >secondTwo</router-link>
        
        <hr>
        <router-view></router-view>

        <hr/>
        {{num}}
        <my-button>提交</my-button>
        <my-button @click.native="num++" type="danger">删除</my-button>
        <my-button type="danger" disabled>购买</my-button>
        <!-- <el-button type="danger" :loading="false" round>加载中</el-button> -->
    </div>
</template>

<script>



export default {
  name:'second',
  data () {
      return {num:1}
  }
}
</script>
<style lang="scss" scoped>
    a{
        color: #333;
    }
</style>


