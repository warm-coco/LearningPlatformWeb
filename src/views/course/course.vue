<template>
  <div class="carousel-wrapper">
    <Slideshow />
    <CourseList />
  </div>
</template>

<script>
import Slideshow from './Slide.vue'
import CourseList from './CourseList.vue'

export default {
  components: {
    Slideshow,
    CourseList
  }
}
</script>

<style scoped>
.carousel-wrapper {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin: 20px;
}
</style>
