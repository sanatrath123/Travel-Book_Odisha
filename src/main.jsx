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
import Demo from './pages/Demo'


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
    path:"/demo",
    element:<Demo/>
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
