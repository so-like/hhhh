<template>
  <div class="container">
    <Search/>
    <UsersMain/>
  </div>
</template>

<script>
import Search from './components/Search';
import Main from './components/Main'
export default {
    // 映射组件文件
    components:{
        Search,
        UsersMain:Main
    },
    data() { 
       return {
         
    }
  }
 }
</script>


<style>

</style>