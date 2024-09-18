import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    async lazy() {
      const { Dashboard } = await import("./pages/dashboard");
      return { Component: Dashboard };
    },
  },
  {
    path: "/login",
    async lazy() {
      const { Login } = await import("./pages/login");
      return { Component: Login };
    },
  },
]);
