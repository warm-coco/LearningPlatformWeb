<template>
    <div class="favorites-container">
      <h1 class="favorites-title">我的收藏</h1>
      <div v-if="favorites.length === 0" class="empty-message">
        暂无收藏内容
      </div>
      <div v-else>
        <el-col :span="5" style="margin-right: 30px;" v-for="course in favorites" :key="course.id" class="image-box">
            <el-card class="image-box" s :body-style="{ padding: '1px' }" >
            <!-- <img :src="course.imgurl" class="image"> -->
            <div class="photo-container">
            <router-link to="/videos/videoplayback">
             <img :src="course.imgurl" @click="playVideo">
             </router-link>
             </div>
            <div style="padding: 14px;">
                <span>{{ course.title }}</span>
                <div class="bottom clearfix">
                <time class="time">{{ currentDate }} </time>
                <el-button type="text" class="button" >操作按钮</el-button>
                </div>
            </div>
            </el-card>
        </el-col>
     </div>
    </div>
  </template>

<script>
export default {
  data () {
    return {
      favorites: [
        {
          id: '1',
          title: 'qqq',
          imgurl: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png'
        }, {
          id: '2',
          title: 'www',
          imgurl: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png'
        }, {
          id: '3',
          title: 'sss',
          imgurl: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png'
        }, {
          id: '4',
          title: 'lll',
          imgurl: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png'
        }, {
          id: '5',
          title: 'qqq',
          imgurl: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png'
        }
      ]
    }
  },
  methods: {
    removeFavorite (index) {
      // 向父组件发出事件以删除收藏夹
      this.$emit('remove', index)
    },
    playVideo () {
      // 在这里可以添加一些逻辑，例如记录点击次数等
    }
  }
}
</script>

  <style scoped>
  .favorites-container {
    /* max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px; */
  }

  .image-box {
  margin-right: 1.4%; /* 通过 margin-right 控制图片框之间的间距 */
  margin: 0.5%;
}

  .image {
    width: 300px; /* 设置固定的宽度 */
  height: 200px; /* 设置固定的高度 */
  overflow: hidden; /* 隐藏超出容器的部分 */
  border: 1px solid #ccc; /* 边框样式，可根据需要自定义 */
  }

  .favorites-title {
    font-size: 28px;
    text-align: center;
    margin-bottom: 20px;
  }

  .empty-message {
    text-align: center;
    color: #888;
    font-style: italic;
    margin-top: 20px;
  }

  .favorite-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding: 16px;
    border-radius: 4px;
    margin-bottom: 12px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .favorite-info {
    flex: 1;
  }

  .favorite-title {
    font-size: 20px;
    margin-bottom: 8px;
    color: #333;
  }

  .favorite-description {
    color: #666;
  }

  .favorite-actions {
    display: flex;
    align-items: center;
  }

  .btn-remove-favorite {
    padding: 8px 12px;
    background-color: #f44336;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .btn-remove-favorite:hover {
    background-color: #d32f2f;
  }
  </style>
