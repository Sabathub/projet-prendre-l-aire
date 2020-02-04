import React from 'react';

import './notfound.scss';

const Notfound = () => (
  <div>
    <h1>Erreur 404</h1>
    <p id="wrongUrl">Il semblerait que tu aies pris la mauvaise route !</p>
    <img id="carFail" src="https://media.giphy.com/media/CNoEyOFHjHyYU/giphy.gif" alt="car crash gif" />
  </div>
);


export default Notfound;
