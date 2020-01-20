// == Import : npm
import React from 'react';
import { Route } from 'react-router-dom';

// == Import : local
import './app.scss';
import Header from 'src/components/Header';
import Home from 'src/components/Home';
import Signup from 'src/components/Signup';
import Login from 'src/components/Login';
import Team from 'src/components/Team';
import Profile from 'src/components/Profile';
import Contact from 'src/components/Contact';
import Footer from 'src/components/Footer';
// == Composant
const App = () => (
  <div id="app">
    <Header />
    <Route exact path="/">
      <Home />
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
    <Route path="/profile">
      <Profile />
    </Route>
    <Footer />
  </div>
);

// == Export
export default App;
