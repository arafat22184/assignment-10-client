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
import AboutUs from "../Pages/AboutUs";
import ContactUs from "../Pages/ContactUs";
import DashBoardLayout from "../Layouts/DashBoardLayout";
import DashboardHome from "../Pages/DashboardHome";
import UpdateProfile from "../Pages/UpdateProfile";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("http://localhost:3000/sixGroups"),
        hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
      },
      {
        path: "/groups",
        Component: AllGroups,
        loader: () => fetch("http://localhost:3000/allGroups"),
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
          fetch(`http://localhost:3000/allGroups/${params.id}`),
        hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
      },

      {
        path: "/about",
        Component: AboutUs,
      },
      {
        path: "/contactUs",
        Component: ContactUs,
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
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashBoardLayout></DashBoardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        Component: DashboardHome,
        loader: () => fetch("http://localhost:3000/allGroups"),
        hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
      },
      {
        path: "/dashboard/myGroups",
        Component: MyGroups,
        loader: () => fetch("http://localhost:3000/allGroups"),
        hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
      },
      {
        path: "/dashboard/createGroup",
        Component: CreateGroup,
      },
      {
        path: "/dashboard/updateGroup/:id",
        Component: UpdateGroup,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/allGroups/${params.id}`),
        hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
      },
      {
        path: "/dashboard/updateProfile",
        Component: UpdateProfile,
      },
    ],
  },
]);

export default router;
