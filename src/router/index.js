import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/expenses",
    name: "Expenses",
    component: () =>
      import(/* webpackChunkName: "expenses" */ "@/views/Expenses.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/About.vue"),
  },
  {
    path: "/reports",
    name: "Reports",
    component: () =>
      import(/* webpackChunkName: "reports" */ "@/views/ReportsView.vue"),
  },
  {
    path: "/",
    name: "Login",
    component: () =>
    import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
