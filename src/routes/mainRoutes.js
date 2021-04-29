import { lazy } from "react";

export const mainRoutes = [
  {
    name: "home",
    path: "/",
    exact: true,
    component: lazy(() => import("../pages/HomePage")),
    isPrivate: false,
    isRestricted: false,
  },
  {
    name: "admin",
    path: "/admin",
    exact: false,
    component: lazy(() => import("../pages/AdminPage")),
    isPrivate: true,
    isRestricted: false,
  },
  {
    name: "products",
    path: "/allproducts",
    exact: false,
    component: lazy(() => import("../pages/ProductsPage")),
    isPrivate: false,
    isRestricted: false,
  },
  {
    name: "cart",
    path: "/cart",
    exact: true,
    component: lazy(() => import("../pages/CartPage")),
    isPrivate: false,
    isRestricted: false,
  },
  {
    name: "registration",
    path: "/registration",
    exact: true,
    component: lazy(() => import("../pages/AuthPage")),
    isPrivate: false,
    isRestricted: true,
  },
  {
    name: "login",
    path: "/login",
    exact: true,
    component: lazy(() => import("../pages/AuthPage")),
    isPrivate: false,
    isRestricted: true,
  },
];
