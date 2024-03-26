import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div className="flex justify-between items-center bg-base-100 pt-5">
            <div className="">
                <a className="btn btn-ghost text-xl">Book Vibe</a>
            </div>
            <div className="flex gap-5">
                <NavLink to={'/'} className={({isActive}) => isActive ? 'text-green-500 font-bold btn btn-outline' : 'btn btn-outline-none bg-white'}>Home</NavLink>
                <NavLink to={'/listedBooks'} className={({isActive}) => isActive ? 'text-green-500 font-bold btn btn-outline' : 'btn btn-outline-none bg-white'}>Listed Books</NavLink>
                <NavLink to={'/pagestoread'} className={({isActive}) => isActive ? 'text-green-500 font-bold btn btn-outline' : 'btn btn-outline-none bg-white'}>Pages To read</NavLink>

            </div>
            <div className="flex gap-3">
                <a className="btn bg-green-500 text-white">Sign In</a>
                <a className="btn bg-blue-400 text-white">Sign Up</a>
            </div>
        </div>
    );
};

export default Nav;