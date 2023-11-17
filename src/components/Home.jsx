import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Home = () => {
    return (
        <div className="grid grid-cols-12 p-3 gap-3">
            <Sidebar />

            <div className="col-span-10 w-full bg-gray-500 rounded-lg">
                <Outlet />
            </div>
        </div>
    );
};

export default Home;