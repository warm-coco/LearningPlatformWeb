<template>
    <div>
     <div class="tab-buttons">
         <button @click="activeTab = 'exams'" :class="{ active: activeTab === 'exams' }" ><i class="fas fa-user"></i>个人信息</button>
         <button @click="activeTab = 'grades'" :class="{ active:activeTab === 'grades' }" ><i class="fas fa-edit"></i>修改个人信息</button>
         <hr class="button-line" style="margin-top: 1%;">
     </div>
     <!-- 个人信息页面 -->
        <div v-if="activeTab === 'exams'">
         <div class="personal-info">
     <h2 style="margin: 0 auto;">个人信息</h2>
     <form @submit.prevent="submitForm">
       <div class="form-group">
         <label for="school">学校</label>
         <input type="text" id="school" v-model="school" disabled =“disabled” required>
       </div>
       <div class="form-group">
         <label for="faculty">学院</label>
         <input type="text" id="faculty" v-model="faculty" disabled =“disabled” required>
       </div>
       <div class="form-group">
         <label for="major">专业</label>
         <input type="text" id="major" v-model="major" disabled =“disabled” required>
       </div>
       <div class="form-group">
         <label for="studentId">学号</label>
         <input type="text" id="studentId" v-model="studentId" disabled =“disabled” required>
       </div>
       <div class="form-group">
         <label for="phone">电话</label>
         <input type="text" id="phone" v-model="phone" disabled =“disabled” required>
       </div>
       <div class="form-group">
         <label for="gender">性别</label>
         <input type="text" id="gender" v-model="gender" disabled =“disabled” required>
       </div>
       <div class="form-group">
         <label for="idCard">身份证号</label>
         <input type="text" id="idCard" v-model="idCard" disabled =“disabled”  required>
       </div>
     </form>
   </div>
        </div>
        <!-- 修改个人信息页面 -->
        <div v-if="activeTab === 'grades'">
         <div class="personal-info">
     <h2>修改个人信息</h2>
     <form @submit.prevent="submitForm">
       <div class="form-group">
         <label for="school">学校</label>
         <input type="text" id="school" v-model="school" required>
       </div>
       <div class="form-group">
         <label for="faculty">学院</label>
         <input type="text" id="faculty" v-model="faculty" required>
       </div>
       <div class="form-group">
         <label for="major">专业</label>
         <input type="text" id="major" v-model="major" required>
       </div>
       <div class="form-group">
         <label for="studentId">学号</label>
         <input type="text" id="studentId" v-model="studentId" required>
       </div>
       <div class="form-group">
         <label for="phone">电话</label>
         <input type="text" id="phone" v-model="phone" required>
       </div>
       <div class="form-group">
         <label for="gender">性别</label>
         <select id="gender" v-model="gender" required>
           <option value="male">男</option>
           <option value="female">女</option>
         </select>
       </div>
       <div class="form-group">
         <label for="idCard">身份证号</label>
         <input type="text" id="idCard" v-model="idCard" required>
       </div>
       <button type="submit">修改</button>
     </form>
   </div>

        </div>
     </div>

   </template>

<script>
export default {
  data () {
    return {
      activeTab: 'exams',
      school: '遵义师范学院',
      faculty: '信息工程学院',
      major: '计算机科学与技术',
      studentId: '2243209060233',
      phone: '18786170321',
      gender: '男',
      idCard: '12324354523y2y37y'
    }
  }
}
</script>

   <style>
 .personal-info {
   max-width: 400px;
   margin: 0 auto;
   padding: 20px;
   border: 1px solid #ccc;
   border-radius: 5px;
 }

 .form-group {
   margin-bottom: 10px;
 }

 label {
   display: block;
   margin-bottom: 5px;
 }

 input[type="text"],
 select {
   width: 100%;
   padding: 8px;
   font-size: 14px;
   border: 1px solid #ccc;
   border-radius: 3px;
 }

 button {
   background-color: #007BFF;
   color: #fff;
   border: none;
   padding: 10px 20px;
   cursor: pointer;
   border-radius: 3px;
 }

 button:hover {
   background-color: #0056b3;
 }

   .tab-buttons {
   display: flex;
   justify-content: space-between;
   align-items: center;
   background-color: #abf2ed;
   padding: 10px;
   border-radius: 5px;
 }
   .menu-item {
     display: inline-block;
     margin-right: 10px; /* 调整列表项之间的间距 */
 }

 .content h3 {
   margin-bottom: 20px;
   font-weight: 500;
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
 }
 </style>
