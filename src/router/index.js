import Home from "@/pages/Home";
import Products from "@/pages/Products";
import ProductsPost from "@/pages/ProductsPost";
import ProductsStelage from "@/pages/ProductsStelage";
import ProductsBoxes from "@/pages/ProductsBoxes";
import ProductsFridges from "@/pages/ProductsFridges";
import ProductsSelf from "@/pages/ProductsSelf";
import ProductsStorage from "@/pages/ProductsStorage";
import ProductsStorageRooms from "@/pages/ProductsStorageRooms";
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
  {
    path: "/products/post",
    name: "ProductsPost",
    component: ProductsPost,
  },
  {
    path: "/products/stelage",
    name: "ProductsStelage",
    component: ProductsStelage,
  },
  {
    path: "/products/boxes",
    name: "ProductsBoxes",
    component: ProductsBoxes,
  },
  {
    path: "/products/fridges",
    name: "ProductsFridges",
    component: ProductsFridges,
  },
  {
    path: "/products/self",
    name: "ProductsSelf",
    component: ProductsSelf,
  },
  {
    path: "/products/storage",
    name: "ProductsStorage",
    component: ProductsStorage,
  },
  {
    path: "/products/storage-rooms",
    name: "ProductsStorageRooms",
    component: ProductsStorageRooms,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;