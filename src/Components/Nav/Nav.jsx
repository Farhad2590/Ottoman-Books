import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center bg-base-100 pt-5 pb-5 px-5 md:px-10">
            <div className="flex items-center">
                <a className="btn btn-ghost text-xl">Book Vibe</a>
            </div>
            <div className="flex flex-col md:flex-row gap-5 mt-3 md:mt-0">
                <NavLink exact to={'/'} activeClassName="text-green-500 font-bold btn btn-outline" className="btn btn-outline-none bg-white">
                    Home
                </NavLink>
                <NavLink to={'/listedBooks'} activeClassName="text-green-500 font-bold btn btn-outline" className="btn btn-outline-none bg-white">
                    Listed Books
                </NavLink>
                <NavLink to={'/pagestoread'} activeClassName="text-green-500 font-bold btn btn-outline" className="btn btn-outline-none bg-white">
                    Pages To read
                </NavLink>
                <NavLink to={'/deliveryInfo'} activeClassName="text-green-500 font-bold btn btn-outline" className="btn btn-outline-none bg-white">
                    Delivery Info
                </NavLink>
            </div>
            <div className="flex gap-3 mt-3 md:mt-0">
                <a className="btn bg-green-500 text-white">Sign In</a>
                <a className="btn bg-blue-400 text-white">Sign Up</a>
            </div>
        </div>
    );
};

export default Nav;
