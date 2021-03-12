<template>
  <div>
    <h2 v-if="firstView">请输入用户名进行搜索</h2>
    <h2 v-if="loading">LOADING...</h2>
    <h2 v-if="msgError">{{msgError}}</h2>
    <div class="row">
    <div class="card" v-for="(user, index) in users" :key="index">
      <a :href="user.url" target="_blank">
        <img :src="user.icon" style="width: 100px" />
      </a>
      <p class="card-text">{{user.name}}</p>
    </div>
    
  </div>
  </div>
</template>

<script>
import pubsub from 'pubsub-js';
import axios from 'axios'
export default {
  data() {
    return {
        firstView:true,
        loading:false,
        msgError:'',
        // user的结构 {name:'名',url:'头像地址',icon:'头像图片'}
        users:null
    }
  },
  mounted() {
    //订阅消息
    PubSub.subscribe('search',(msg,searchName)=>{
      // 发送之前更新状态 以及定义路径
      const url = `https://api.github.com/search/users?q=${{searchName}}`;
      // 发送ajax请求
      this.firstView = false;
      this.loading = true;
      axios.get(url).then(response =>{
        const result = response.data;
        // 通过map返回一个对象数组 包含这三个属性
        const users = response.data.items.map(item => ({
          url:item.html_url,
          name:item.login,
          icon:item.avatar_url
        }))
        // 成功更新状态成功
        this.loading = false;
        this.users = users;
      }).catch(error =>{
        // 失败显示失败提示信息
        this.loading = false;
        this.msgError = '更新失败';
      })
    })
  },
};
</script>

<style>
.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>