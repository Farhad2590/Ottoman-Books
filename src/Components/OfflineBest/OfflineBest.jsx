import { Link } from "react-router-dom";
const OfflineBest = () => {
    return (
        <div className="mx-auto lg:w-[90%] ">
            <div>
                <div>
                    <div>
                        <h2 className="text-xl text-green-400 font-bold">#Best_Seller_1</h2>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-5 lg:justify-center">
                        <div className=" lg:w-[50%] flex items-center justify-center p-10 bg-gray-200  rounded-lg">
                            <img className="w-52" src='https://i.ibb.co/HNDZ6x3/Book3.png' alt="" />
                        </div>
                        <div className="lg:w-[50%]">
                            <div>
                                <h1 className="text-2xl">The Ottoman Empire: The Classical Age 1300–1600</h1>
                                <p>By : Donald Quataert</p>
                            </div>
                            <div className="border border-dashed "></div>
                            History
                            <div className="border border-dashed "></div>
                            <p><span>Review : </span>Quataert provides a detailed examination of the Ottoman Empire's later period, exploring its social, economic, and political dynamics. A valuable resource for anyone seeking a deeper understanding of this crucial era in Ottoman history.</p>
                            <div className="font-bold">
                                Tag: Empire, Social History
                            </div>
                            <div className="border border-dashed "></div>
                            <div>
                                <p>Number Of Pages :272</p>
                                <p>Publisher : Cambridge University Press</p>
                                <p>Year of Publishing : 2005</p>
                                <p>Rating :4.3</p>
                            </div>
                            <div className="flex gap-2">
                                <Link to={'/'}><button className="btn btn-outline">Buy Now</button></Link>
                            </div>
                        </div>

                    </div>
                </div>
                <div>
                    <div>
                        <h2 className="text-xl text-green-400 font-bold">#Best_Seller_2</h2>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-5 lg:justify-center">
                        <div className=" lg:w-[50%] flex items-center justify-center p-10 bg-gray-200  rounded-lg">
                            <img className="w-52" src='https://i.ibb.co/1GhZQQY/Book5.png' alt="" />
                        </div>
                        <div className="lg:w-[50%]">
                            <div>
                                <h1 className="text-2xl">Osman's Dream: The History of the Ottoman Empire</h1>
                                <p>By : Caroline Finkel</p>
                            </div>
                            <div className="border border-dashed "></div>
                            History
                            <div className="border border-dashed "></div>
                            <p><span>Review : </span>Finkel's book is a captivating journey through the history of the Ottoman Empire, offering fresh insights and perspectives on its rulers, society, and cultural achievements. A must-read for anyone interested in the Ottoman era.</p>
                            <div className="font-bold">
                                Tag: Empire, Cultural History
                            </div>
                            <div className="border border-dashed "></div>
                            <div>
                                <p>Number Of Pages :672</p>
                                <p>Publisher : Basic Books</p>
                                <p>Year of Publishing : 2005</p>
                                <p>Rating :4.6</p>
                            </div>
                            <div className="flex gap-2">
                                <Link to={'/'}><button className="btn btn-outline">Buy Now</button></Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default OfflineBest;