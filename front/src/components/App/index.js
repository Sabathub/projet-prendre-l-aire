// == Import : npm
import React from 'react';
import { Route } from 'react-router-dom';

// == Import : local
import './app.scss';
import Header from 'src/containers/Header';
import Home from 'src/containers/Home';
import Signup from 'src/containers/Signup';
import Login from 'src/containers/Login';
import Team from 'src/containers/Team';
import Profile from 'src/containers/Profile';
import Contact from 'src/containers/Contact';
import Footer from 'src/containers/Footer';

// == Composant
class App extends React.Component {
  render () {
    return (
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
  }
}

// == Export
export default App;
