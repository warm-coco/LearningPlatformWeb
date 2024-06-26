<template>
  <div id="Register-container" class="centered">
    <h1>注册</h1>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="学校:" prop="school">
      <el-autocomplete
        v-model="ruleForm.school"
        :fetch-suggestions="querySearch"
        placeholder="请输入关键词"
        @select="handleSelect"
        clearable>
      </el-autocomplete>
    </el-form-item>

      <el-form-item label="姓名:" prop="username">
        <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item label="学号:" prop="num">
        <el-input type="num" v-model="ruleForm.num" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item label="手机号:" prop="mobile">
        <el-input type="text" v-model="ruleForm.mobile" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item label="密码:" prop="password">
        <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
      </el-form-item>

        <!-- 验证码输入框 -->
        <el-form-item label="验证码:" prop="verification">
          <el-input type="text" v-model="ruleForm.verification" autocomplete="off">
          </el-input>
        </el-form-item>

        <el-form-item class="var">
          <el-button size="small" type="primary" :disabled="isGettingCode" @click="getVerificationCode">
            {{ resendButtonText }}
          </el-button>
        </el-form-item>

      <el-form-item class="button-select">
        <el-radio v-model="ruleForm.role" label="1">学生</el-radio>
        <el-radio v-model="ruleForm.role" label="2">教师</el-radio>
      </el-form-item>

      <el-form-item class="button-row">
        <el-button type="primary" @click="submitForm('ruleForm')">立即注册</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>

      </el-form>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      ruleForm: {
        school: '',
        role: '1',
        username: '',
        num: '',
        mobile: '',
        password: '',
        verification: ''
      },
      rules: {
        school: [{ required: true, validator: this.validateSchool, trigger: 'blur' }],
        username: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
        num: [{ required: true, message: '请输入学号', trigger: 'blur' }],
        mobile: [{ required: true, message: '请输入手机号', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        verification: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
      },
      allSchools: [
        { value: '清华大学', label: '清华大学' },
        { value: '遵义师范学院', label: '遵义师范学院' }
      ],
      isGettingCode: false,
      countdown: null, // 这里初始化 countdown
      timeout: null // 添加一个用于清除超时函数的变量
    }
  },
  computed: {
    resendButtonText () {
      return this.isGettingCode ? `重新发送(${(this.countdown || 0)})` : '获取验证码'
    }
  },
  methods: {
    // 验证学校的方法
    validateSchool (rule, value, callback) {
      if (!value) {
        callback(new Error('请输入正确的学校'))
      } else {
        callback()
      }
    },

    // 查询学校并返回匹配结果的方法
    querySearch (queryString, cb) {
      const results = queryString ? this.allSchools.filter(this.createFilter(queryString)) : []
      if (results.length === 0) {
        results.push({ value: '暂无数据', label: '暂无数据' })
      }
      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        cb(results)
      }, 200)
    },

    // 根据关键字过滤学校的方法
    createFilter (queryString) {
      return (school) => {
        return (school.label.toLowerCase().indexOf(queryString.toLowerCase()) >= 0)
      }
    },

    // 处理选择事件的方法
    handleSelect (item) {
      if (item.value !== '暂无数据') {
        this.ruleForm.school = item.value
      } else {
        this.$message.warning('请尝试其他关键词')
      }
    },

    // 提交表单的方法
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.allSchools.some(school => school.value === this.ruleForm.school)) {
            this.$message.success('注册成功!')
          } else {
            // eslint-disable-next-line no-undef
            ElMessage.error('请选择正确的学校！')
          }
        } else {
          console.log('错误提交!')
        }
      })
    },

    // 重置表单的方法
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },

    // 获取验证码的方法
    getVerificationCode () {
      if (this.isGettingCode || !this.ruleForm.mobile) {
        return
      }

      this.isGettingCode = true

      // 立即显示验证码已发送的信息，持续1秒
      this.$message({
        message: '验证码已发送',
        type: 'success',
        duration: 3000 // 显示3秒后自动关闭
      })

      // 开始倒计时
      this.countdown = 30
      this.countdownTimer = setInterval(() => {
        this.countdown--
        if (this.countdown <= 0) {
          clearInterval(this.countdownTimer)
          this.isGettingCode = false
          this.countdown = null
        }
      }, 1000)

      // 组件销毁时清除计时器
      this.$once('hook:beforeDestroy', () => {
        if (this.countdownTimer) {
          clearInterval(this.countdownTimer)
        }
      })
    }
  }
}
</script>

<style scoped>
/* 注册容器样式 */
#Register-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(245, 247, 250, 0.8);
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: auto;
  height: auto;
  margin: 0 auto;
}

/* 表单项目之间的垂直间距 */
.demo-ruleForm .el-form-item {
  margin-bottom: 0px; /* 增加默认间距，可根据设计需求调整 */
}

/* 调整表单的样式使其水平居中 */
.demo-ruleForm {
  width: 100%;
  padding-right: 30px;
}

/* 调整登录标题的位置和样式 */
#Register-container h1 {
  margin-top: 30px;
  text-align: center;
  margin-bottom: 15px;
}

/* 按钮行样式 */
.button-select {
  display: flex;
  justify-content: space-between;
  padding-right: 100px;
  padding-bottom: 0px;
}

.button-row {
  display: flex;
  justify-content: space-between;
  padding-right: 100px;
  padding-bottom: 40px;
}
</style>
