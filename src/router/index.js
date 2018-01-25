import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/HelloWorld'
import Login from '@/pages/Login'
import store from '../store'

Vue.use(Router)

const vueRouter = new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      meta: {
        requireAuth: true // 是否需要信息验证
      },
      component: HelloWorld
    }
  ]
})

vueRouter.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    // 判断该路由是否需要登录权限
    // console.log(store)
      if (store.state.root.token) {  // 通过vuex state获取当前的token是否存在
          next()
      } else {
          alert('请登录')
          next({
              path: '/'
          })
      }
  } else {
      next()
  }
})

export default vueRouter
