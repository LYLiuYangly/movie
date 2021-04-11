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
### 反向代理配置
vue.config.js
```
export default{
  devServe:{
    proxy:{
      '/ajax':{
        target:'https://m.maoyan.com',
        changeOrigin:true
      }
    }
  }
}
```
### axios 
main.js 中引入axios
```
Vue.prototype.axios=axios;

mounted(){
  this.axios({
    
  }).then(res=>{
    
  })
}
```
### 城市数据,修改数据排列
```
[
  {
    index:'A',
    list:[{
      nm:'阿达',
      id:123
    }]
  },
  {
    index:'B',
    list:[{
      nm:'白金',
      id:123
    }]
  }
]
```
遍历数据
  根据每个数据的第一个字母 subString(0,1)
  如果List中有，添加到已有index中
    循环找到index===第一个字符
```
  array[j].list.push({nm:'nameCity',id:1341}]})
```
  否则新添加index
```
    array.push({index:newIndex,list:[{nm:'nameCity',id:1341}]});
```  
判断List中是否存在
 遍历List中每一个对象的index  === 第一个字母
    返回 true
 返回false
 
获取到的List 进行字母排序
```
array.sort(a,b)
if(a>b)   1  升序  A,B,C
a<b      -1
a=b       0
```
### 触摸事件
touchstart="handle(index)"
ref获取DOM 
parentNode.scrollTop=h2[index].offsetTop
### 过滤器
图片大小
```
Vue.filter('setWH',(url,arg)=>{
  return url.replace(/w\.h/,arg)
})
```

### 搜索
watch 持续侦听 输入message的变化 ，每次变化 获取json数据

### 防抖-频繁请求
axios实现---对请求进行cancelToken设置
```
验证上一个请求是否结束
~function(){
  if(typeof that.source === 'function'){
    //没有结束就关闭
    that.source(that.canMsg)
  }
}
axios.get('url',{
  params:{
    id:1
  },
  cancelToken: new axios.CancelToken(c=>{
    this.source=c
  })
}).then(res=>{
  
}).catch(err=>{
  if(axios.isCancel(err)){
    console.log('Request canceled', err.message) //请求如果取消，返回取消的message
  }else{
    console.log( erre) //其他错误
  }
})
```