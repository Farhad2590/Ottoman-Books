import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import Home from './Pages/Home.jsx'
import Layouts from './Layouts/Layouts.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import ListedBooks from './Pages/ListedBooks.jsx';
import Pagestoread from './Pages/Pagestoread.jsx';
import BookInfo from './Pages/BookInfo.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts></Layouts>,
    children: [
      {
        path: "/",
        loader:()=>fetch('data.json'),
        element: <Home></Home>,
      },
      {
        path:"/listedBooks",
        element: <ListedBooks></ListedBooks>,
      },
      {
        path:"/pagestoread",
        element:<Pagestoread></Pagestoread>,
      },
      {
        path:"/cards/:bookId",
        element:<BookInfo></BookInfo>,
        loader: () => fetch(`data.json`)

      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
