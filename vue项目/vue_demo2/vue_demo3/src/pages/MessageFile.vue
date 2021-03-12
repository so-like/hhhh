<template>
  <div>
    消息ID: {{ $route.params.id }}
    <ul>
      <li>id: {{ MessageFile.id }}</li>
      <li>title: {{ MessageFile.title }}</li>
      <li>content: {{ MessageFile.content }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      MessageFile: {}
    };
  },
//   只执行一次 发送异步请求
  mounted() {
    setTimeout(() => {
      const allMessageFile = [
        {
          id: 1,
          title: "messages001",
          content: "我是内容1"
        },
        {
          id: 2,
          title: "messages002",
          content: "我是内容2"
        },
        {
          id: 3,
          title: "messages003",
          content: "我是内容1",
          content: "我是内容3"
        }
      ];
      // 存储allMessageFile
      this.allMessageFile = allMessageFile;
      const id = this.$route.params.id * 1;
      // 在数组allMessageFile中寻找id与this.$route.params.id相等的 dedtail是数组中的一个对象
      this.MessageFile = allMessageFile.find(detail => detail.id == id);
    }, 1000);
  },

  //   监视器
  watch: {
    // 监视route对象的值是否发生改变
      $route: function(value) {
      const id = value.params.id * 1;
      // 在数组allMessageFile中寻找id与this.$route.params.id相等的
      this.MessageFile = this.allMessageFile.find(detail => detail.id == id);
    }
  }
};
</script>

<style>
</style>