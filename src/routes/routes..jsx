import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Posts from "../components/Posts";
import Search from "../components/Search";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        children: [
            {
                path: '/',
                element: <Posts />
            },
            {
                path: 'search',
                element: <Search />
            }
        ]
    }
])

export default routes