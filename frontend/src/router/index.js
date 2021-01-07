import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/PageHome";
import CreateAnimal from "../pages/pageAnimal/CreateAnimal";
import CreatePerson from "../pages/pagePerson/CreatePerson";
import CreateBatch from "../pages/pageBatch/CreateBatch";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/animal/create",
    name: "CreateAnimal",
    component: CreateAnimal,
  },
  {
    path: "/person/create",
    name: "CreatePerson",
    component: CreatePerson,
  },
  {
    path: "/batch/create",
    name: "CreateBatch",
    component: CreateBatch,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
