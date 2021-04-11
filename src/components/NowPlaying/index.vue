<template>
  <div class="movie_body">
  		<ul>
  			<li v-for='nowMovie in nowMovieList' :key='nowMovie.id'>
  				<div class="pic_show"><img :src="nowMovie.img | setWH(64.89)"></div>
  				<div class="info_list">
  					<h2>{{nowMovie.nm}}</h2>
  					<p><span class="person">{{nowMovie.wish}}</span> 人想看</p>
  					<p>主演: {{nowMovie.star}}</p>
  					<p>{{nowMovie.rt}}</p>
  				</div>
  				<div class="btn_pre">
  					{{nowMovie.preShow ? '预售':'购买'}}
  				</div>
  			</li>
  		</ul>
  	</div>
  </div>
</template>

<script>
  export default{
    name:'nowPlaying',
    data(){
      return {
        nowMovieList:[]
      }
    },
    mounted(){
      var that=this
      this.axios.get("/ajax/movieOnInfoList").then(res=>{
        console.log(res.data.movieList)
        that.nowMovieList=res.data.movieList
      })
    }
  }
</script>

<style scoped>
  .movie_body{ flex:1; overflow:auto;}
  .movie_body ul{ margin:0 12px; overflow: hidden;}
  .movie_body ul li{ margin-top:12px; display: flex; align-items:center; border-bottom: 1px #e6e6e6 solid; padding-bottom: 10px;}
  .movie_body .pic_show{ width:64px; height: 90px;}
  .movie_body .pic_show img{ width:100%;}
  .movie_body .info_list { margin-left: 10px; flex:1; position: relative;}
  .movie_body .info_list h2{ font-size: 17px; line-height: 24px; width:150px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
  .movie_body .info_list p{ font-size: 13px; color:#666; line-height: 22px; width:200px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
  .movie_body .info_list .grade{ font-weight: 700; color: #faaf00; font-size: 15px;}
  .movie_body .info_list img{ width:50px; position: absolute; right:10px; top: 5px;}
  .movie_body .btn_mall , .movie_body .btn_pre{ width:47px; height:27px; line-height: 28px; text-align: center; background-color: #f03d37; color: #fff; border-radius: 4px; font-size: 12px; cursor: pointer;}
  .movie_body .btn_pre{ background-color: #3c9fe6;}
</style>
