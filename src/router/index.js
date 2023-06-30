import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import LinkView from "../views/LinkView.vue";
import OtherView from "../views/OtherView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/other",
      name: "other",
      component: OtherView,
    },
    {
      path: "/:id",
      name: "link",
      component: LinkView,
    },
  ],
});

export default router;
