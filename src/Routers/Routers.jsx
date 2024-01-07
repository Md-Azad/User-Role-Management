import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Users/Login/Login";
import Register from "../Pages/Users/Register/Register";
import Dashboard from "../layout/Dashboard";
import DashboardHome from "../Pages/Dashboard/Dashboard/DashboardHome";
import UserManagement from "../Pages/Dashboard/Access/UserManagement/Usermanagement";
import RoleManagement from "../Pages/Dashboard/Access/RoleManagement/RoleManagement";
import PostManagement from "../Pages/Dashboard/ContentManagement/PostManagement/PostManagement";
import NewPost from "../Pages/Dashboard/ContentManagement/PostManagement/NewPost";
import Permit from "../Pages/Dashboard/Access/UserManagement/Permit";
import PrivateRoutes from "./PrivateRoutes";
import Manage from "../Pages/Dashboard/Manage/Manage";


  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        }
      ]
    },
    {
      path:"/dashboard",
      element:<PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
      children: [
        {
          path:"/dashboard",
          element: <DashboardHome></DashboardHome>
        },
        {
          path: "/dashboard/usermanage",
          element: <UserManagement></UserManagement>
        },
        {
          path: "/dashboard/manage",
          element: <Manage></Manage>
        },
        {
          path: "/dashboard/rolemanage",
          element: <RoleManagement></RoleManagement>
        },
        {
          path: "/dashboard/postmanage",
          element: <PostManagement></PostManagement>
        },
        {
          path: "/dashboard/newpost",
          element:<NewPost></NewPost>
        },
        {
          path: "/dashboard/roleedit/:email",
          element: <Permit></Permit>
        }

      ]
    }
  ]);

  export default router;