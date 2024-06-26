<template>
  <div class="settings">
    <h1>设置</h1>

    <h2 @click="toggleThemeSettings">主题</h2>
    <transition name="fade">
      <div v-show="showThemeSettings" class="slider-container">
        <div class="setting-item">
          <label for="font-size">字体大小</label>
          <input type="range" id="font-size" v-model.number="fontSize" min="12" max="24" />
        </div>
        <div class="setting-item">
          <label for="bg-color">背景颜色</label>
          <el-color-picker v-model="backgroundColor" show-alpha></el-color-picker>
        </div>
      </div>
    </transition>

    <h2 @click="togglePrivacyOptions">隐私</h2>
    <div v-show="showPrivacyOptions">
      <button @click="changePassword">更换密码</button>
      <button @click="changePhoneNumber">更换手机号</button>
    </div>

    <h2 @click="requestAlbumPermission">权限</h2>
    <div v-show="showAlbumPermissionRequest">
  <div class="permission-item">
    <div>相册权限</div>
    <el-tooltip :content="'Switch value: ' + value1" placement="top">
      <el-switch
        v-model="value1"
        active-color="#13ce66"
        inactive-color="#ff4949"
        active-value="100"
        inactive-value="0">
      </el-switch>
    </el-tooltip>
  </div>
  <div class="permission-item">
    <div>储存权限</div>
    <el-tooltip :content="'Switch value: ' + value2" placement="top">
      <el-switch
        v-model="value2"
        active-color="#13ce66"
        inactive-color="#ff4949"
        active-value="100"
        inactive-value="0">
      </el-switch>
    </el-tooltip>
  </div>
  <div class="permission-item">
    <div>其他权限</div>
    <el-tooltip :content="'Switch value: ' + value3" placement="top">
      <el-switch
        v-model="value3"
        active-color="#13ce66"
        inactive-color="#ff4949"
        active-value="100"
        inactive-value="0">
      </el-switch>
    </el-tooltip>
  </div>
</div>

    <h2 @click="toggleHelpSection">帮助</h2>
    <transition name="fade">
      <text-page v-show="showTextPage"></text-page>
    </transition>

    <div class="account-actions">
    <button @click="switchAccount" class="switch-account">切换账号</button>
  </div>

  <div class="account-actions">
    <button @click="exit" class="logout">退出登录</button>
  </div>

  </div>
</template>

<script>
import { ref } from 'vue'
import TextPage from './Textpage.vue'

export default {
  components: {
    TextPage
  },
  data () {
    return {
      value1: '100',
      value2: '100',
      value3: '100'
    }
  },
  setup () {
    const fontSize = ref(16)
    const backgroundColor = ref('#ffffff')
    const showThemeSettings = ref(false)
    const showPrivacyOptions = ref(false)
    const showAlbumPermissionRequest = ref(false)
    const showTextPage = ref(false)

    const toggleThemeSettings = () => {
      showThemeSettings.value = !showThemeSettings.value
    }

    const togglePrivacyOptions = () => {
      showPrivacyOptions.value = !showPrivacyOptions.value
    }

    const changePassword = () => {
      alert('更换密码功能')
    }

    const changePhoneNumber = () => {
      alert('更换手机号功能')
    }

    const requestAlbumPermission = () => {
    // 这里应该是调用权限检查的API，此处仅做示例
      showAlbumPermissionRequest.value = !showAlbumPermissionRequest.value
    }

    const grantPermission = () => {
    // 这里应该是调用权限授予的API，此处仅做示例
      alert('权限已授予')
      showAlbumPermissionRequest.value = false
    }

    const denyPermission = () => {
    // 这里应该是处理权限拒绝的逻辑，此处仅做示例
      alert('权限被拒绝')
      showAlbumPermissionRequest.value = false
    }

    const toggleHelpSection = () => {
      showTextPage.value = !showTextPage.value
    }

    const switchAccount = () => {
      alert('切换账号功能')
    }

    const exit = () => {
      alert('退出登录')
    }

    return {
      fontSize,
      backgroundColor,
      showThemeSettings,
      showPrivacyOptions,
      showAlbumPermissionRequest,
      showTextPage,
      toggleThemeSettings,
      togglePrivacyOptions,
      changePassword,
      changePhoneNumber,
      requestAlbumPermission,
      grantPermission,
      denyPermission,
      toggleHelpSection,
      switchAccount,
      exit
    }
  }
}
</script>

<style scoped>

/* 标题样式 */
h1 {
  text-align: center;
  color: green;
}

h3{
  text-align: center;
  font-size: 1.5rem;
}

/* 设置区标题 */
.settings h2 {
  color: #333;
  cursor: pointer;
  margin-bottom: 10px;
  transition: color 0.3s;
}

.settings h2:hover {
  color: #007bff;
}

/* 设置项布局 */
.setting-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.setting-item label {
  width: 120px;
  text-align: right;
  margin-right: 15px;
  color: #555;
}

/* 动画过渡 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 按钮样式 */
.button {
  padding: 10px 20px;
  border: 2px solid transparent; /* 添加透明边框 */
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s; /* 过渡效果也包括边框颜色 */
  margin: 5px;
}

.button:hover {
  background-color: darken(#007bff, 10%);
  border-color: darken(#007bff, 10%); /* 鼠标悬停时改变边框颜色 */
}

/* 权限开关样式 */
.permission-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

/* Tooltip样式 */
.el-tooltip__popper {
  background-color: #333;
  color: #fff;
  padding: 5px 10px;
  border-radius: 4px;
}

/* 滑块容器，以便更好地对齐 */
.slider-container {
  display: flex;
  align-items: center;
  padding-left: 130px;
}

/* 输入框和颜色选择器的宽度调整 */
#font-size {
  width: calc(100% - 150px);
}

.el-color-picker__trigger {
  width: calc(100% - 150px);
  height: 30px;
}

/* 账户操作按钮 */
.account-actions {
  margin-top: 20px;
}

/* 优化账户操作按钮 */
.account-actions .button {
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15); /* 添加阴影 */
  transition: all 0.3s ease; /* 平滑过渡 */
}

.account-actions .button:hover {
  transform: translateY(-2px); /* 鼠标悬停时稍微上移 */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* 加深阴影 */
}

/* 修改“切换账号”按钮样式 */
.account-actions .switch-account {
  background-color: #ffc107;
  border-color: #ffc107;
  margin-top: 10px;
  border-radius: 10px;
  width: 150px;
}

.account-actions .switch-account:hover {
  background-color: #e0a800; /* 直接指定颜色值 */
  border-color: #e0a800;
}

/* 修改“退出登录”按钮样式 */
.account-actions .logout {
  background-color: #dc3545;
  color: white;
  font-weight: bold;
  border-radius: 10px;
  width: 150px;
}

.account-actions .logout:hover {
  background-color: #c53343; /* 直接指定颜色值 */
}
</style>
