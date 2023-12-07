import React from 'react';
import logo from '../../images/ArtPlace.png'
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <div className="header">

        {/* Logo ArtPlace */}
        <img src={logo} alt="ArtPlace" className="logo" />

        {/* Barra de Pesquisa */}
        <input type="text" placeholder="Pesquisar" className="search-bar" />

        {/* Botão de Login */}
        <button className="login-btn"><Link className='linkHeader' to="/login">Login</Link></button>

        {/* Botão de Cadastrar */}
        <button className="login-btn"><Link className='linkHeader'  to="/">Cadastro</Link></button>

        {/* Botão existente (salmon-btn) */}
        <MenuIcon className='slamon-btn'
        sx={
          {
            fontSize: 40
          }
        }
        />
      </div>
    </div>
  );
}

export default Header;