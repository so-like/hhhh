<template>
    <div>
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" placeholder="enter the name you search" v-model="searchName"/>
        <button @click="search">Search</button>
      </div>
    </section>
    </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  data() { 
    return {
      searchName:'',
    }
  },
  methods: {
    search(){
      const searchName = this.searchName.trim()
      // 发布消息 在上面引入pubsub-js
      PubSub.publish('search',searchName)
    }
  },
 }
</script>

<style>

</style>