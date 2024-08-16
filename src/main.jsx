import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/index.scss'
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './pages/Home.jsx'
import Header from './layouts/Header/Header.jsx'
import About from './pages/About.jsx'
import Books from './pages/Books.jsx'
import BookDetails from './pages/BookDetails.jsx'
import Error from './pages/Error.jsx'

const router =createBrowserRouter([
  {
    path:'/',
    element:<Header/>,
    children:[
      {
        path:'/',
        element:<Home/>,
      },
      {
        path:'/about',
        element:<About/>,
      },
      {
        path:'/books',
        element:<Books/>,
      },
      {
        path:'/books/:bookId',
        element:<BookDetails/>,
      },
      {
        path:'*',
        element:<Error/>,
      },
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
