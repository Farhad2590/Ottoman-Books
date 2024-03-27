import { useEffect, useState } from "react";
import { getWishBooks } from "../../Utilities/Utilities";
import Wish from "../Wish/Wish";
const WishListBooks = () => {
    const [book, setBooks] = useState([]);
    const [displayBooks , setDisplayBooks] = useState([]);
    const handleBookFilter = filter => {
        let sortedBooks = [...book]; 
        
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
        const storedBooks = getWishBooks();
        setBooks(storedBooks)
        setDisplayBooks(storedBooks)
    }, [])
    return (
        <div>
            <div className="text-center">
            <div className="dropdown">
                    <div tabIndex="0" role="button" className="btn  m-1 bg-green-500 flex items-center gap-4 text-white text-lg font-work font-semibold">
                        Sort By
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                        </svg>
                    </div>

                    <ul tabIndex={0} className=" dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={() => handleBookFilter('ratings')}><a>Rating</a></li>
                        <li onClick={() => handleBookFilter('totalPages')}><a>Number Of Pages</a></li>
                        <li onClick={() => handleBookFilter('yearOfPublishing')}><a>Published Year</a></li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col mt-10 gap-5">
                {
                    displayBooks.map(books => <Wish key={books.bookId} books={books}></Wish>)
                }
            </div>
        </div>
    );
};

export default WishListBooks;