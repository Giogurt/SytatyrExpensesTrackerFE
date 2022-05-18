import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store/index.js"

Vue.use(VueRouter);


const routes = [
  {
    path: "/expenses",
    name: "Expenses",
    component: () =>
      import(/* webpackChunkName: "expenses" */ "@/views/Expenses.vue"),
      meta: {requiresAuth: true},
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/About.vue"),
      meta: {requiresAuth: true},
  },
  {
    path: "/reports",
    name: "Reports",
    component: () =>
      import(/* webpackChunkName: "reports" */ "@/views/ReportsView.vue"),
      meta: {requiresAuth: true},
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

// check if the user is authenticated before using the
// route. uses metadata "requiresAuth"
router.beforeEach(async(to,_, next) => {
  console.log("TOKEN: " + store.state.token);
  console.log(to.name);
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    console.log("Intente entrar a ruta priv");
   if (store.state.token === "") {
    console.log("No pude entrar a ruta privada");
    await setTimeout(() => {console.log("entre")}, 5000);
    next('/');
    }
    console.log("Si pude entrar a ruta priv");
    await setTimeout(() => {console.log("entre")}, 5000);
    next();
  } else {
    console.log("Intente entrar a ruta publica");
    await setTimeout(() => {console.log("entre")}, 5000);
    next();
  }
});

// // // prevent authenticated users to go back to signup or login pages.
// // // uses metadata "guest"
// router.beforeEach(async(to,_, next) => {
//    if (to.matched.some((record) => record.meta.guest)) {
//     await setTimeout(() => {console.log("entre")}, 5000);
//     console.log(to.name);
//       if (store.state.token !== "") {
//        next("/expenses");
//        return;
//      }
//      next();
//    } else {
//      next();
//    }
//  });

export default router;