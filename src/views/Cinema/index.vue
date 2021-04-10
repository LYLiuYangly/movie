<template>
  <div>
    
    <Header title='影院'></Header>
    
    <ClList></ClList>
    
    <Tabbar></Tabbar>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import Tabbar from '@/components/Tabbar'
  import ClList from '@/components/ClList'
  export default{
    name:'Cinema',
    components:{
      Header,
      Tabbar,
      ClList
    }
  }
</script>

<style>
</style>
