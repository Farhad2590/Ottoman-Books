import { GoPeople } from "react-icons/go";
// import { MdOutlineFindInPage } from "react-icons/go";
const Read = ({ book }) => {
    console.log(book);
    const { image, bookName, author, tags, category, totalPages, rating, publisher } = book
    return (

        <div className="flex gap-5 p-5 rounded-xl border-slate-100 border-2">
            <div className="bg-slate-200 px-16 py-8 rounded-2xl">
                <img src={image} alt="" />
            </div>
            <div className="flex flex-col">
                <div>
                    <h2 className="text-2xl">{bookName}</h2>
                    <p>By :{author}</p>
                </div>
                <div className="flex flex-wrap mt-2 items-center">
                    <p>Tag:</p>
                    {tags.map((tag, index) => (
                        <span key={index} className="inline-block  text-green-500  px-3  text-sm font-semibold mr-2 my-2">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="flex gap-10">
                    <div className="flex gap-2">
                        <GoPeople />
                        Publisher : {publisher}
                    </div>
                    <div className="flex gap-2">
                        <GoPeople />
                        Pages : {totalPages}
                    </div>
                </div>
                <div className="border border-dashed "></div>
                <div className="flex gap-5">
                    <div className="bg-blue-300 p-3 rounded-full">
                        <h6 className="text-blue-500">Category :{category}</h6>
                    </div>
                    <div className="bg-orange-200 p-3 rounded-full">
                        <h6 className="text-orange-500">Rating :{rating}</h6>
                    </div>
                    <div>
                        <button className="btn bg-green-400 rounded-full text-white">View Details</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Read;