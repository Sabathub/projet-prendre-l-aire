// == Import : npm
import React from 'react';

// == Import : local
import './app.scss';
import Header from 'src/components/Header';
import Home from 'src/components/Home';
import Footer from 'src/components/Footer';

// == Composant
const App = () => (
  <div id="app">
    <Header />
    <Home />
    <Footer />
  </div>
);

// == Export
export default App;
