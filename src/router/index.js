import Home from "@/pages/Home";
import Products from "@/pages/Products";
import AboutUs from "@/pages/AboutUs";
import Contacts from "@/pages/Contacts";
import Events from "@/pages/Events";

import { createRouter, createWebHashHistory } from "vue-router";

function redirect() {

  return '/home'

}

const routes = [
  { path: "/:catchAll(.*)", redirect: redirect() },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/products",
    name: "Products",
    component: Products,
  },
  {
    path: "/about-us",
    name: "AboutUs",
    component: AboutUs,
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: Contacts,
  },
  {
    path: "/events",
    name: "Events",
    component: Events,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;