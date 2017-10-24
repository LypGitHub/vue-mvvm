import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/components/Test'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hello',
      component: Hello
    },
    {
      path: '/test',
      name: 'test',
      meta: {
        needLogin: true,
        needTeacher: true
      },
      component: Test
    }
  ]
})
