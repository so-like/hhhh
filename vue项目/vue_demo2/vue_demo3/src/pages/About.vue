<template>
  <div>
      <h2>about</h2>
      <p>{{msg}}</p>
      <!-- 通过$route来匹配路由中的参数 -->
      <p>这是通过路由link传来的参数{{$route.params.id}}</p>
      <input type="text">
  </div>
</template>

<script>
export default {
  props:{
    msg:String
  },
  data() { 
    return {

    }
  }
 }
</script>

<style>

</style>