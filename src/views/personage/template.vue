<template>
  <div class="my-page">
      <header>
          <h1>个人中心</h1>
      </header>
      <div class="main-content">
          <section class="left-section">
              <div class="profile-section">
                  <img :src="user.avatar" alt="User Avatar" class="avatar">
                  <div class="user-info">
                      <button @click="changeAvatar" class="btn">更换头像</button>
                      <h2>{{ user.name }}</h2>
                      <p>{{ user.email }}</p>
                  </div>
                  <div class="points">
                      <h3>积分: {{ user.points }}</h3>
                  </div>
                  <hr>
                  <div class="theme">
                      <h3 class="theme-title">个人中心</h3>
                      <ul>
                        <li><div class="menu-item" @click="currentView = 'Courses'"><i class="fas fa-book"></i> 课程</div></li>
                          <li><div class="menu-item" @click="currentView = 'Favorites'"><i class="fas fa-heart"></i> 收藏</div></li>
                          <li><div class="menu-item" @click="currentView = 'History'"><i class="fas fa-history"></i> 历史记录</div></li>
                          <li><div class="menu-item" @click="currentView = 'Evaluating'"><i class="fas fa-chart-line"></i>评测</div></li>
                          <li><div class="menu-item" @click="currentView = 'Task'"><i class="fas fa-tasks"></i>任务</div></li>
                          <li><div class="menu-item" @click="currentView = 'Person'"><i class="fas fa-user"></i>个人信息</div></li>
                          <li><div class="menu-item" @click="currentView = 'Settings'"><i class="fas fa-cog"></i> 设置</div></li>
                      </ul>
                  </div>
              </div>
          </section>
          <section class="right-section">
              <div class="content">
                  <!-- 动态加载组件 -->
                  <component :is="currentViewComponent"></component>
              </div>
          </section>
      </div>
  </div>
</template>

<script>
import Courses from './Course.vue' // 确保导入你的组件
import Favorites from './Favorite.vue'
import Evaluating from './Evaluating.vue'
import Task from './Task.vue'
import History from './History.vue'
import Person from './Person.vue'
import Settings from './Setting.vue' // 这里应该是你的设置组件

export default {
  name: 'MyPage',
  components: { // 注册组件
    Courses,
    Favorites,
    Evaluating,
    Task,
    History,
    Person,
    Settings
  },
  data () {
    return {
      user: {
        name: 'John Doe',
        email: 'john.doe@example.com',
        avatar: 'https://via.placeholder.com/150',
        points: 3422
      },
      currentView: 'Courses'
    }
  },
  computed: {
    currentViewComponent () {
      switch (this.currentView) {
        case 'Courses':
          return 'Courses'
        case 'Favorites':
          return 'Favorites'
        case 'Evaluating':
          return 'Evaluating'
        case 'Task':
          return 'Task'
        case 'Person':
          return 'Person'
        case 'History':
          return 'History'
        case 'Settings':
          return 'Settings'
        default:
          return 'Placeholder'
      }
    }
  },
  methods: {
    changeAvatar () {
      alert('更换头像')
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');

.my-page {
  font-family: 'Roboto', sans-serif;
  padding: 20px;
  background-color: white; /* 背景色更改为淡蓝色 */
  min-height: 80vh;
}

header {
  margin-top: 0;
  background-color: white;
  padding: 15px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.main-content {
  display: flex;
  margin-top: 20px;
}

.left-section {
  flex: 1;
  max-width: 300px;
  background-color: #e0ecff; /* 左侧栏背景色 */
  border-right: 1px solid #b0c4de; /* 边框颜色 */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  max-height: calc(100vh - 120px); /* 设置最大高度 */
}

.profile-section {
  text-align: center;
  margin-bottom: 20px;
}

.avatar {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin: 0 auto; /* 水平居中 */
  display: block; /* 确保 margin 自动居中生效 */
}

.user-info {
  margin: 20px 0;
}

.points {
  margin: 10px 0;
  font-weight: 500;
}

.btn {
  display: inline-block;
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #00bfff; /* 按钮颜色更改为深蓝色 */
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #007bff; /* 鼠标悬停时按钮颜色 */
}

hr {
  margin: 20px 0;
}

.theme {
  margin-top: 20px;
}

.theme-title {
  margin-bottom: 10px;
  font-weight: 500;
  text-align: left;
  padding-left: 10px;
}

.theme ul {
  list-style-type: none;
  padding: 0;
}

.theme li {
  cursor: pointer;
}

.theme li:hover {
background-color: #d0e6fe; /* 鼠标悬停时菜单项背景色 */
}

.menu-item {
  margin: 10px 0;
  padding: 10px;
  text-align: left;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  color: #666; /* 选项的颜色调淡 */
}

.menu-item i {
  margin-right: 10px;
}

.menu-item:hover {
  color: #007bff;
}

.right-section {
  flex: 2;
  margin-left: 20px;
  background-color: #e0ecff; /* 右侧栏背景色 */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  overflow-y: auto;
  max-height: calc(100vh - 120px); /* 设置最大高度 */

  /* 隐藏滚动条 */
  -ms-overflow-style: none;  /* IE 和 Edge */
  scrollbar-width: none;     /* Firefox */

  /* 对于 Chrome, Safari, 和 Opera */
  &::-webkit-scrollbar {
      width: 0 !important;   /* 滚动条宽度为0 */
  }

  /* 隐藏滚动条滑块 */
  &::-webkit-scrollbar-thumb {
      background: transparent;   /* 滚动条滑块透明 */
  }
}

.content h3 {
  margin-bottom: 20px;
  font-weight: 500;
}

.content p {
  line-height: 1.6;
}

.left-section:hover,
.right-section:hover {
box-shadow: 0 0 15px rgba(0, 0, 0, 0.2); /* 增加阴影深度 */
}
</style>
