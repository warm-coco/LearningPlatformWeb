import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from '../views/auth/auth.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Auth',
  component: Auth
},
{
  path: '/layout/home',
  name: '',
  component: () =>
    import('../views/layout/home.vue')
},
{
  path: '/course/course',
  name: 'course',
  component: () =>
    import('../views/course/course.vue')
},
{
  path: '/personage/template',
  name: 'template',
  component: () =>
    import('../views/personage/template.vue')
}
]

const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return { selector: to.hash }
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
