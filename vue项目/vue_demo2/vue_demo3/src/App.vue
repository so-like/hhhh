<template>
  <div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header"><h2>路由标签</h2></div>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <router-link to="/home" class="list-group-item">home</router-link>
          <router-link to="/about/我是参数" class="list-group-item">about</router-link
          >
        </div>
      </div>

      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- 在router-view中传递参数 -->
            <keep-alive>
              <router-view :msg="msg"></router-view>
            </keep-alive>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // 映射组件文件
  components: {},
  data() {
    return {
      msg: "abc"
    };
  }
};
</script>


<style>
</style>