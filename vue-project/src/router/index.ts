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
          component: ()=>import('../views/attractionPages/AttractionManage.vue'),
        },
        {
          path: 'VisitorManage',
          name: 'VisitorManage',
          component: () => import('../views/visitorsPages/index.vue'),
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginView.vue')
    }
  ]
})
router.beforeEach((to, from, next) => {
  const token: string | null = localStorage.getItem("token")
  if (!token && to.path !== "/login") {
    next("/login")
  }
  else {
    next()
  }
})
export default router
