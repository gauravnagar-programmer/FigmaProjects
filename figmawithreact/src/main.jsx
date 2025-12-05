import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router"
import Layout from './components/Layout.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Cart from './components/Cart.jsx'
import Shop from "./components/Shop.jsx"
import { ContextProvider } from './contexts/CartContext.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>} >
    <Route path='' element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='shop' element={<Shop/>}/>
    <Route path='cart' element={<Cart/>}/>

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>

    <RouterProvider  router={router}/>
    </ContextProvider>

  
  </StrictMode>,
)
