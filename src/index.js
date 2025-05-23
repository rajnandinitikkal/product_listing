// import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainLayout from './component/MainLayout.jsx';
import Login from './view/login.jsx';
// import SignUp from './view/signUp.jsx';
import Products from './view/ProductPage.jsx';
import About from './view/AboutUsPage.jsx';
import Feedback from './view/FeedbackPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '', 
        element: <Login /> 
      },
      // { path: 'signup',
      //    element: <SignUp /> 
      // },
      { path: 'products',
         element: <Products />
      },
      { path: 'about', 
        element: <About /> 
      },
      { path: 'feedback',
         element: <Feedback /> 
        }
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <RouterProvider router={router} />
    {/* <App/> */}
  </>
);


