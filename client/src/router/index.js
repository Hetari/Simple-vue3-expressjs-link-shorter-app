import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import ShortLink from "@/views/ShortLink.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/signin",
    name: "login",
    component: Login,
  },
  {
    path: "/signup",
    name: "register",
    component: Register,
  },
  {
    path: "/short",
    name: "short",
    component: ShortLink,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
