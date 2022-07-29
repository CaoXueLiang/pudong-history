import Vue from "vue";
import VueRouter from "vue-router";

const EconomyView = () => import("../views/EconomyView.vue");
const IndustryView = () => import("../views/IndustryView.vue");
const InheritanceView = () => import("../views/InheritanceView.vue");
const TimeLine = () => import("../views/TimeLine.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "EconomyView",
    component: EconomyView,
  },
  {
    path: "/IndustryView",
    name: "IndustryView",
    component: IndustryView,
  },
  {
    path: "/InheritanceView",
    name: "InheritanceView",
    component: InheritanceView,
  },
  {
    path: "/TimeLine",
    name: "TimeLine",
    component: TimeLine,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
