import { useEffect, useState } from "react";
import { getReadBooks } from "../../Utilities/Utilities";
import Read from "../Read/Read";


const ReadBooks = () => {
    const [books, setBooks] = useState([]);
    const [displayBooks , setDisplayBooks] = useState([]);
    const handleBookFilter = filter => {
        let sortedBooks = [...books]; 
        
        if (filter === 'ratings') {
            sortedBooks.sort((a, b) => b.rating - a.rating); 
        } else if (filter === 'totalPages') {
            sortedBooks.sort((a, b) => b.totalPages - a.totalPages); 
        } else if (filter === 'yearOfPublishing') {
            sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
        }
        setDisplayBooks(sortedBooks); 
    }
    
    useEffect(() => {
        const storedBooks = getReadBooks();
        setBooks(storedBooks)
        setDisplayBooks(storedBooks)
    }, [])
    return (
        <div className="">
            <div className="text-center">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn m-1 bg-green-500">Sort</div>
                    <ul tabIndex={0} className=" dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={()=>handleBookFilter('ratings')}><a>Rating</a></li>
                        <li onClick={()=>handleBookFilter('totalPages')}><a>Number Of Pages</a></li>
                        <li onClick={()=>handleBookFilter('yearOfPublishing')}><a>Published Year</a></li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col mt-10 gap-5">
                {
                    displayBooks.map(book => <Read key={book.bookId} book={book}></Read>)
                }
            </div>
        </div>
    );
};

export default ReadBooks;