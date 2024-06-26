<template>
  <div>
    <el-divider></el-divider>

      <div class="allCourse">
          <h1>全部课程</h1>
          <el-row :gutter="10">
              <el-col :span="4" v-for="(course, index) in allCourse" :key="index">
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
              <el-col :span="4" class="more-col">
                  <a href="#" class="more" ref="moreRefAll">更多</a>
              </el-col>
          </el-row>
      </div>

      <el-divider></el-divider>

      <div class="hotCourse">
          <h1>热门课程</h1>
          <el-row :gutter="10">
              <el-col :span="4" v-for="(course, index) in hotCourse" :key="index">
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
              <el-col :span="4" class="more-col">
                  <a href="#" class="more" ref="moreRefHot">更多</a>
              </el-col>
          </el-row>
      </div>

      <el-divider></el-divider>

      <div class="boutiqueCourse">
          <h1>精品课程</h1>
          <el-row :gutter="10">
              <el-col :span="4" v-for="(course, index) in boutiqueCourse" :key="index">
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
              <el-col :span="4" class="more-col">
                  <a href="#" class="more" ref="moreRefBoutique">更多</a>
              </el-col>
          </el-row>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    // 假设的课程数据，包含图片源、标题和描述
      allCourse: [
        { imageSrc: require('@/assets/SlideImg/t1.png'), title: '标题', description: '全部课程' },
        { imageSrc: require('@/assets/SlideImg/t2.png'), title: '标题1', description: '全部课程1' }
        // 更多课程数据...
      ],
      hotCourse: [
        { imageSrc: require('@/assets/SlideImg/t3.png'), title: '标题', description: '热门课程' }
        // 更多热门课程数据...
      ],
      boutiqueCourse: [
        { imageSrc: require('@/assets/SlideImg/t4.png'), title: '标题', description: '精品课程' }
        // 更多精品课程数据...
      ]
    }
  },
  mounted () {
    this.positionMoreLink()
  },
  methods: {
    positionMoreLink () {
    // 根据实际布局需求调整“更多”链接的位置
      const moreRefs = [this.$refs.moreRefAll, this.$refs.moreRefHot, this.$refs.moreRefBoutique]
      moreRefs.forEach(ref => {
        if (ref) {
          ref.style.position = 'relative'
          ref.style.top = '10px' // 可以根据实际情况调整
          ref.style.textAlign = 'center'
        }
      })
    }
  }
}
</script>

<style>
h1{
  font-size: 1.3rem;
  margin-bottom: 15px;
}

.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
}

/* 使 flex-container 成为相对定位的容器 */
.flex-container {
  display: flex; /* 使用 Flex 布局 */
  flex-wrap: wrap; /* 允许换行 */
  justify-content: flex-start; /* 控制主轴对齐方式 */
}

.el-row {
  display: flex;
  flex-wrap: wrap;
}

.more-col {
  /* 使用Flexbox来对齐 */
  display: flex;
  /* 添加一些底部的边距 */
  margin-top: 160px;
  margin-bottom: 0px;
}

.more {
  padding: 5px 10px;
  /* 如果需要背景色 */
  background-color: #fff;
  /* 设置链接颜色 */
  color: #409EFF;
}

.more-col .more {
  position: absolute;
  top: -30px; /* 调整此值以确保链接在分割线上方 */
  padding: 5px 10px;
  text-align: center;
  background-color: #fff;
  color: #409EFF;
}
</style>
