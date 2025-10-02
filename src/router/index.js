import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Post from "@/views/Post.vue";
import User from "@/views/User.vue";
import Product from "@/views/Product.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/product/:id",
    component: Product,
  },
  {
    path: "/user/:name",
    component: User,
  },
  {
    path: "/post/:postId",
    component: Post,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
