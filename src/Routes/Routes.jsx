import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import News from "../Pages/News/News";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Log/Login";
import Register from "../Pages/Log/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <News></News>,
            },
            {
                path: "/destination",
                element: <News></News>,
            },
            {
                path: "/blog",
                element: <News></News>,
            },
            {
                path: "/contact",
                element: <News></News>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
        ],
    },
]);

export default router;
