// Import NPM
import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

// Import local
import './header.scss';

class Header extends Component {
  render() {
    return (
      <>
{/* // Composant Navbar et Nav de Semantic UI pour le menu de navigation */}
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home" title="Retour à l'acceuil">
            <img
              alt=""
              src="/src/images/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-middle"
            />{' '}
            Prendre l'aire
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="ml-auto">
              <Nav.Link href="#home" title="Retour à l'acceuil">Accueil</Nav.Link>
              <Nav.Link href="#signin" title="Créer un compte">Inscription</Nav.Link>
              <Nav.Link href="#signup" title="Se connecter">Connexion</Nav.Link>
              <Nav.Link href="#profile" title="Accéder à mon profil">Profil</Nav.Link>
              <Nav.Link href="#logout" title="Se déconnecter">Déconnexion</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

 export default Header;



