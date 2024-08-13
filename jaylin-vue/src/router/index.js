import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'home',
      path: '/',
      component: () => import('@/views/TheHome.vue')
      //  () => { return }
      //() => sentence directly
      /*
      component "default" in record with path "/" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.
      */
    },
    {
      name: 'login',
      path: '/login',
      component: () => import('@/components/TheLogin.vue')
      //  () => { return }
      //() => sentence directly
      /*
      component "default" in record with path "/" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.
      */
    }
  ]
})

export default router
