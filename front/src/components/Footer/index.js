// Import NPM
import React from 'react';
import { Menu } from 'semantic-ui-react'

// Import local
import './footer.scss';

const Footer = () => (
  <div>
    <div className="ui stackable menu">
      <div className="item"><img src="http://localhost:8080/src/images/logo.svg" /></div>
        <a className="item">Contact</a>
        <a className="item">Qui sommes-nous</a>
        <a className="item">Mentions Légales</a>
        {/* // Social Medias */}
      </div>
  </div>
);

 export default Footer;



