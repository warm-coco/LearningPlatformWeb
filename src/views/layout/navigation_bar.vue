<template>
  <div class="nav" :class="{ 'nav-hidden': isHidden }">
    <div class="nav-container">
      <div class="nav-logo">
        <img src="@/assets/ModalImg/book.png" alt="Logo">
      </div>
      <div class="nav-links">
        <a href="../atlas/Graph.vue">图谱</a>
        <router-link to="/course/course">课程</router-link>
      </div>
      <div class="nav-search">
        <input type="text" placeholder="搜索...">
        <button>搜索</button>
      </div>
      <!-- 用户头像和专业组件 -->
      <div class="user-info">
        <div class="user-major" @click="showModal = true">{{ major }}</div>
        <img src="@/assets/ModalImg/tx.png" alt="User Avatar" class="user-avatar" @click="navigateToPage">
      </div>
    </div>

    <!-- 弹窗组件 -->
    <Modal v-if="showModal" @close="showModal = false" @save="updateMajor"/>
  </div>
</template>

<script>
import Modal from './Modal.vue'

export default {
  name: 'navigation_bar',
  components: {
    Modal
  },
  data () {
    return {
      showModal: false,
      major: '计算机科学',
      isHidden: true
    }
  },
  methods: {
    updateMajor (newMajor) {
      this.major = newMajor
      this.showModal = false
    },
    showNav () {
      this.isHidden = false
    },
    hideNav () {
      this.isHidden = true
    },
    handleMouseMove (event) {
      if (event.clientY < 90) {
        this.showNav()
      } else {
        this.hideNav()
      }
    },
    // 新增的方法:导航至目标页面
    navigateToPage () {
      this.$router.push('/personage/template')
    }
  },
  mounted () {
    // 添加鼠标移动事件监听器
    window.addEventListener('mousemove', this.handleMouseMove)
  },
  beforeDestroy () {
    // 移除鼠标移动事件监听器
    window.removeEventListener('mousemove', this.handleMouseMove)
  }
}
</script>
<style scoped>
/* 导航栏整体样式 */
.nav {
  width: 100%;
  height: 80px;
  background: #FFF;
  box-shadow: 0 3px 3px 0 #dad6d6;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  transition: top 0.3s ease-in-out;
}

/* 导航栏隐藏样式 */
.nav-hidden {
  top: -80px;
}

/* 导航栏容器,包含 logo;链接和搜索框 */
.nav-container {
  display: flex;
  align-items: center;
  width: 100%;
}

/* 用户信息容器 */
.user-info {
  margin-right: 30px;
  margin-left: auto;
  display: flex;
  align-items: center;
}

/* 用户头像样式 */
.user-avatar {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  margin-right: 10px;
}

/* 专业组件样式 */
.user-major {
  padding: 5px 10px;
  background: #2db5a3;
  color: #FFF;
  border-radius: 12px;
  cursor: pointer;
  margin-right: 20px;
}

/* logo 样式 */
.nav-logo img {
  height: 50px;
  width: 60px;
}

/* 导航链接容器,调整 margin-left 以向左移动 */
.nav-links {
  display: flex;
  margin-left: 50px;
}

/* 导航链接样式 */
.nav-links a {
  margin: 0 40px;
  text-decoration: none;
  color: #000;
  font-size: 18px;
}

/* 导航链接悬停效果 */
.nav-links a:hover {
  color: #2db5a3;
}

/* 搜索框容器 */
.nav-search {
  margin-left: 200px;
  display: flex;
  align-items: center;
}

/* 搜索框样式 */
.nav-search input {
  height: 30px;
  padding: 5px;
  font-size: 16px;
  border: 1px solid #d1cfcf;
  border-radius: 10px;
}

/* 搜索按钮样式 */
.nav-search button {
  height: 34px;
  margin-left: 10px;
  padding: 0 10px;
  background: #2db5a3;
  border: none;
  color: #FFF;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
}

/* 搜索按钮悬停效果 */
.nav-search button:hover {
  background: #1a8c75;
}
</style>
