<template>
  <div id="app">
    <router-view/>
    <tabbar></tabbar>
    <!-- 统一这个时候渲染 ? 而不是单独的拿出来渲染 -->
  </div>
</template>

<script>
// 这个就是把这个文件引入
import tabbar from "@/components/common/tabbar/tabbar"
export default {
  name: 'App',
  components:{tabbar}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

}
</style>
