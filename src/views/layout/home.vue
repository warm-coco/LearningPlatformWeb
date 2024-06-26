<template>
    <div>
      <!-- 导航栏组件 -->
      <navigation_bar></navigation_bar>

      <!-- 页面内容 -->
      <div class="page-content">
        <graph></graph>
      </div>
    </div>
  </template>

<script>
// eslint-disable-next-line camelcase
import navigation_bar from './navigation_bar'
import Graph from '../atlas/Graph'

export default {
  name: 'home',
  components: {
    navigation_bar,
    Graph
  }
  // 其他页面的逻辑和数据
}
</script>

  <style scoped>
   .container {
  display: flex;
  flex-direction: column;
}
.navbar {
  position: fixed; /* 或 sticky */
  top: 0;
  left: 0;
  right: 0;
  height: 80px; /* 导航栏高度 */
  z-index: 1000; /* 确保导航栏在其他元素之上 */
}

.page-content {
  margin-top: 0; /* 移除顶部边距 */
}
  </style>
