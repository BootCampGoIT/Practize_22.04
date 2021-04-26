import { lazy } from "react";

export const mainRoutes = [
  {
    name: "Home",
    path: "/",
    exact: true,
    component: lazy(() => import("../pages/HomePage")),
    isPrivate: false,
    isRestricted: false,
  },
  {
    name: "Admin",
    path: "/admin",
    exact: false,
    component: lazy(() => import("../pages/AdminPage")),
    isPrivate: true,
    isRestricted: false,
  },
  {
    name: "Products",
    path: "/allproducts",
    exact: false,
    component: lazy(() => import("../pages/ProductsPage")),
    isPrivate: false,
    isRestricted: false,
  },
  {
    name: "Cart",
    path: "/cart",
    exact: true,
    component: lazy(() => import("../pages/CartPage")),
    isPrivate: false,
    isRestricted: false,
  },
  {
    name: "Registration",
    path: "/registration",
    exact: true,
    component: lazy(() => import("../pages/AuthPage")),
    isPrivate: false,
    isRestricted: true,
  },
  {
    name: "Login",
    path: "/login",
    exact: true,
    component: lazy(() => import("../pages/AuthPage")),
    isPrivate: false,
    isRestricted: true,
  },
];
