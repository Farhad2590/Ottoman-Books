import toast from "react-hot-toast";


export const getWishBooks = () => {
    let book = [];
    const storedBooks = localStorage.getItem('book')
    if(storedBooks){
        book = JSON.parse(storedBooks)
    }
    return book;
}


export const saveBooks = book =>{
    // console.log(book);
    let books = getWishBooks()
    const isExit = books.find(b => b.bookId === book.bookId)
    if(isExit){
        return toast.error('Already Saved')
    }
    books.push(book)
    localStorage.setItem('books',JSON.stringify(books));
    toast.success("Sucessfully Saved")
}





















// export const deleteBlog = id =>{
//     let books = getReadBooks()

//     const remaining = books.filter(b => b.id !== id)
//     localStorage.setItem('blogs',JSON.stringify(remaining));
//     toast.success("Blog Removed From Bookmark!")
// }