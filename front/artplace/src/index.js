import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import InitialPage from './components/InicialPage';
import Login from "./components/loginCadastro/Login";
import Avaliacao from "./components/avaliação/Avaliacao"
import Perfil from "./components/perfil/Perfil"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },

  {
    path: "login",
    element: <Login/>,
  },

  {
    path: "home",
    element: <InitialPage/>,
  },
  {
    path: "home/avaliacao",
    element: <Avaliacao/>,
  },
  {
    path: "home/perfil",
    element: <Perfil/>,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
 
);

reportWebVitals();
