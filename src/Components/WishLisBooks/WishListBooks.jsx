import { useEffect, useState } from "react";
import { getWishBooks } from "../../Utilities/Utilities";
import Wish from "../Wish/Wish";
const WishListBooks = () => {
    const [book, setBooks] = useState([]);

    useEffect(() => {
        const storedBooks = getWishBooks();
        setBooks(storedBooks)
    }, [])
    return (
        <div>
            <div className="flex flex-col mt-10 gap-5">
                {
                    book.map(books => <Wish key={books.bookId} books={books}></Wish>)
                }
            </div>
        </div>
    );
};

export default WishListBooks;