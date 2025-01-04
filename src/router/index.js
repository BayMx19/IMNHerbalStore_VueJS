import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FemileView from "@/views/FemileView.vue";
import GomilkView from "@/views/GomilkView.vue";
import HitawaView from "@/views/HitawaView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/gomilk",
      name: "Gomilk",
      component: GomilkView,
    },
    {
      path: "/hitawa",
      name: "Hitawa",
      component: HitawaView,
    },
    {
      path: "/femile",
      name: "Femile",
      component: FemileView,
    },
  ],
});

export default router;
