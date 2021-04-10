import Vue from 'vue'
import VueRouter from 'vue-router'
import movieRouter from './Movie'
import cinemaRouter from './Cinema'
import mineRouter from './Mine'

Vue.use(VueRouter)

const routes = [
  movieRouter,
  cinemaRouter,
  mineRouter,
  {
    path: '/movie',
    redirect: '/movie/nowPlaying'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes 
})

export default router
