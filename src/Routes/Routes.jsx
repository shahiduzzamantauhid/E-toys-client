import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home.jsx";
import Main from "../Layout/Main.jsx";
import Login from "../Login/Login.jsx";
import Signup from "../Signup/Signup.jsx";
import Addtoys from "../Addtoys/Addtoys.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import Blog from "../Blogs/Blog.jsx";
import Mytoys from "../My toys/Mytoys.jsx";
import Page404 from "../Page404/page404.jsx";
import SingleProduct from "../SngleProduct/SingleProduct.jsx";
import Alltable from "../AllTable/Alltable.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/alltoys",
        element: <Alltable></Alltable>,
      },
      {
        path: "/blogs",
        element: <Blog />,
      },
      {
        path: "/addtoys",
        element: (
          <PrivateRoute>
            <Addtoys />
          </PrivateRoute>
        ),
      },
      {
        path: "/mytoys",
        element: (
          <PrivateRoute>
            <Mytoys />
          </PrivateRoute>
        ),
      },
      {
        path: "/singleproduct/:id",
        element: (
          <PrivateRoute>
            <SingleProduct />
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          return fetch(
            `https://toyserver-eosin.vercel.app/singleproduct/${params.id}`
          );
        },
      },
    ],
  },

  {
    path: "/*",
    element: <Page404 />,
  },
]);

export default router;
