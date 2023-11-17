import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

const Sidebar = () => {
    const activeClass = "font-bold";
    const pathname = window.location.pathname
    console.log(pathname);
    return (
        <div className="col-span-2 bg-indigo-300 h-[calc(100vh-25px)] p-5 rounded-lg">
            <ul className="flex flex-col gap-3 h-full">
                <li>Instagram</li>
                <li className="flex items-center gap-3 text-xl">
                    <div className='text-3xl lg:text-xl'>
                        <FaHome />
                    </div>
                    <Link to='/' className={`text-3xl lg:text-xl ${pathname.includes('/') ? activeClass : 'font-normal'}`}>Home</Link>
                </li>

                <li className="flex items-center gap-3 text-xl">
                    <div className='text-3xl lg:text-xl'>
                        <CiSearch />
                    </div>
                    <Link to='/search' className={`text-3xl lg:text-xl ${pathname.includes('/search') ? activeClass : 'font-normal'}`}>Search</Link>
                </li>
                <li className="mt-auto">
                    <Link to='/'>Back to home</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;