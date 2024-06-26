<template>
    <div class="chart-container">
      <div ref="chart" class="chart"></div>
    </div>
  </template>

<script>
import * as echarts from 'echarts'

export default {
  name: 'Graph',
  data () {
    return {
      myChart: null
    }
  },
  mounted () {
    this.initChart()
  },
  beforeDestroy () {
    if (this.myChart) {
      this.myChart.dispose()
    }
  },
  methods: {
    initChart () {
      // 初始化 ECharts 实例
      this.myChart = echarts.init(this.$refs.chart, 'dark')

      // 模拟数据
      const graph = {
        nodes: [
          {
            id: '0',
            name: 'Myriel',
            symbolSize: 30,
            x: 200,
            y: 200,
            value: 28.685715,
            category: 0,
            symbol: 'image://https://img2.baidu.com/it/u=3874982975,1919844445&fm=253&fmt=auto&app=120&f=JPEG?w=296&h=299',
            link: 'https://www.baidu.com/s?wd=java&rsv_spt=1&rsv_iqid=0xe1c9ba6e0011f1ba&issp=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8&tn=49055317_30_hao_pg&rsv_dl=tb&rsv_enter=1&rsv_sug3=5&rsv_sug1=2&rsv_sug7=100&rsv_sug2=0&rsv_btype=i&prefixsug=java&rsp=5&inputT=941&rsv_sug4=1571&rsv_sug=1'
          },
          {
            id: '1',
            name: 'Napoleon',
            symbolSize: 30,
            x: 200,
            y: 205,
            value: 4,
            category: 1,
            symbol: 'image://https://img2.baidu.com/it/u=3874982975,1919844445&fm=253&fmt=auto&app=120&f=JPEG?w=296&h=299',
            link: 'https://www.baidu.com/s?wd=java&rsv_spt=1&rsv_iqid=0xe1c9ba6e0011f1ba&issp=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8&tn=49055317_30_hao_pg&rsv_dl=tb&rsv_enter=1&rsv_sug3=5&rsv_sug1=2&rsv_sug7=100&rsv_sug2=0&rsv_btype=i&prefixsug=java&rsp=5&inputT=941&rsv_sug4=1571&rsv_sug=1'
          },
          {
            id: '2',
            name: 'Napoleon',
            symbolSize: 30,
            x: 220,
            y: 200,
            value: 4,
            category: 1,
            symbol: 'image://https://img2.baidu.com/it/u=3874982975,1919844445&fm=253&fmt=auto&app=120&f=JPEG?w=296&h=299',
            link: 'https://www.baidu.com/s?wd=java&rsv_spt=1&rsv_iqid=0xe1c9ba6e0011f1ba&issp=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8&tn=49055317_30_hao_pg&rsv_dl=tb&rsv_enter=1&rsv_sug3=5&rsv_sug1=2&rsv_sug7=100&rsv_sug2=0&rsv_btype=i&prefixsug=java&rsp=5&inputT=941&rsv_sug4=1571&rsv_sug=1'
          }
        ],
        links: [
          {
            source: '1',
            target: '0'
          },
          {
            source: '1',
            target: '2'
          }
        ],
        categories: [
          {
            name: 'A'
          },
          {
            name: 'B'
          }
        ]
      }

      const option = {
        tooltip: {
          trigger: 'item',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999',
              width: 1,
              type: 'dashed'
            }
          }
        },
        legend: [
          {
            data: graph.categories.map(function (a) {
              return a.name
            })
          }
        ],
        series: [
          {
            name: 'Les Miserables',
            type: 'graph',
            layout: 'none',
            data: graph.nodes,
            links: graph.links,
            categories: graph.categories,
            roam: true,
            label: {
              show: false,
              position: 'right',
              formatter: '{b}'
            },
            labelLayout: {
              hideOverlap: true
            },
            scaleLimit: {
              min: 0.4,
              max: 2
            },
            lineStyle: {
              color: 'source',
              curveness: 0.3
            },
            emphasis: {
              focus: 'adjacency',
              lineStyle: {
                width: 10
              }
            }
          }
        ],
        xAxis: {
          type: 'value',
          show: false,
          splitLine: { show: true }
        },
        yAxis: {
          type: 'value',
          show: false,
          splitLine: { show: true }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        }
      }

      this.myChart.setOption(option)

      // 绑定点击事件
      this.myChart.on('click', function (params) {
        if (params.dataType === 'node') {
          console.log('Node clicked:', params.data)
          alert('Node clicked: ' + params.data.name)
        }
      })
    }
  }
}
</script>

  <style scoped>
  .chart-container {
    width: 100%;
    height: 600px;
    border: 2px solid #daffcb; /* 添加边框样式 */
  }

  .chart {
    width: 100%;
    height: 100%;
  }
  </style>
