import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Groups from "../Pages/Groups";
import CreateGroup from "../Pages/CreateGroup";
import MyGroups from "../Pages/MyGroups";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/groups",
        Component: Groups,
      },
      {
        path: "/createGroup",
        Component: CreateGroup,
      },
      {
        path: "/myGroups",
        Component: MyGroups,
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
