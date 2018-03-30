
<template>
    <div class="app-home-filmsbox">
        <app-films-item :type="info.type" :film="film" v-for="film in films" :key="film.id"></app-films-item>

        <div class="more-button" >更多{{info.title}}电影</div>
    </div>
</template>

<script>
import AppFilmsItem from './FilmsItem'
import axios from 'axios'
import {mapState} from 'vuex'
export default {
  name:'app-home-filmsbox',
  components:{AppFilmsItem},
  props:['info'],
  data () {
      return {
          films:[]
      }
  },
  methods:{
      getFilms () {
          axios.get(this.$root.config.host+'mz/v4/api/film/'+this.info.url,{
              params:{
                  __t:Date.now(),page:1,count:this.info.count,
                  city:this.city
              }
          }).then(res => {
              this.films = res.data.data.films
          })
      }
  },
  created () {
      this.getFilms()
  },
  computed: {
      ...mapState({
          city:state=>state.particles.city
      })
  }
}

</script>
<style lang="scss" scoped>

   .app-home-filmsbox{
       padding-top: 18px;
       margin-bottom: 10px;

       .more-button{
           width: 160px;
            height: 30px;
            border: 1px solid #aaa;
            border-radius: 15px;
            margin: 10px auto 30px;
            text-align: center;
            line-height: 30px;
            font-size: 12px;
            color: #616161;
            cursor: pointer;
       }
   } 

</style>


