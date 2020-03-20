<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <!-- exclude里面指向的组件名 这个组件就不缓存内容，就回重复请求ajax -->
      <!-- 路由的内容加载一次，就保存到keepalive里面 -->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
