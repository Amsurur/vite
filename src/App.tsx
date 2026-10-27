import React, { lazy, Suspense } from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import  Layout from './Layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import ProductsById from './pages/ProductsById';
import Login from './pages/Login';
import AuthFlow from './pages/AuthFlow';

const Products = lazy(()=>import("./pages/Products"))
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<AuthFlow><Layout/></AuthFlow>,
      children:[
        {
         index:true,
         element:<Home/>
        },{
          path:"login",
          element:<Login/>
        },
        {
          path:"about",
          element:<About/>
        },{
          path:"products",
          element:<Suspense fallback={<div><h1>LOADING....</h1></div>}>
            <Products/>
            </Suspense>
        },{
          path:"products/:id",
          element:<ProductsById/>
        }
      ]
    },
    {
      path:"*",
      element:<NotFound/>
    }
  
  ]);
  return (
   <RouterProvider router={router}/>
  )
}

export default App