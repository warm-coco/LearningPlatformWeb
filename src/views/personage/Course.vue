<template>
  <div>
    <!-- 顶部选项卡 -->
    <div class="tab-buttons">
      <button :class="{ active: selectedTab === 'inProgress' }" @click="selectedTab = 'inProgress'">在学课程</button>
      <button :class="{ active: selectedTab === 'completed' }" @click="selectedTab = 'completed'">已学课程</button>
    </div>

    <!-- 显示课程列表 -->
    <div class="course-list">
      <el-row :gutter="10" v-if="selectedTab === 'inProgress'">
        <el-col :span="4" v-for="(course, index) in goingCourse" :key="index">
                  <el-card :body-style="{ padding: '0px' }">
                      <img :src="course.imageSrc" class="image">
                      <div style="padding: 14px;">
                          <span>{{ course.title }}</span>
                          <div class="bottom clearfix">
                              <p>{{ course.description }}</p>
                          </div>
                      </div>
                  </el-card>
              </el-col>
      </el-row>

      <el-row :gutter="10" v-if="selectedTab === 'completed'">
        <el-col :span="4" v-for="(course, index) in oldCourse" :key="index">
                  <el-card :body-style="{ padding: '0px' }">
                      <img :src="course.imageSrc" class="image">
                      <div style="padding: 14px;">
                          <span>{{ course.title }}</span>
                          <div class="bottom clearfix">
                              <p>{{ course.description }}</p>
                          </div>
                      </div>
                  </el-card>
              </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectedTab: 'inProgress', // 默认选中在学课程
      goingCourse: [
        { imageSrc: require('@/assets/SlideImg/t1.png'), title: '标题', description: '全部课程' },
        { imageSrc: require('@/assets/SlideImg/t2.png'), title: '标题1', description: '全部课程1' }
        // 更多课程数据...
      ],
      oldCourse: [
        { imageSrc: require('@/assets/SlideImg/t3.png'), title: '标题', description: '热门课程' }
        // 更多热门课程数据...
      ]
    }
  }
}
</script>

<style>
.tab-buttons {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.tab-buttons button {
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 10px;
}

.tab-buttons button.active {
  color: #409EFF;
  font-weight: bold;
}
</style>
