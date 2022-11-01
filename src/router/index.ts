import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import sidebar from "../layout/sidebar.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: sidebar,
      name: "home",
      children: [
        {
          path: "/welcome",
          name: "Welcome",
          component: () => HomeView,
        },
      ],
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
