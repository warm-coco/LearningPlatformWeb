<template>
  <div class="modal-overlay" @click.self="close">
    <div class="modal-content">
      <h2>更改信息</h2>
      <div class="changeCollege">
        <label for="college" >选择学院:</label>
        <select id="college" v-model="selectedCollege" @change="updateMajors">
          <option v-for="college in colleges" :key="college.name" :value="college.name">{{ college.name }}</option>
        </select>
      </div>
      <div class="changeMajor">
        <label for="major" >选择专业:</label>
        <select id="major" v-model="selectedMajor">
          <option v-for="major in filteredMajors" :key="major" :value="major">{{ major }}</option>
        </select>
      </div>
      <div class="modal-buttons">
        <button @click="save">保存</button>
        <button @click="close">取消</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  data () {
    return {
      selectedCollege: '',
      selectedMajor: '',
      colleges: [
        { name: '信息工程学院', majors: ['计算机科学与技术', '软件工程', '信息安全', '网络安全', '大数据'] },
        { name: '电子信息学院', majors: ['通信工程', '电子信息工程', '微电子科学'] }
      ]
    }
  },
  computed: {
    filteredMajors () {
      const college = this.colleges.find(col => col.name === this.selectedCollege)
      return college ? college.majors : []
    }
  },
  methods: {
    save () {
      this.$emit('save', this.selectedMajor)
    },
    close () {
      this.$emit('close')
    },
    updateMajors () {
      this.selectedMajor = this.filteredMajors[0]
    }
  },
  mounted () {
    if (this.colleges.length > 0) {
      this.selectedCollege = this.colleges[0].name
      this.updateMajors()
    }
  }
}
</script>

<style scoped>
h2{
  text-align: center;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;
}

.modal-buttons {
  display: flex;
  justify-content: center;/*居中 */
  margin-top: 20px;
  display: flex; /* 使用Flex布局 */
  flex-direction: row; /* 元素水平排列 */
}

.modal-buttons button {
  width: auto;
  margin-left: 10px;
  padding: 5px 10px;
  background: #2db5a3;
  border: none;
  color: #FFF;
  border-radius: 10px;
  cursor: pointer;
}

.modal-buttons button:hover {
  background: #1a8c75;
}

.modal-content > div, .modal-buttons {
margin: 10px 0; /* 上下边距以增加空间 */
width: 100%; /* 确保宽度覆盖整个容器 */
text-align: center; /* 文本居中对齐 */
}

.select-box {
width: 200px; /* 设定你需要的固定宽度 */
text-align: left; /* 保持选项文本左对齐 */
}

.changeCollege select,
.changeMajor select {
width: 150px; /* 固定宽度 */
padding: 5px; /* 可以根据需要调整内边距 */
border: 1px solid #ccc; /* 边框样式 */
border-radius: 10px;
}
</style>
