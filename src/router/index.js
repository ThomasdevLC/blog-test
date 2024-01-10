import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import EventsView from "../views/EventsView.vue";
import InfosView from "../views/InfosView.vue";
import NewsView from "../views/NewsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/events",
      name: "events",
      component: EventsView,
    },
    ,
    {
      path: "/infos",
      name: "infos",
      component: InfosView,
    },
    {
      path: "/news",
      name: "news",
      component: NewsView,
    },
  ],
});

export default router;
