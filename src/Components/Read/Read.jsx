import { GoPeople } from "react-icons/go";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineFindInPage } from "react-icons/md";


import { Link } from "react-router-dom";

const Read = ({ book }) => {

    const { bookId, image, bookName, author, yearOfPublishing, tags, category, totalPages, rating, publisher } = book
    return (

        <div className="flex flex-col lg:flex-row gap-5 p-5 rounded-xl border-slate-100 border-2">
            <div className="bg-slate-200 px-16 py-8 rounded-2xl">
                <img src={image} alt="" />
            </div>
            <div className="flex flex-col justify-center">
                <div>
                    <h2 className="text-2xl">{bookName}</h2>
                    <p>By :{author}</p>
                </div>
                <div className="flex items-center">
                    <div className="flex flex-wrap mt-2 items-center">
                        <p>Tag:</p>
                        {tags.map((tag, index) => (
                            <span key={index} className="inline-block  text-green-500  px-3  text-sm font-semibold mr-2 my-2">
                                #{tag}
                            </span>
                        ))}
                    </div>
                    <div className="flex gap-2 items-center">
                        <CiLocationOn />
                        <p>Year Of Publishing : {yearOfPublishing}</p>
                    </div>
                </div>
                <div className="flex gap-10 mt-5">
                    <div className="flex gap-2">
                        <GoPeople />
                        Publisher : {publisher}
                    </div>
                    <div className="flex gap-2">
                    <MdOutlineFindInPage />
                        Pages : {totalPages}
                    </div>
                </div>
                <div className="border border-dashed my-5"></div>
                <div className="flex gap-5">
                    <div className="bg-blue-300 p-3 rounded-full">
                        <h6 className="text-blue-500">Category :{category}</h6>
                    </div>
                    <div className="bg-orange-200 p-3 rounded-full">
                        <h6 className="text-orange-500">Rating :{rating}</h6>
                    </div>
                    <div>
                        <Link to={`/cards/${bookId}`}><button className="btn bg-green-400 rounded-full text-white">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Read;