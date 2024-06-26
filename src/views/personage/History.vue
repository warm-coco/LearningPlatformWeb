<template>
    <div class="history">
      <h1>历史记录</h1>

      <!-- 今天的历史记录 -->
      <div v-if="todayRecords.length > 0">
        <h2>今天</h2>
        <div class="history-list">
          <div v-for="item in todayRecords" :key="item.id" class="history-item">
            <img :src="item.thumbnail" alt="History Thumbnail" />
            <div class="history-info">
              <h3>{{ item.title }}</h3>
              <p>{{ item.date }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 昨天的历史记录 -->
      <div v-if="yesterdayRecords.length > 0">
        <h2>昨天</h2>
        <div class="history-list">
          <div v-for="item in yesterdayRecords" :key="item.id" class="history-item">
            <img :src="item.thumbnail" alt="History Thumbnail" />
            <div class="history-info">
              <h3>{{ item.title }}</h3>
              <p>{{ item.date }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 本周的历史记录 -->
      <div v-if="thisWeekRecords.length > 0">
        <h2>本周</h2>
        <div class="history-list">
          <div v-for="item in thisWeekRecords" :key="item.id" class="history-item">
            <img :src="item.thumbnail" alt="History Thumbnail" />
            <div class="history-info">
              <h3>{{ item.title }}</h3>
              <p>{{ item.date }}</p>
            </div>
          </div>
        </div>
      </div>

       <!-- 更久的历史记录 -->
       <div v-if="olderRecords.length > 0">
        <h2>更久</h2>
        <div class="history-list">
          <div v-for="item in olderRecords" :key="item.id" class="history-item">
            <img :src="item.thumbnail" alt="History Thumbnail" />
            <div class="history-info">
              <h3>{{ item.title }}</h3>
              <p>{{ item.date }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 如果没有历史记录 -->
      <div v-if="allRecords.length === 0" class="no-history">
        暂无历史记录
      </div>
    </div>
  </template>

<script>
export default {
  // import axios from 'axios';
  name: 'History',
  data () {
    return {
      historyRecords: [] // 存储从后端获取的历史记录数据
    }
  },
  computed: {
    // 根据时间分类后的记录数组
    todayRecords () {
      return this.historyRecords.filter(item => this.isToday(item.date))
    },
    yesterdayRecords () {
      return this.historyRecords.filter(item => this.isYesterday(item.date))
    },
    thisWeekRecords () {
      return this.historyRecords.filter(item => this.isThisWeek(item.date) && !this.isToday(item.date) && !this.isYesterday(item.date))
    },
    olderRecords () {
      return this.historyRecords.filter(item => !this.isThisWeek(item.date) && !this.isToday(item.date) && !this.isYesterday(item.date))
    },
    // 所有历史记录
    allRecords () {
      return this.historyRecords
    }
  },
  created () {
    // 模拟调用后端接口获取历史记录数据
    this.fetchHistoryRecords()
  },
  methods: {
    // 模拟从后端获取历史记录数据的方法
    async fetchHistoryRecords () {
      try {
        // 模拟接口调用获取历史记录数据
        const mockData = [
          { id: 1, title: 'React.js 入门', date: '2024-06-24', thumbnail: 'thumbnail1.png' },
          { id: 2, title: 'React.js 入门', date: '2024-06-19', thumbnail: 'thumbnail2.png' },
          { id: 3, title: 'Angular 学习指南', date: '2024-06-23', thumbnail: 'thumbnail3.png' },
          { id: 4, title: 'Webpack 实战', date: '2024-06-17', thumbnail: 'thumbnail4.png' },
          { id: 5, title: 'React.js 入门', date: '2024-06-16', thumbnail: 'thumbnail5.png' },
          { id: 5, title: 'TypeScript 最佳实践', date: '2024-06-16', thumbnail: 'thumbnail5.png' },
          { id: 5, title: 'React.js 入门', date: '2024-06-16', thumbnail: 'thumbnail5.png' },
          { id: 5, title: 'TypeScript 最佳实践', date: '2024-06-24', thumbnail: 'thumbnail5.png' },
          { id: 5, title: 'TypeScript 最佳实践', date: '2024-06-21', thumbnail: 'thumbnail5.png' },
          { id: 5, title: 'TypeScript 最佳实践', date: '2024-06-17', thumbnail: 'thumbnail5.png' },
          { id: 5, title: 'TypeScript 最佳实践', date: '2024-06-20', thumbnail: 'thumbnail5.png' },
          { id: 5, title: 'React.js 入门', date: '2024-06-16', thumbnail: 'thumbnail5.png' },
          { id: 5, title: 'TypeScript 最佳实践', date: '2024-06-16', thumbnail: 'thumbnail5.png' },
          { id: 5, title: 'React.js 入门践', date: '2024-06-16', thumbnail: 'thumbnail5.png' },
          { id: 5, title: 'TypeScript 最佳实践', date: '2024-06-24', thumbnail: 'thumbnail5.png' },
          { id: 5, title: 'TypeScript 最佳实践', date: '2024-06-16', thumbnail: 'thumbnail5.png' },
          { id: 5, title: 'React.js 入门', date: '2024-06-16', thumbnail: 'thumbnail5.png' },
          { id: 5, title: 'React.js 入门', date: '2024-06-16', thumbnail: 'thumbnail5.png' },
          { id: 5, title: 'TypeScript 最佳实践', date: '2024-06-24', thumbnail: 'thumbnail5.png' },
          { id: 5, title: 'React.js 入门', date: '2024-06-16', thumbnail: 'thumbnail5.png' },
          { id: 5, title: 'TypeScript 最佳实践', date: '2024-06-16', thumbnail: 'thumbnail5.png' },
          { id: 5, title: 'React.js 入门', date: '2024-06-17', thumbnail: 'thumbnail5.png' },
          { id: 5, title: 'React.js 入门', date: '2024-06-22', thumbnail: 'thumbnail5.png' },
          { id: 5, title: 'React.js 入门', date: '2024-06-24', thumbnail: 'thumbnail5.png' },
          { id: 5, title: 'TReact.js 入门', date: '2024-06-16', thumbnail: 'thumbnail5.png' }
        ]
        this.historyRecords = mockData // 将模拟的历史记录数据赋值给 historyRecords
      } catch (error) {
        console.error('Error fetching history records:', error)
      }
    },
    // 判断日期是否为今天的辅助函数
    isToday (dateString) {
      const today = new Date()

      const date = new Date(dateString)
      // eslint-disable-next-line eqeqeq
      return date.getFullYear() === today.getFullYear() &&
               // eslint-disable-next-line eqeqeq
               date.getMonth() === today.getMonth() &&
               date.getDate() === today.getDate()
    },
    // 判断日期是否为昨天的辅助函数
    isYesterday (dateString) {
      const yesterday = new Date()
      yesterday.setDate(yesterday.getDate() - 1)
      const date = new Date(dateString)
      return date.getFullYear() === yesterday.getFullYear() &&
               date.getMonth() === yesterday.getMonth() &&
               date.getDate() === yesterday.getDate()
    },
    // 判断日期是否为本周的辅助函数
    isThisWeek (dateString) {
      const today = new Date()
      const date = new Date(dateString)
      const firstDayOfWeek = new Date(today.setDate(today.getDate() - today.getDay()))
      console.log(firstDayOfWeek)
      return date.getFullYear() === today.getFullYear() &&
                    date.getMonth() === today.getMonth() &&
                    today.getDate() - date.getDate() < 7
    }
  }
}
</script>

  <style scoped>
  .history {
    font-family: Arial, sans-serif;
    padding: 20px;
  }

  .history h2 {
    margin-top: 20px;
    font-size: 18px;
  }

  .history-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  .history-item {
    width: 200px;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .history-item img {
    width: 100%;
    height: auto;
    border-radius: 4px;
  }

  .history-info {
    margin-top: 10px;
  }

  .history-info h3 {
    font-size: 16px;
    margin: 0;
  }

  .history-info p {
    font-size: 14px;
    color: #666;
    margin: 5px 0 0;
  }

  .no-history {
    text-align: center;
    width: 100%;
    padding: 20px;
    font-size: 18px;
    color: #999;
  }
  </style>
