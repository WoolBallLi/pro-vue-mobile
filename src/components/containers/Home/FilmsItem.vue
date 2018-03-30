
<template>
    <div @click="toDetail(film.id,film.name)" class="app-home-filmsitem">

        <!-- <router-link :to="{name:'detail',params:{id:film.id}}"> 在使用的 -->
        <!-- <router-link :to="{name:'detail',params:{id:film.id},query:{name:film.name}}"> -->
        <!-- <router-link to="/detail/123?name=''"> -->

            <img width="100%" :src="film.cover.origin" class="">

            <div v-if="type==='hot'" type="hot" class=" info-box">
                <div class="film-info">
                    <div class="title">{{film.name}}</div>
                    <div class="desc">{{film.cinemaCount}}家影院上映 {{film.watchCount}}人购票</div>
                </div>
                <div class="grade">{{film.grade}}</div>
            </div>

            <div v-else type="coming" class=" info-box">
                <div class="film-info">
                    <div class="title">{{film.name}}</div>
                </div>
                <div class="date">{{film.premiereAt | date(true)}}</div>
            </div>

        <!-- </router-link> -->
    </div>
</template>

<script>
export default {
  name:'app-home-filmsitem',
  props:['film','type'],
  methods:{
      toDetail (id,name) {
        //   this.$router.push({name:'detail',params:{id},query:{name}})
          this.$router.push({name:'detail',params:{id}})
        //不会做历史记录
        //   this.$router.replace({name:'detail',params:{id}})
      }
  }
}
</script>
<style lang="scss" scoped>
.app-home-filmsitem{
    margin: 0 17px 17px 17px;
    background-color: #f9f9f9;
    -webkit-box-shadow: 0.5px 0.5px 1px #a8a8a8;
    -moz-box-shadow: 0.5px 0.5px 1px #a8a8a8;
    box-shadow: 0.5px 0.5px 1px #a8a8a8;
    cursor: pointer;

    .info-box{
        padding: 13px;
        display: flex;justify-content: space-between;align-items: center;
    }

    .info-box[type='hot'] .film-info,.info-box[type='coming'] .film-info{
        font-size: 12px;
        color: #333;

        .desc{color: #999;}
    }

    .info-box[type='hot'] .grade{
        color: #f78360;
        font-size: 18px;
    }
    .info-box[type='coming'] .date{
        font-size: 10px;
        color: RGB(245, 162, 125);
        margin-right: 20px;
    }
}
</style>


