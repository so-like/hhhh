<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!-- 给标签绑定自定义事件的监听 然后通过$emit来触发响应 -->
        <!-- <TodoHeader @addTodo="addTodo"/> -->
        <TodoHeader ref="header"/>
        <TodoList :todos="todos"/>
        <!-- <TodoFooter :todos="todos" :deleteCompleteTodos="deleteCompleteTodos" :setCompleteTodos="setCompleteTodos"/> -->
        <todo-footer>
            <input type="checkbox" v-model="isAllCheck" slot="checkAllbox"/>
            <span slot="count">已完成{{CompleteSize}} / 全部{{todos.length}} </span>
            <button class="btn btn-danger" v-show="CompleteSize" @click="deleteCompleteTodos" slot="button">清除已完成任务</button>
        </todo-footer>
    </div>
  </div>
</template>

<script>
// 引入消息发布和订阅模块
import pbusub from 'pubsub-js'
import TodoHeader from './components/TodoHeader.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';

// 引入存储工具
import storageUtil from './util/storageUtil'


export default {
  data(){
    return{
      // 从本地localStorage读取数据 如果没有数据就穿一个空串
      // todos:JSON.parse(window.localStorage.getItem("todos_key") || '[]')
      todos:storageUtil.readTodos()
    }
  },

  computed:{
    //  统计
     CompleteSize(){
      //  这局话的意思就是统计preTotal（初始计数值） +todo.complete为true就加一如果为false就加0 初始值为0
       return this.todos.reduce((preTotal,todo)=> preTotal + (todo.complete?1:0),0)
     },
      // 判断是否全选 
     isAllCheck:{
      //  获取值
       get(){
        //  已完成的数量如果等于总数量则全选  条件不够如果一个都没勾选那就不用选中
         return this.CompleteSize === this.todos.length && this.CompleteSize>0
       },
      //  完成的数量如果不等于总数量 设置它的value值
       set(value){//value为当前最新的isAllCheck值 一旦发生改变就调用全选函数
         this.setCompleteTodos(value)
       }

     }
   },
  methods: {
    addTodo(todo){
      // 在数组的头部添加一个对象
      this.todos.unshift(todo)
    },
    deleteTodo(index){
      this.todos.splice(index,1)
    },

  // 删除所有complete为true也就是选中的todos
    deleteCompleteTodos(){
      // 过滤掉complete为true的也就是留下没有选中的
      this.todos = this.todos.filter(todo => !todo.complete)
    },

    // 全选或者全不选 (check参数意为选中或者不选中)
    setCompleteTodos(check){
      // 将todo的值改为和传来参数一样的值（true/false）
      this.todos.forEach(todo => todo.complete = check)
    }
  },

  mounted() {//执行异步代码绑定监听
  // 给组件Header绑定事件监听 通过$refs找到该组件
  // 参数为事件名事件函数
    this.$refs.header.$on('addTodo',this.addTodo),

    // 订阅消息参数为消息名 回调函数（msg消息名，数据）
    PubSub.subscribe('deleteTodo',(msg,index)=>{
      this.deleteTodo(index)
    })
  },

  // 监视
  watch:{
    todos:{
      deep:true, //深度监视内部的变化
      // 回调函数(如果发生变化就将localStorage的值设置为最新的json值)

      // handler: function(value){
      //   // 向本地缓存中存取数据
      //   // window.localStorage.setItem("todos_key",JSON.stringify(value))
      //   storageUtil.saveTodos(value)
      // }
      handler:storageUtil.saveTodos,

      // 上面的写法就相当于 参数是什么都随意
      // handler:function(todos){
      //   window.localStorage.setItem(TODOS_KEY,JSON.stringify(value))
      // }

    }
  },
  components: {
    TodoHeader,
    TodoList,
    TodoFooter
  }
}
</script>

<style>
.todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
