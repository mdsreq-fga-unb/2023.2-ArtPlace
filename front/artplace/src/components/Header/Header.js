import React from 'react';
import logo from '../../images/ArtPlace.png'
import './Header.css';
import botaozinho from '../../images/botão.png'

const Header = () => {
  return (
    <div>
      <div className="header">

        {/* Logo ArtPlace */}
        <img src={logo} alt="ArtPlace" className="logo" />

        {/* Barra de Pesquisa */}
        <input type="text" placeholder="Pesquisar" className="search-bar" />

        {/* Botão de Login */}
        <button className="login-btn">Login</button>

        {/* Botão de Cadastrar */}
        <button className="signup-btn">Cadastrar</button>

        {/* Botão existente (salmon-btn) */}
        <button className="salmon-btn">
          <img src={botaozinho} alt="botão" style={{ width: '45px', height: '35px' }} />
        </button>
      </div>
    </div>
  );
}

export default Header;