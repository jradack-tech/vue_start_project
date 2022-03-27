import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "@/views/authentication/LoginView";
import appRoutes from "./appRoutes";
import ApplicationLayout from "@/layouts/ApplicationLayout";
import NotFound from "@/views/NotFound";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      layout: "MarketingLayout",
    },
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
    meta: {
      layout: "ApplicationLayout",
    },
  },
  {
    name: "Application",
    path: "/app",
    component: ApplicationLayout,
    children: [...appRoutes],
    meta: {
      layout: "none",
      requiresAuth: true,
    },
  },
  {
    path: "/:catchAll(.*)",
    name: "Not Found",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
