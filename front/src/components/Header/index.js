// Import NPM
import React from 'react';

// Import local
import './header.scss';
import Nav from 'src/components/Header/Nav';

const Header = () => (
  <div>
    <a href="#" title="Retour à l'acceuil">
      <img src='http://localhost:8080/src/images/logo.svg' width="20px" alt="Image logo Prendre l'aire" />
      <h1>Prendre l'aire</h1>
    </a>
  <Nav />
  </div>
);

 export default Header;



