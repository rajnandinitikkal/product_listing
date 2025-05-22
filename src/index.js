import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './view/Home/Home'
import About from './view/About/About';
import Cart from './view/Cart/Cart';
import Login from './view/Login/login';
import SignUp from './view/Sign-up/signUp';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/About',
    element:<About/>
  },
  {
    path:'/Cart',
    element:<Cart/>
  },
  {
    path:'/Login',
    element:<Login/>
  },
  {
    path:'/SignUp',
    element:<SignUp/>
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <RouterProvider router={router} />
  </>
);


