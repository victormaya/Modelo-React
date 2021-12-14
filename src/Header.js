import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <nav>
      <NavLink to='/' end>
        Home
      </NavLink>
      <NavLink to='contato'>Contato</NavLink>
      <NavLink to='form'>Formulário</NavLink>
    </nav>
  );
}

export default Header;
