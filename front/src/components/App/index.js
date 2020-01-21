// == Import : npm
import React from 'react';

// == Import : local
import './app.scss';
import Header from 'src/containers/Header';
import Page from 'src/containers/Page';
import Footer from 'src/containers/Footer';


// == Composant
class App extends React.Component {
  render () {
    return (
      <div id="app">
        <Header logged={false} />
        <Page logged={false} />        
        <Footer />
      </div>
    );
  }
}

// == Export
export default App;
