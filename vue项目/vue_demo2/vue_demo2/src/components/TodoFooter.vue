<template>
  <div class="todo-footer">
        <label>
          <!-- <input type="checkbox" v-model="isAllCheck"/> -->

          <!-- 插槽的运用 -->
          <slot name="checkAllbox"></slot>
        </label>
        <span>
          <!-- <span>已完成{{CompleteSize}} / 全部{{todos.length}} </span> -->
          <slot name="count"></slot>
        </span>
        <!-- 如果已完成数大于0则他就显示否则隐藏 -->
        <!-- <button class="btn btn-danger" v-show="CompleteSize" @click="deleteCompleteTodos">清除已完成任务</button> -->
          <slot name="button"></slot>
      </div>
</template>

<script>
  export default {
  //  props:{
  //    todos:Array,
  //    deleteCompleteTodos:Function,
  //    setCompleteTodos:Function
  //  },
  //  computed:{
  //   //  统计
  //    CompleteSize(){
  //     //  这局话的意思就是统计preTotal（初始计数值） +todo.complete为true就加一如果为false就加0 初始值为0
  //      return this.todos.reduce((preTotal,todo)=> preTotal + (todo.complete?1:0),0)
  //    },
  //     // 判断是否全选 
  //    isAllCheck:{
  //     //  获取值
  //      get(){
  //       //  已完成的数量如果等于总数量则全选  条件不够如果一个都没勾选那就不用选中
  //        return this.CompleteSize === this.todos.length && this.CompleteSize>0
  //      },
  //     //  完成的数量如果不等于总数量 设置它的value值
  //      set(value){//value为当前最新的isAllCheck值 一旦发生改变就调用全选函数
  //        this.setCompleteTodos(value)
  //      }

  //    }
  //  }
  }
</script>

<style>
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }

</style>