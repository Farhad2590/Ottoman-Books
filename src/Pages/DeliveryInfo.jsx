import { Link,Outlet } from "react-router-dom";
import { useState } from "react";

const DeliveryInfo = () => {
    const [list, setList] = useState(0);
    return (
        <div>
            <div className="hero p-12 rounded-lg bg-base-200 mb-10">
                <div className="flex flex-col items-center gap-5">
                    <h1 className="text-green-400 text-4xl font-bold">Discover Ottoman Empire Books </h1>
                    <h2 className="text-2xl ">Available for Online Subscription and Offline Purchase</h2>
                    {/* <div className="text-center">
                        <p>Explore our rich collection of Ottoman Empire books, offering comprehensive insights into this fascinating historical era. Whether you prefer the convenience of online access with our PDF subscription service or the tangible experience of owning physical copies, we cater to your preferences. Subscribe online for instant access to our digital library, or purchase offline books to add to your personal collection. Delve into the captivating narratives and scholarly analyses of the Ottoman Empire's rise, achievements, and legacy with ease and flexibility.</p>
                    </div> */}
                </div>
            </div>
            <div className="flex items-center overflow-x-auto overflow-y-hidden  flex-nowrap dark:bg-gray-100 sm:justify-center dark:text-gray-800">
                <Link to='' onClick={() => { setList(0) }} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${list === 0 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <span>Online Purchase</span>
                </Link>
                <Link to={'online'} onClick={() => { setList(1) }} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${list === 1 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                    <span>Offline Purchase</span>
                </Link>
            
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default DeliveryInfo;