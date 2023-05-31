import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home.jsx"
import Main from "../Layout/Main.jsx";
import About from "../About/About.jsx";
import Login from "../Login/Login.jsx";
import Signup from "../Signup/Signup.jsx";
import Addtoys from "../Addtoys/Addtoys.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import Alltoys from "../All toys/Alltoys.jsx";
import Blog from "../Blogs/Blog.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
        {
            path: "/",
            element: <Home/>,
        },
        {
            path: "/about",
            element: <About/>,
        },
        {
            path: "/profile",
            element: <PrivateRoute><div>Hellow</div></PrivateRoute>,
        },
        {
            path: "/login",
            element: <Login/>,
        },
        {
            path: "/signup",
            element: <Signup/>,
        },
        {
            path: "/alltoys",
            element: <Alltoys/>,
        },
        {
            path: "/blogs",
            element: <Blog/>,
        },
        {
            path: "/addtoys",
            element: <PrivateRoute><Addtoys/></PrivateRoute>,
        },
        {
            path: "/mytoys",
            element: <PrivateRoute><div>Hellow</div></PrivateRoute>,
        },
    ]  
  },
]);

export default router;