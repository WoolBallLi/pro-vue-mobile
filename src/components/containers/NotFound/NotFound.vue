
<template>
    <div class="main-box not-found">
        <div class="content">
            <img src="/static/images/404.jpg" alt="">
            <p>这个页面，神秘失踪了…</p>
            <p>
                <span>不如</span><router-link  to="/home" >返回卖座电影首页</router-link><span>吧</span>
            </p>
        </div>
        
    </div>
</template>

<script>
export default {
  name:'not-found'
}
</script>
<style lang="scss" scoped>
    .not-found {
        .content{
            padding: 48px 72px;
            text-align: center;
            img{
                    max-width: 100%;
                margin-bottom: 10px;
            }
            a{
                    padding: 0 0.2em;
                    color: #cb885e;
                    text-decoration: underline;
            }
        }
    }
</style>


