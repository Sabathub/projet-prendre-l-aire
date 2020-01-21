import React from 'react';
import PropTypes from 'prop-types';

import { Route, Switch, Redirect } from 'react-router-dom';

import Home from 'src/components/Home';
import Area from 'src/components/Area';
import Signup from 'src/components/Signup';
import Login from 'src/components/Login';
import Team from 'src/components/Team';
import Profile from 'src/components/Profile';
import Contact from 'src/components/Contact';

import users from 'src/data/users';

/*
Si on est deconnecté :
- une page affichant un formulaire de connexion

Si on est connecté :
- une page affichant un message de bienvenue avec le nom de l'utilisateur et son avatar
- une page de présentation (une image + un texte en lorem ipsum)
*/

const Page = ({ logged }) => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/areas"> {/* // <= Ajouter le slug dans l'url */}
      <Area />
    </Route>
    <Route path="/signup">
      <Signup />
    </Route>
    <Route path="/signin">
      <Login />
    </Route>
    <Route path="/team">
      <Team />
    </Route>
    <Route path="/contact">
      <Contact />
    </Route>
    {/* Switch => on s'arrête à la première route qui a "path" qui correspond à l'URL. La ligne suivante protège toutes nos routes privées */}
    {!logged && <Redirect to="/" />}
    {/* "logged &&" est important ici, sinon l'utilisateur non connecté a accès à cette page à partir de l'URL (n'est pas indispensable si on a Redirect au-dessus, mais évitera des problèmes de sécurité si on enlève Redirect) */}
    {logged && (
    <Route path="/profile">
      <Profile user={users[0]} />
    </Route>
    )}
    <Route>
      <div>Page non trouvée</div>
    </Route>
  </Switch>
);

Page.propTypes = {
  logged: PropTypes.bool.isRequired,
};

export default Page;
