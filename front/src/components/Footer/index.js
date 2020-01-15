// Import NPM
import React from 'react';
import { Menu } from 'semantic-ui-react'

// Import local
import './footer.scss';

const Footer = () => (
  <div>
    <div class="ui stackable menu">
      <div class="item"><img src="http://localhost:8080/src/images/logo.svg" /></div>
        <a class="item">Contact</a>
        <a class="item">Qui sommes-nous</a>
        <a class="item">Mentions Légales</a>
        {/* // Social Medias */}
      </div>
  </div>
);

 export default Footer;



