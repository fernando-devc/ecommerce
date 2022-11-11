const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },
  {
    path: "/checkout",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/checkoutPage.vue") }],
  },
  {
    path: "/success",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/successPage.vue") }],
  },
  {
    path: "/product/:slug",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/ProductPage.vue") }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
