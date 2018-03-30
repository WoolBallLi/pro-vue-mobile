<template>
  <div class="main-box app-login">
      <button @click="LOGIN">登陆</button>
  </div>
</template>

<script>

import {LOGIN} from '../../../store/particles/const'
import {mapActions} from 'vuex'
export default {
  name:'app-login',
  methods:{
      LOGIN () {
          this.$store.dispatch(LOGIN,()=>{
              this.$router.replace({name:'mine'})
          })
      }
  }
}
</script>

<style lang="scss" scoped>

</style>


