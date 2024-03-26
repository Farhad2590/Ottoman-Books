import { Link, Outlet } from "react-router-dom";


import { useState } from "react";
const ListedBooks = () => {
    const [list, setList] = useState(0);
    return (
        <div className="">
            <div className="mb-5 flex items-center justify-center py-5 bg-gray-300 rounded-lg">
                <h2 className="text-xl font-bold">Books</h2>
            </div>
            <div className="flex items-center overflow-x-auto overflow-y-hidden  flex-nowrap dark:bg-gray-100 dark:text-gray-800">
                <Link to='' onClick={() => { setList(0) }} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${list === 0 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <span>Read Books</span>
                </Link>
                <Link to={'wishlist'} onClick={() => { setList(1) }} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${list === 1 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                    <span>Wishlist Books</span>
                </Link>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default ListedBooks;