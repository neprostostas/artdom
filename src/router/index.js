import Home from "@/pages/Home";
import Products from "@/pages/Products";
import ProductsPost from "@/pages/ProductsPost";
import ProductsStelage from "@/pages/ProductsStelage";
import ProductsBoxes from "@/pages/ProductsBoxes";
import ProductsFridges from "@/pages/ProductsFridges";
import ProductsSelf from "@/pages/ProductsSelf";
import ProductsStorage from "@/pages/ProductsStorage";
import ProductsStorageRooms from "@/pages/ProductsStorageRooms";
import News from "@/pages/News";
import Contacts from "@/pages/Contacts";
import Development from "@/pages/Development";
import Downloads from "@/pages/Downloads";

import { createRouter, createWebHistory } from "vue-router";

function redirect() {

  return '/'

}

const routes = [
  { path: "/:catchAll(.*)", redirect: redirect() },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/products",
    name: "Products",
    component: Products,
  },
  {
    path: "/news",
    name: "News",
    component: News,
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: Contacts,
  },
  {
    path: "/development",
    name: "Development",
    component: Development,
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
  {
    path: "/downloads",
    name: "Downloads",
    component: Downloads,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;