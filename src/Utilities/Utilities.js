

import toast from "react-hot-toast";

export const getReadBooks = () => {
    let books = [];
    const storedBooks = localStorage.getItem('books')
    if (storedBooks) {
        books = JSON.parse(storedBooks)
    }
    return books;
}

export const getWishBooks = () => {
    let books = [];
    const storedBooks = localStorage.getItem('wishlistBooks')
    if (storedBooks) {
        books = JSON.parse(storedBooks)
    }
    return books;
}

export const saveBook = book => {
    let books = getReadBooks()
    const isExit = books.find(b => b.bookId === book.bookId)
    if (isExit) {
        return toast.error('Already Saved')
    }
    books.push(book)
    localStorage.setItem('books', JSON.stringify(books));
    toast.success("Successfully Saved to Read Books")
}


export const saveWishBook = book => {
    let readListBooks = getReadBooks();
    let wishListBooks = getWishBooks();

  
    const isBookInReadList = readListBooks.find(b => b.bookId === book.bookId);
    if (isBookInReadList) {
        return toast.error('Book already exists in Read List');
    }

    const isBookInWishList = wishListBooks.find(b => b.bookId === book.bookId);
    if (isBookInWishList) {
        return toast.error('Book already exists in Wishlist');
    }

    wishListBooks.push(book);
    localStorage.setItem('wishlistBooks', JSON.stringify(wishListBooks));
    toast.success("Successfully Added to Wishlist");
}

