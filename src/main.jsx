import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Compunents/Root/Root'
import Home from './Compunents/Home/Home'
import Login from './Compunents/Login/Login'
import Register from './Compunents/Register/Register'




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
        }
       ]

       } 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
