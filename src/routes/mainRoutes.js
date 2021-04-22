import { lazy } from "react";

export const mainRoutes = [
  {
    name: "Home",
    path: "/",
    exact: true,
    component: lazy(() => import("../pages/HomePage")),
  },
  {
    name: "Admin",
    path: "/admin",
    exact: false,
    component: lazy(() => import("../pages/AdminPage")),
  },
  {
    name: "Products",
    path: "/allproducts",
    exact: false,
    component: lazy(() => import("../pages/ProductsPage")),
  },
  {
    name: "Cart",
    path: "/cart",
    exact: true,
    component: lazy(() => import("../pages/CartPage")),
  },
];
