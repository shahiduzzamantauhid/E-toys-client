import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home.jsx"
import Main from "../Layout/Main.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
        {
            path: "/",
            element: <Home/>,
        },
    ]  
  },
]);

export default router;