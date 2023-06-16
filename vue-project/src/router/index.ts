import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: { name: 'home' } // 将默认路由指定为 home 子路由
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/mainPage/header.vue'),
      children: [
        {
          path: 'AttractionManage',
          name: 'AttractionManage',
          component: ()=>import('../views/attractionPages/index.vue'),
        },
        {
          path: 'deviceManage',
          name: 'deviceManage',
          component: ()=>import('../views/devicePages/index.vue'),
        },
        {
          path: 'PopularizationManage',
          name: 'PopularizationManage',
          component: ()=>import('../views/popularizationPages/index.vue'),
        },
        {
          path: 'evaluationManage',
          name: 'evaluationManage',
          component: ()=>import('../views/evaluationPages/index.vue'),
        },
        {
          path: 'VisitorManage',
          name: 'VisitorManage',
          component: () => import('../views/visitorsPages/index.vue'),
        },
        {
          path: 'ProtectionManage',
          name: 'ProtectionManage',
          component: () => import('../views/protectionPages/index.vue'),
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    }
  ]
})
router.beforeEach((to, from, next) => {
  const token: string | null = localStorage.getItem("Authorization")
  if (!token && to.path !== "/login") {
    next("/login")
  }
  else {
    next()
  }
})
export default router
