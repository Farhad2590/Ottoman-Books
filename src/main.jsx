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
import ReadBooks from './Components/ReadBooks/ReadBooks.jsx';
import WishListBooks from './Components/WishLisBooks/WishListBooks.jsx';
import  { Toaster } from 'react-hot-toast';
import DeliveryInfo from './Pages/DeliveryInfo.jsx'
import Online from './Components/Online/Online.jsx';
import Offline from './Components/Offline/Offline.jsx';
import Error from './Components/Error/Error.jsx';
import BestSeller from './Pages/BestSeller.jsx';
import OfflineBest from './Components/OfflineBest/OfflineBest.jsx';
import OnlineBest from './Components/OnlineBest/OnlineBest.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts></Layouts>,
    errorElement:<Error></Error>,
    children: [
      {
        path: "/",
        // loader:()=>fetch('data.json'),
        element: <Home></Home>,
      },
      {
        path:"/listedBooks",
        element: <ListedBooks></ListedBooks>,
        children: [
          {
            index:true,
            element:<ReadBooks></ReadBooks>,
          },
          {
            path: 'wishlist',
            element: <WishListBooks></WishListBooks>
          }
        ]
      },
      {
        path:"/pagestoread",
        element:<Pagestoread></Pagestoread>,
      },
      {
        path:"/bestSeller",
        element:<BestSeller></BestSeller>,
        children: [
          {
            index:true,
            element:<OnlineBest></OnlineBest>,
          },
          {
            path: 'offlineBest',
            element: <OfflineBest></OfflineBest>
          }
        ]
      },
      {
        path:"/deliveryInfo",
        element:<DeliveryInfo></DeliveryInfo>,
        children: [
          {
            index:true,
            element:<Offline></Offline>,
          },
          {
            path: 'online',
            element: <Online></Online>
          }
        ]
      },
      {
        path:"/cards/:bookId",
        element:<BookInfo></BookInfo>,
        loader: () => fetch(`/data.json`)
        
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </React.StrictMode>,
)
