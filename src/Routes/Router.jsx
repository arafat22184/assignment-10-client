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
import GroupDetails from "../Pages/GroupDetails";
import UpdateGroup from "../Pages/UpdateGroup";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
        loader: () =>
          fetch("https://assignment-10-server-lac-sigma.vercel.app/sixGroups"),
        hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
      },
      {
        path: "/groups",
        Component: AllGroups,
        loader: () =>
          fetch("https://assignment-10-server-lac-sigma.vercel.app/allGroups"),
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
        loader: () =>
          fetch("https://assignment-10-server-lac-sigma.vercel.app/allGroups"),
        hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
      },
      {
        path: "/groups/:id",
        element: (
          <PrivateRoute>
            <GroupDetails></GroupDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-server-lac-sigma.vercel.app/allGroups/${params.id}`
          ),
        hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
      },
      {
        path: "/updateGroup/:id",
        element: (
          <PrivateRoute>
            <UpdateGroup></UpdateGroup>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-server-lac-sigma.vercel.app/allGroups/${params.id}`
          ),
        hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
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
    errorElement: <ErrorPage></ErrorPage>,
  },
]);

export default router;
