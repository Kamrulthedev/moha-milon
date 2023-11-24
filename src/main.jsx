import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Compunents/Root/Root'
import Home from './Compunents/Home/Home'
import Login from './Compunents/Login/Login'
import Register from './Compunents/Register/Register'
import AuthProvider from './Providers/AuthProvider'
import Orders from './Compunents/Orders/Orders'
import Pribate from './Routs/Pribate'




const router = createBrowserRouter([
      {
       path:'/',
       element:<Root></Root>,
       children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/Login',
          element:<Login></Login>
        },
        {
          path:'/Register',
          element:<Register></Register>
        },
        {
          path:'/Orders',
          element:<Pribate><Orders></Orders></Pribate>
        }
       ]

       } 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <AuthProvider>
 <RouterProvider router={router}></RouterProvider>
 </AuthProvider>
  </React.StrictMode>,
)
