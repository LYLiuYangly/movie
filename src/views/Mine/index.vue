<template>
  <div>
    <Header title='我的'></Header>
    Mine
    <Tabbar></Tabbar>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import Tabbar from '@/components/Tabbar'
  export default{
    name:'Mine',
    components:{
      Header,
      Tabbar
    }
  }
</script>

<style>
</style>
