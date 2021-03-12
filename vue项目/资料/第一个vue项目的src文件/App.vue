<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- 3.第三部编写组件标签 -->
    <HelloWorld/>
    <hi/>
  </div>
</template>

<script>
// 1.第一步引入组件
import HelloWorld from './components/HelloWorld'
import hi from './components/hi'
export default {
  name: 'App',
  components: {
    // 2.第二部声明组件
    HelloWorld,
    hi
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
