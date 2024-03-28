import { useLoaderData, useParams } from "react-router-dom";
import { saveBook, saveWishBook } from "../Utilities/Utilities";



const BookInfo = () => {
    const bookInfo = useLoaderData()
    const { bookId } = useParams()
    const parsedBookId = parseInt(bookId);
    const book = bookInfo.find(book => book.bookId === parsedBookId);

    const { bookName, image, author, tags, category, yearOfPublishing, totalPages, rating, publisher, review } = book;
    const handleReadBooks = book => {
        saveBook(book)
    }
    const handleWishList = book => {
        saveWishBook(book);
    }
    return (
        <div className="mx-auto lg:w-[90%] mb-5 flex flex-col lg:flex-row gap-5 lg:justify-center">
            <div className=" lg:w-[50%] flex items-center justify-center p-10 bg-gray-200  rounded-lg">
                <img className="w-52" src={image} alt="" />
            </div>
            <div className="lg:w-[50%]">
                <div>
                    <h1 className="text-2xl mb-3">{bookName}</h1>
                    <p>By : {author}</p>
                </div>
                <div className="border border-dashed my-5"></div>
                <p> {category}</p>
                <div className="border border-dashed my-5"></div>
                <p><span>Review : </span>{review}</p>
                <div className="font-bold">
                    Tag:
                    {tags.map((tag, index) => (
                        <span key={index} className="inline-block  text-green-500  px-3  text-sm font-semibold mr-2 my-2">#
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="border border-dashed my-5"></div>
                <div>
                    <p>Number Of Pages : {totalPages}</p>
                    <p>Publisher : {publisher}</p>
                    <p>Year of Publishing : {yearOfPublishing}</p>
                    <p>Rating : {rating}</p>
                </div>
                <div className="flex gap-2">
                    <button onClick={() => handleReadBooks(book)} className="btn btn-outline">Read</button>
                    <button onClick={() => handleWishList(book)} className="btn btn-info text-white">Wishlist</button>
                </div>
            </div>

        </div>
    );
};

export default BookInfo;