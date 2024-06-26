<template>
    <div>
      <button @click="requestPermission">请求权限</button>
      <p>{{ permissionStatus }}</p>
    </div>
  </template>

<script>
export default {
  data () {
    return {
      permissionStatus: ''
    }
  },
  methods: {
    async requestPermission () {
      try {
        const granted = await navigator.permissions.request({ name: 'camera' })
        if (granted.state === 'granted') {
          this.permissionStatus = '权限已被授予'
        } else {
          this.permissionStatus = '权限被拒绝'
        }
      } catch (error) {
        this.permissionStatus = '请求权限时发生错误'
      }
    }
  }
}
</script>
