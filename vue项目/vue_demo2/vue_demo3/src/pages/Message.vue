<template>
  <div>
      <ul>
          <li v-for="message in messages" :key="message.id">
              <!-- <a href="#">{{message.title}}</a> -->
              <router-link :to="`/home/message/file/${message.id}`">{{message.title}}</router-link>
              <button @click="push(message.id)">push查看</button>
              <button @click="replace(message.id)">replace查看</button>
          </li>
          <button @click="$router.back()">回退</button>
      </ul>
      <hr>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() { 
    return {
        messages:[]
    }
  },

//   执行异步代码
  mounted() {
      setTimeout(()=>{
          const messages = [{
            id:1,
            title:'messages001',
        },
        {
            id:2,
            title:'messages002',
        },
        {
            id:3,
            title:'messages003',
        }
        ]
        this.messages = messages
      },1000)
  },

  methods: {
    // 编程式的导航
    push(id){
      this.$router.push(`/home/message/file/${id}`);
    },

    replace(id){
      this.$router.replace(`/home/message/file/${id}`)
    },
  },
 }
</script>

<style>

</style>