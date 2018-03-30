
<template>
    <div class="films-content"
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10"
    >       
       <films-item :type="type" v-for="film in films" :key="film.id" :info="film"></films-item>
    </div>
</template>

<script>
import { Toast } from 'mint-ui';
import axios from 'axios'
import FilmsItem from './FilmsItem'
export default {
  name:'films-content',
  props:['type'],
  data () {
      return {
          page:1,
          count:7,
          pre_url:this.$root.config.host+'mz/v4/api/film/',
          films:[],
          loading:false,
          hashMore:true
      }
  },
  methods: {
      getFilms () {
          if(!this.hashMore){
              //提示：没有更多数据了
              Toast({
                message: '没有更多数据了',
                position: 'bottom',
                duration: 1500
              });
              return ;
          }
          //提示：请稍等...
            let toast = Toast({
                message: '正在加载...',
                iconClass: 'fa fa-spinner fa-pulse',
                duration:-1
            });
          this.loading = true
          let {page,count,type} = this
          let url = this.pre_url+type         
          axios.get(url,{
              params:{page,count}
          }).then(res => {
              console.log(res.data)
              toast.close()
              this.films = this.films.concat(res.data.data.films)
              this.hashMore = Boolean(!(res.data.data.page.total == res.data.data.page.current))
              this.page += this.hashMore?1:0
              this.loading=false
          })
      },
      loadMore () {
          this.getFilms()
      },
      getInitFilms (type) {
          this.page = 1;
          this.hashMore = true;
          this.type = type;
          this.films = [];
          this.getFilms()
      }
  },
  components:{
      FilmsItem
  },
  watch: {
      type(newtype){
          console.log('newtype:'+newtype)
          this.getInitFilms(newtype)
      }
  }
}
</script>
<style lang="scss" scoped>
    .films-content {
        
    }
</style>


