import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {store} from "./Redux-store/store.js"
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Landing from './pages/Landing.jsx'
import Signup from './pages/Signup.jsx'
import LoginPage from './pages/Loginpage.jsx'
import AuthProtection from './authlayout/Authlayout.jsx'
import AllRooms from './pages/AllRooms.jsx'
import Cart from './pages/Cart.jsx'
import FavouriteRooms from './pages/FavouriteRooms.jsx'
import Demo from './pages/FilterComp.jsx'
import PaymentPage from './pages/PaymentPage.jsx'


const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
  
 children: [
  {
    path:"/",
    element:<Landing/>
  },
  {
    path:"/all-room",
    element:<AllRooms/>
  },
  {
    path:"/cart",
    element:<Cart/>
  },
  {
    path:"/favorite",
    element:<FavouriteRooms/>
  },
  {
    path:"/Demo",
    element:<Demo/>
  }
  ,
  {
    path:"/paymentpage",
    element:<PaymentPage/>
  }

]},
{
  path: "/signup",
  element:<AuthProtection Authentication={false}>
    <Signup/>
  </AuthProtection>
},
{
  path: "/login",
  element:<AuthProtection Authentication={false}>
    <LoginPage/>
  </AuthProtection>
},
  
])


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
