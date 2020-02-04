// == Import : npm
import React from 'react';


// == Import : local
import './legalmentions.scss';


// == Composant
const Legalmentions = () => (
  <div id="legalMentionsContainer">
    <h1 id="legalMentionsTitle">Mentions Légales</h1>
    <h4 className="titleLegalMentions">Editeur</h4>
    <p className="legalMentions">
        Prendre l'aire, collaboration au capital de 0,59 €
        ayant son siège social en France (un peu partout).
    </p>
    <h4 className="titleLegalMentions">Directeurs de la publication</h4>
    <p className="legalMentions">
        Marion Polomeni, Sophie Verger, Laetitia Elbaz, Maxime Julien, Kévin Dubuy.
    </p>
    <h4 className="titleLegalMentions">Adresse de courrier électronique</h4>
    <p className="legalMentions">
        contact.prendrelaire@gmail.com
    </p>
    <h4 className="titleLegalMentions">Hébergeur du site</h4>
    <p className="legalMentions">
        Amazon Web Services Amazon.com Legal
        Department 410 Terry Avenue North P.O. Box 81226 Seattle, WA 98108-1226 - USA
        http://aws.amazon.com
    </p>
  </div>
);


// == Export
export default Legalmentions;
