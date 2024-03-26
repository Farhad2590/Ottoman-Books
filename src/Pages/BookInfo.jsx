import { useLoaderData, useParams } from "react-router-dom";


const BookInfo = () => {
    const bookInfo = useLoaderData()
    const { bookId } = useParams()
    console.log("Book ID:", bookId);
    console.log("Book Info:", bookInfo);
    const parsedBookId = parseInt(bookId);
    const book = bookInfo.find(book => book.bookId === parsedBookId);
    console.log("Found Book:", book);
    const { bookName, image, author, tags, category, yearOfPublishing, totalPages, rating, publisher, review } = book;
    return (
        <div className="flex w-full gap-5 justify-center-center">
            <div className="w-[50%] flex items-center justify-center p-10 bg-gray-200  rounded-lg">
                <img className="w-52" src={image} alt="" />
            </div>
            <div className="w-[50%]">
                <div>
                    <h1 className="text-2xl">{bookName}</h1>
                    <p>By : {author}</p>
                </div>
                <div className="border border-dashed "></div>
                {category}
                <div className="border border-dashed "></div>
                <p><span>Review : </span>{review}</p>
                <div className="font-bold">
                    Tag:
                    {tags.map((tag, index) => (
                        <span key={index} className="inline-block  text-green-500  px-3  text-sm font-semibold mr-2 my-2">#
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="border border-dashed "></div>
                <div>
                    <p>Number Of Pages : {totalPages}</p>
                    <p>Publisher : {publisher}</p>
                    <p>Year of Publishing : {yearOfPublishing}</p>
                    <p>Rating : {rating}</p>
                </div>
                <div className="flex gap-2">
                    <button className="btn btn-outline">Read</button>
                    <button className="btn btn-info text-white">Wishlist</button>
                </div>
            </div>

        </div>
    );
};

export default BookInfo;