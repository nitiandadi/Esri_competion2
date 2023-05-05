"use strict";
exports.__esModule = true;
var vue_router_1 = require("vue-router");
var router = vue_router_1.createRouter({
    history: vue_router_1.createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: { name: 'home' } // 将默认路由指定为 home 子路由
        },
        {
            path: '/home',
            name: 'home',
            component: function () { return Promise.resolve().then(function () { return require('../views/mainPage/header.vue'); }); },
            children: [
                {
                    path: 'AttractionManage',
                    name: 'AttractionManage',
                    component: function () { return Promise.resolve().then(function () { return require('../components/AttractionManage.vue'); }); }
                },
                {
                    path: 'VisitorManage',
                    name: 'VisitorManage',
                    component: function () { return Promise.resolve().then(function () { return require('../views/visitorsPages/index.vue'); }); }
                },
            ]
        },
        {
            path: '/login',
            name: 'login',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: function () { return Promise.resolve().then(function () { return require('../views/LoginView.vue'); }); }
        }
    ]
});
router.beforeEach(function (to, from, next) {
    var token = localStorage.getItem("token");
    if (!token && to.path !== "/login") {
        next("/login");
    }
    else {
        next();
    }
});
exports["default"] = router;
