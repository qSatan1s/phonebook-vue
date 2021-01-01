import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";

import auth from "../middleware/auth.middleware.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      middleware: [auth]
    }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { requiresAuth: false }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) {
    return next();
  }
  const middleware = to.meta.middleware;
  const context = {
    to,
    from,
    next,
    store
  };
  return middleware[0]({
    ...context
  });
});

export default router;
