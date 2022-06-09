import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import VictimRoulette from "../views/VictimRoulette.vue";
import Jokes from "../views/Jokes.vue";
import JokeInfo from "../views/JokeInfo.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "VictimRoulette",
    component: VictimRoulette,
  },
  {
    path: "/Jokes",
    name: "Jokes",
    component: Jokes,
  },
  {
    path: "/jokeInfo",
    name: "jokeInfo",
    component: JokeInfo,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
