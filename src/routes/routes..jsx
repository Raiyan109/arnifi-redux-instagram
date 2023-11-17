import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Posts from "../components/Posts";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        children: [
            {
                path: '/',
                element: <Posts />
            }
        ]
    }
])

export default routes