import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Users/Login/Login";
import Register from "../Pages/Users/Register/Register";
import Test from "../Test/Test";

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
        },
        {
          path:'/test',
          element:<Test></Test>
        }

      ]
    },
  ]);

  export default router;