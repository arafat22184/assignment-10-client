import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import CreateGroup from "../Pages/CreateGroup";
import MyGroups from "../Pages/MyGroups";
import PrivateRoute from "../Provider/PrivateRoute";
import LoadingSpinner from "../Components/LoadingSpinner";
import AllGroups from "../Pages/AllGroups";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("http://localhost:3000/allGroups"),
        hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
      },
      {
        path: "/groups",
        Component: AllGroups,
        loader: () => fetch("http://localhost:3000/allGroups"),
        hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
      },
      {
        path: "/createGroup",
        element: (
          <PrivateRoute>
            <CreateGroup></CreateGroup>
          </PrivateRoute>
        ),
      },
      {
        path: "/myGroups",
        element: (
          <PrivateRoute>
            <MyGroups></MyGroups>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
]);

export default router;
