<template>
  <div id="login-container" class="centered">
    <h1>登录</h1>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

      <el-form-item label="学校:" prop="school">
        <el-autocomplete
          v-model="ruleForm.school"
          :fetch-suggestions="querySearch"
          placeholder="请输入关键词"
          @select="handleSelect"
          clearable
          :trigger-on-focus="false"
          popper-class="my-autocomplete"
          :debounce="100"
        >
          <template slot-scope="{ item }">
            {{ item.label }}
          </template>
        </el-autocomplete>
      </el-form-item>

      <el-form-item label="学号:" prop="num">
        <el-input v-model="ruleForm.num" autocomplete="off" />
      </el-form-item>

      <el-form-item label="密码:" prop="password">
        <el-input type="password" v-model="ruleForm.password" autocomplete="off" />
      </el-form-item>

      <el-form-item>
        <el-radio v-model="ruleForm.role" label="1">学生</el-radio>
        <el-radio v-model="ruleForm.role" label="2" disabled>教师</el-radio>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即登录</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
import { ElMessage } from 'element-ui'

export default {
  name: 'Login',
  data () {
    return {
      ruleForm: {
        school: '',
        num: '',
        password: '',
        role: '1'
      },
      rules: {
        school: [{ required: true, message: '请输入学校', trigger: 'blur' }],
        num: [{ required: true, message: '请输入学号', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      },
      allSchools: [
        { value: '清华大学', label: '清华大学' },
        { value: '遵义师范学院', label: '遵义师范学院' }
        // 更多学校可以继续添加
      ]
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.allSchools.some(school => school.value === this.ruleForm.school)) {
            this.$message.success('登录成功!')
            this.$router.push('/layout/home')
          } else {
            ElMessage.error('请选择正确的学校！')
          }
        } else {
          console.log('错误提交!')
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    querySearch (queryString, cb) {
      let results = []
      if (queryString) {
        results = this.allSchools.filter(this.createFilter(queryString))
        if (results.length === 0) {
          results.push({ value: '暂无数据', label: '暂无数据' })
        }
      } else {
        results = this.allSchools
      }
      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        cb(results)
      }, 200)
    },
    createFilter (queryString) {
      return (school) => {
        return (school.label.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
      }
    },
    handleSelect (item) {
      if (item.value !== '暂无数据') {
        this.ruleForm.school = item.value
      }
    }
  },
  mounted () {
    // 初始化学校列表
  }
}
</script>

<style scoped>
/* 登录容器样式 */
#login-container {
  display: flex;
  flex-direction: column;
  align-items: center; /* 水平居中 */
  justify-content: center; /* 垂直居中，如果需要的话 */
  width: 400px;
  height: 450px;
  background: rgba(245, 247, 250, 0.8);
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin: auto;
}

/* 增加表单项目之间的垂直间距 */
.demo-ruleForm .el-form-item {
  margin-bottom: 0px; /* 可以调整这个数值以改变间距大小 */
}

/* 调整表单的样式使其水平居中 */
.demo-ruleForm {
  width: 100%; /* 确保表单占据登录框的全部宽度 */
  display: flex;
  flex-direction: column;
  padding-right: 50px;
}

/* 调整登录标题的位置和样式 */
#login-container h1 {
  margin-bottom: 30px; /* 调整这个数值以控制标题与第一个表单项之间的距离 */
  text-align: center;
}
</style>
