import { useEffect, useState } from "react";
import { getReadBooks } from "../../Utilities/Utilities";
import Read from "../Read/Read";


const ReadBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const storedBooks = getReadBooks();
        setBooks(storedBooks)
    }, [])
    return (
        <div className="">
            <div className="flex flex-col mt-10 gap-5">
                {
                    books.map(book => <Read key={book.bookId} book={book}></Read>)
                }
            </div>
        </div>
    );
};

export default ReadBooks;