
<template>
    <div class="main-box films">
        <films-bar :type="type" :changeType="changeType"></films-bar>
        <films-content :type="type"></films-content>
        <back-top></back-top>
    </div>
</template>

<script>
import FilmsBar from './FilmsTab'
import FilmsContent from './FilmsContent'
import BackTop from '../../commons/backTop/backTop'
export default {
  name:'films',
  data () {
      return {
          type:'now-playing'
      }
  },
  methods: {
      changeType (type) {
          this.type = type
      }
  },
  components:{
      FilmsBar,FilmsContent,BackTop
  }
}
</script>
<style lang="scss" scoped>
    .films{
            padding-left: 15px;
            padding-right: 15px;
            background-color: #f9f9f9;
            height: 100%;
    }
</style>


