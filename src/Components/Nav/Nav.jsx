import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <>
            <div className="flex items-center md:gap-5 justify-between bg-base-100 mt-5">
                <div className="">
                <h2 className="lg:mt-5 font-bold text-xl md:text-xl lg:text-3xl ">Ottoman Books</h2>
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <NavLink to={'/'} className={({ isActive }) => isActive ? 'text-green-500 font-bold btn btn-outline' : 'btn btn-outline-none bg-white'}>Home</NavLink>
                            <NavLink to={'/listedBooks'} className={({ isActive }) => isActive ? 'text-green-500 font-bold btn btn-outline' : 'btn btn-outline-none bg-white'}>Listed Books</NavLink>
                            <NavLink to={'/pagestoread'} className={({ isActive }) => isActive ? 'text-green-500 font-bold btn btn-outline' : 'btn btn-outline-none bg-white'}>Pages To read</NavLink>
                            <NavLink to={'/bestSeller'} className={({ isActive }) => isActive ? 'text-green-500 font-bold btn btn-outline' : 'btn btn-outline-none bg-white'}>Best Seller</NavLink>
                            <NavLink to={'/deliveryInfo'} className={({ isActive }) => isActive ? 'text-green-500 font-bold btn btn-outline' : 'btn btn-outline-none bg-white'}>Delivery Info</NavLink>
                        </ul>
                    </div>
                    
                </div>
                <div className=" hidden lg:flex ">
                    <ul className="menu menu-horizontal gap-2">
                        <NavLink to={'/'} className={({ isActive }) => isActive ? 'text-green-500 font-bold btn btn-outline' : 'btn btn-outline-none bg-white'}>Home</NavLink>
                        <NavLink to={'/listedBooks'} className={({ isActive }) => isActive ? 'text-green-500 font-bold btn btn-outline' : 'btn btn-outline-none bg-white'}>Listed Books</NavLink>
                        <NavLink to={'/pagestoread'} className={({ isActive }) => isActive ? 'text-green-500 font-bold btn btn-outline' : 'btn btn-outline-none bg-white'}>Pages To read</NavLink>
                        <NavLink to={'/bestSeller'} className={({ isActive }) => isActive ? 'text-green-500 font-bold btn btn-outline' : 'btn btn-outline-none bg-white'}>Best Seller</NavLink>
                        <NavLink to={'/deliveryInfo'} className={({ isActive }) => isActive ? 'text-green-500 font-bold btn btn-outline' : 'btn btn-outline-none bg-white'}>Delivery Info</NavLink>
                    </ul>
                </div>
                <div className="flex gap-2">
                    <a className="btn bg-green-500 text-white">Sign In</a>
                    <a className="btn bg-blue-400 text-white">Sign Up</a>
                </div>
            </div>

        </>

    );
};

export default Nav;


{/* <div className="navbar justify-between bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <NavLink to={'/'} className={({ isActive }) => isActive ? 'text-green-500 font-bold btn btn-outline' : 'btn btn-outline-none bg-white'}>Home</NavLink>
                            <NavLink to={'/listedBooks'} className={({ isActive }) => isActive ? 'text-green-500 font-bold btn btn-outline' : 'btn btn-outline-none bg-white'}>Listed Books</NavLink>
                            <NavLink to={'/pagestoread'} className={({ isActive }) => isActive ? 'text-green-500 font-bold btn btn-outline' : 'btn btn-outline-none bg-white'}>Pages To read</NavLink>
                            <NavLink to={'/bestSeller'} className={({ isActive }) => isActive ? 'text-green-500 font-bold btn btn-outline' : 'btn btn-outline-none bg-white'}>Best Seller</NavLink>
                            <NavLink to={'/deliveryInfo'} className={({ isActive }) => isActive ? 'text-green-500 font-bold btn btn-outline' : 'btn btn-outline-none bg-white'}>Delivery Info</NavLink>
                        </ul>
                    </div>
                    <h2 className="font-bold text-lg lg:text-xl ">Ottoman Books</h2>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal gap-2">
                        <NavLink to={'/'} className={({ isActive }) => isActive ? 'text-green-500 font-bold btn btn-outline' : 'btn btn-outline-none bg-white'}>Home</NavLink>
                        <NavLink to={'/listedBooks'} className={({ isActive }) => isActive ? 'text-green-500 font-bold btn btn-outline' : 'btn btn-outline-none bg-white'}>Listed Books</NavLink>
                        <NavLink to={'/pagestoread'} className={({ isActive }) => isActive ? 'text-green-500 font-bold btn btn-outline' : 'btn btn-outline-none bg-white'}>Pages To read</NavLink>
                        <NavLink to={'/bestSeller'} className={({ isActive }) => isActive ? 'text-green-500 font-bold btn btn-outline' : 'btn btn-outline-none bg-white'}>Best Seller</NavLink>
                        <NavLink to={'/deliveryInfo'} className={({ isActive }) => isActive ? 'text-green-500 font-bold btn btn-outline' : 'btn btn-outline-none bg-white'}>Delivery Info</NavLink>
                    </ul>
                </div>
                <div className="navbar-end gap-2 hidden sm:block">
                    <a className="btn bg-green-500 text-white">Sign In</a>
                    <a className="btn bg-blue-400 text-white">Sign Up</a>
                </div>
            </div> */}

