import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Cards = ({ cards }) => {
    const {bookId, bookName, image, author, tags ,category , rating } = cards;
    return (

        <Link to={`/cards/${bookId}`} className="bg-slate-50 border border-gray-300 rounded-lg p-5">
            <div className="flex flex-col justify-center items-center bg-gray-200 py-5 px-5 rounded-lg">
                <img src={image} alt="" className=" w-44 h-60" />
            </div>
            <div className="flex flex-wrap justify-center mt-2">
                {tags.map((tag, index) => (
                    <span key={index} className="inline-block  text-green-500  px-3  text-sm font-semibold mr-2 my-2">
                        {tag}
                    </span>
                ))}
            </div>
            <div>
                <h2 className="mb-1 text-xl font-semibold">{bookName}</h2>
                <p>By :{author}</p>
            </div>
            <div className="border border-dashed "></div>
            <div className="flex justify-between">
                {category}
                <div className="flex gap-2">
                    {rating}
                    <CiStar />
                </div>
            </div>

        </Link>
    );
};

export default Cards;