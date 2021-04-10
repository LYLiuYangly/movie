# movie

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 配置路由
创建单页面路由  router/Cinema/index.js
Vue 引入组件会默认 index名称的组件
```
export default{
  path:'/cinema',
  component:()=>import('@/views/Cinema')
}
```
@ 表示 src路径
```
import cinemaRouter from './Cinema'
new VueRouter({
  mode:'history' 路由模式
  
  routes:[
    cinemaRouter,
  ]
})
```
### 移动端处理
index.html 
viewport 中   user-scalable=no缩放处理

### 创建公共组件
Tabbar/index.vue 底部组件
Header/index.vue 顶部组件

设置 name 属性，可以在vue-devtool中方便调试
```
export default{
  name:'movie'
}
```
### Tabbar路由切换
```
<router-link  to='/movie' tag='li'>
```
router-link 选择变色
```
li.router-link-active{
  color:red;
}
```
###  Header父子通信-props
Header 绑定title进行切换
```
export default{
  props:{
    title:{
      type:String,
      default:'电影'
    }
  }
}
<Header title='我的'>
```
### 城市,电影,搜索组件
```
components/City/index.vue
components/NowPlaying
components/ComingSoon
components/Search
```
配置路由--子路由不用加'/'
```
children:[
  {
   path:'',
   component:()=>import('@/components/..')
  },
  {
    path:'/movie',
    redirect:'/movie/nowPlaying'
  }
]
```
