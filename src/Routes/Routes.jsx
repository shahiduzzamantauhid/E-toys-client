import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home.jsx"
import Main from "../Layout/Main.jsx";
import About from "../About/About.jsx";
import Login from "../Login/Login.jsx";
import Signup from "../Signup/Signup.jsx";

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
            path: "/login",
            element: <Login/>,
        },
        {
            path: "/signup",
            element: <Signup/>,
        },
    ]  
  },
]);

export default router;