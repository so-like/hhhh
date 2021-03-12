<template>
  <div class="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="addItem" v-model="title"/>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        // 绑定的初始化数据
        title:'',
      }
    },
    props:{
      addTodo:Function
    },
    methods: {
      addItem(){
        // 1.获取数据
        const title = this.title.trim()
        if(!this.title){
          alert('输入不能为空')
          return
        }
        // 2.生成一个todo对象
        const todo ={
          title:title,
          complete:false
        }
        // 3.输入没有问题就往todos数组中添加 这里的函数应该在数据处定义
        // ！！！！数据在哪就在那里定义函数

        // this.addTodo(todo)
        // 绑定自定义的事件监听 通过$emit来触发
        this.$emit('addTodo',todo)


        // 4.将输入框清零
        this.title = ''
      }
    },
  }
</script>

<style>
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }

  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }
</style>