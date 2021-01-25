import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/pages/PageHome";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/animals/create",
    name: "CreateAnimal",
    component: () =>
      import(
        /* webpackChunkName: "CreateAnimal"
         */ "@/pages/pageAnimal/CreateAnimal"
      ),
  },
  {
    path: "/animals/list",
    name: "ListAnimal",
    component: () =>
      import(
        /* webpackChunkName: "ListAnimal"
         */ "@/pages/pageAnimal/ListAnimal"
      ),
  },
  {
    path: "/people/create",
    name: "CreatePerson",
    component: () =>
      import(
        /* webpackChunkName: "CreatePerson"
         */ "@/pages/pagePerson/CreatePerson"
      ),
  },
  {
    path: "/people/list",
    name: "ListPerson",
    component: () =>
      import(
        /* webpackChunkName: "ListPerson"
         */ "@/pages/pagePerson/ListPerson"
      ),
  },
  {
    path: "/batches/create",
    name: "CreateBatch",
    component: () =>
      import(
        /* webpackChunkName: "CreateBatch"
         */ "@/pages/pageBatch/CreateBatch"
      ),
  },
  {
    path: "/batches/list",
    name: "ListBatch",
    component: () =>
      import(
        /* webpackChunkName: "ListBatch"
         */ "@/pages/pageBatch/ListBatch"
      ),
  },
  {
    path: "/registers/create",
    name: "CreateRegister",
    component: () =>
      import(
        /* webpackChunkName: "ListBatch"
         */ "@/pages/pageRegister/CreateRegister"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
