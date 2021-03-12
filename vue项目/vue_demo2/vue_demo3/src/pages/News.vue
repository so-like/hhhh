<template>
  <div>
      <ul>
          <li v-for="(news,index) in newsArr" :key="index">{{news}}</li>
      </ul>
  </div>
</template>

<script>
export default {
  data() { 
    return {
        newsArr:['nes001','nes002','nes003'],
    }
  }
 }
</script>

<style>

</style>
