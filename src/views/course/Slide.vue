<template>
  <div class="swiper-container">

  <div class="swiper">
    <ul class="pic">
        <li v-for="(slide, index) in displayedSlides" :key="index" :class="{ 'now': index === currentSlideIndex, 'prev': index === prevSlideIndex, 'next': index === nextSlideIndex }">
          <a href="#"><img :src="slide.src" :alt="slide.alt" /></a>
        </li>
      </ul>

    <ol class="cricle"></ol>

    <div class="btns">
      <a href="javascript:;" class="leftbtn" style="float: left; margin-left: 6px;"></a>
      <a href="javascript:;" class="rightbtn" style="float: right; margin-right: 6px;"></a>
    </div>

    <div class="leftBox"></div>
    <div class="rightBox"></div>

  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      slides: [
        { src: require('@/assets/SlideImg/t1.png'), alt: 'Image 1' },
        { src: require('@/assets/SlideImg/t2.png'), alt: 'Image 2' },
        { src: require('@/assets/SlideImg/t3.png'), alt: 'Image 3' },
        { src: require('@/assets/SlideImg/t4.png'), alt: 'Image 4' }
      ],
      currentSlideIndex: 0, // 当前显示的图片索引
      intervalId: null // 定时器ID
    }
  },
  computed: {
    nextSlideIndex () {
      return (this.currentSlideIndex + 1) % this.slides.length
    },
    prevSlideIndex () {
      return (this.currentSlideIndex + this.slides.length - 1) % this.slides.length
    },
    displayedSlides () {
      return [this.slides[this.prevSlideIndex], this.slides[this.currentSlideIndex], this.slides[this.nextSlideIndex]]
    },
    // 计算轮播指示器的样式
    circleClasses () {
      return this.slides.map((_, index) => ({
        _bg: index === this.currentSlideIndex
      }))
    }
  },
  methods: {
    // 自动轮播逻辑
    startAutoPlay () {
      this.intervalId = setInterval(() => {
        this.goNext()
      }, 3000)
    },
    // 停止轮播
    stopAutoPlay () {
      clearInterval(this.intervalId)
      this.intervalId = null
    },
    // 切换到下一张
    goNext () {
      this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length
    },
    // 切换到上一张
    goPrev () {
      this.currentSlideIndex = (this.currentSlideIndex + this.slides.length - 1) % this.slides.length
    },
    // 处理鼠标悬停事件
    handleHover (isHovering) {
      if (isHovering) {
        this.stopAutoPlay()
      } else {
        this.startAutoPlay()
      }
    },
    // 轮播指示器点击处理
    handleIndicatorClick (index) {
      this.currentSlideIndex = index
    }
  },
  mounted () {
    this.startAutoPlay()
    // 假设这里可以通过事件委托等方式处理轮播容器的鼠标悬停，但具体实现需根据项目结构调整
    // 例如，可以在父组件中处理'.swiper'的'mouseenter'和'mouseleave'事件
  },
  beforeUnmount () {
    this.stopAutoPlay()
  }
}
</script>

<style scoped>
html,
body,
ul,
ol,
div {
    margin: 0;
    padding: 0;
}

li {
    list-style: none;
}

a {
    text-decoration: none;
}

img {
    border: 0;
}
body{background-color: #151515}
.swiper {
    width: 1200px;
    height: 380px;
    margin: 50px auto;
    position: relative;
}

.swiper .pic {
    width: 100%;
    height: 100%;
    position: relative;
}

.swiper .pic li {
    -webkit-transition: all 0.8s;
    -moz-transition: all 0.8s;
    -o-transition: all 0.8s;
    -ms-transition: all 0.8s;
    transition: all 0.8s;
    width: 660px;
    height: 300px;
    position: absolute;
    top: 30px;
    left: 50%;
    margin-left: -350px;
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 2px 2px 6px 1px rgba(0, 0, 0, 0.5);
}

.swiper .pic li img {
    width: 100%;
    height: 100%;
}

.now {
    z-index: 9;
    -webkit-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -o-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
}

.next {
    z-index: 6;
    -webkit-transform: translateX(300px);
    -moz-transform: translateX(300px);
    -o-transform: translateX(300px);
    -ms-transform: translateX(300px);
    transform: translateX(300px);
}

.prev {
    z-index: 6;
    -webkit-transform: translateX(-260px);
    -moz-transform: translateX(-260px);
    -o-transform: translateX(-260px);
    -ms-transform: translateX(-260px);
    transform: translateX(-260px);
}

._bg {
    background-color: red !important;
}

.swiper .cricle {
    height: 16px;
    position: absolute;
    bottom: 0;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
}

.swiper .cricle li {
    float: left;
    width: 14px;
    height: 14px;
    background-color: #cccccc;
    margin-right: 6px;
    border-radius: 50%;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
}

.swiper .btns {
    display: none;
    position: absolute;
    left: 0;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 100%;
    height: 38px;
    z-index: 9;
}

.swiper .btns .leftbtn,
.swiper .btns .rightbtn {
    height: 100%;
    width: 38px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.5);
}

.swiper .btns .leftbtn::after,
.swiper .btns .rightbtn::after {
    content: "";
    display: block;
    width: 18px;
    height: 18px;
    border-left: 3px solid #ffffff;
    border-top: 3px solid #ffffff;

}

.swiper .btns .leftbtn::after {
    -webkit-transform: translate(12px, 8px) rotate(-45deg);
    -moz-transform: translate(12px, 8px) rotate(-45deg);
    -o-transform: translate(12px, 8px) rotate(-45deg);
    -ms-transform: translate(12px, 8px) rotate(-45deg);
    transform: translate(12px, 8px) rotate(-45deg);
}

.swiper .btns .rightbtn::after {
    -webkit-transform: translate(4px, 8px) rotate(135deg);
    -moz-transform: translate(4px, 8px) rotate(135deg);
    -o-transform: translate(4px, 8px) rotate(135deg);
    -ms-transform: translate(4px, 8px) rotate(135deg);
    transform: translate(4px, 8px) rotate(135deg);
}

.leftBox,
.rightBox {
    height: 300px;
    position: absolute;
    top: 30px;
    z-index: 99;
}

.leftBox {
    width: 182px;
    left: 0;
}

.rightBox {
    width: 222px;
    right: 0;
}
</style>
