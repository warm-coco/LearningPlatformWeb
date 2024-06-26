<template>
    <div>
      <div class="tab-buttons">
        <button @click="activeTab = 'exams'" :class="{ active: activeTab === 'exams' }">我的考试</button>
        <button @click="activeTab = 'grades'" :class="{ active: activeTab === 'grades' }">我的成绩</button>
        <button @click="activeTab = 'evaluations'" :class="{ active: activeTab === 'evaluations' }">我的评价</button>
      </div>
      <hr class="line-under-buttons">
      <div v-if="activeTab === 'exams'">
        <h2>我的考试</h2>
        <!-- 我的考试的内容 -->
      </div>
      <div v-if="activeTab === 'grades'">
        <h2>我的成绩</h2>
        <!-- 我的成绩的内容 -->
      </div>
      <div v-if="activeTab === 'evaluations'">
        <h2>我的评价</h2>
        <!-- 我的评价的内容 -->
      </div>
    </div>
  </template>

<script>
export default {
  data () {
    return {
      activeTab: 'exams'
    }
  }
}
</script>

  <style scoped>
  .tab-buttons {
    display: flex;
    align-items: center; /* 垂直居中对齐 */
  }

  button {
    padding: 10px 20px;
    border: none;
    background-color: #d1dee8;
    cursor: pointer;
    margin-right: 0; /* 移除默认的右边距 */
    position: relative; /* 添加相对定位 */
  }

  hr.line-under-buttons {
    border: none;
    border-top: 2px solid #aec5df; /* 与按钮下边框相同的线条样式 */
    margin: 0; /* 重置边距 */
    width: 100%; /* 宽度100% */
  }

  button.active {
    font-weight: bold;
    border-bottom: 2px solid #000;
  }

  button:not(.active):hover {
    background-color: #e0e0e0;
  }
  </style>
