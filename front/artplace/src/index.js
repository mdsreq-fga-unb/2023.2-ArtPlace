import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import InitialPage from './components/InicialPage';
import Login from "./components/loginCadastro/Login";
import Avaliacao from "./components/avaliação/Avaliacao"
import Perfil from "./components/perfil/Perfil"
import usuario from './db/usuario'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const usuarioLogado = usuario[0];

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
    element: <Perfil usuario={usuarioLogado}/>,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
 
);

reportWebVitals();
