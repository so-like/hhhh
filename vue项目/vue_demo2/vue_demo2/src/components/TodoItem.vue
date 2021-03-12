<template>
  <li @mouseenter="handenter(true)" @mouseleave="handenter(false)" :style={backgroundColor:bgcolor}>
    <label>
      <input type="checkbox" v-model="todo.complete" />
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" style="display:none" v-show="isshow" @click="deleteitem">删除</button>
  </li>
</template>

<script>
// 引入消息订阅与发布
import pubsub from 'pubsub-js'
export default {
  props: {
    todo: Object,
    index: Number,
    // deleteTodo:Function
  },
  data() {
    return {
      bgcolor: "white",
      isshow: false
    };
  },
  methods: {
    handenter(isenter) {
      console.log("chufa");
      // 鼠标移入后改变背景颜色以及按钮是否显示
      if (isenter) {
        this.bgcolor = "gray";
        this.isshow = true;
      } else {
        this.bgcolor = "white";
        this.isshow = false;
      }
    },
    deleteitem(){
      // 首先获取数据和下标
        const {todo,index,deleteTodo} = this
      // 弹出提示框让用户确定
      if(window.confirm(`你确定删除${todo.title}吗`)){
        // 如果用户确定 则在数据中定义删除方法
        // deleteTodo(index)
        // 发布消息 参数(消息铃消息名字 数据)
        PubSub.publish('deleteTodo',index)
      }
    }
  }
};
</script>

<style>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>