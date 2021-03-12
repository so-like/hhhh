<template>
    <div>
      <div v-if="!repurl">loading...</div>
      <div v-else>
        最受欢迎的库是 <a :href="repurl">{{rep_name}}</a>
        <!-- <a href="#">ddwdwd</a> -->
      </div>
    </div>
</template>


<script>
export default {
  data() {
    return {
      repurl:'',
      rep_name:''
    }
  },

  // 初始化组件
  mounted() {
    // 发送ajax请求
    const url = `https://api.github.com/search/repositories?q=vue&sort=starts`
    this.$http.get(url).then(
      // 成功了
      response => {
        const result = response.data
        const mostRep = result.items[0]
        this.repurl = mostRep.html_url
        this.rep_name = mostRep.name
      },
      // 得到第一个最受欢迎的库
      response =>{
        alert("少时诵诗书")
      }
    )
  },
}
</script>



<style>

</style>
