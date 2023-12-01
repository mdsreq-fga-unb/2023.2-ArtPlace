import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import InitialPage from './components/InicialPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },

  {
    path: "home",
    element: <InitialPage/>,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
 
);

reportWebVitals();
