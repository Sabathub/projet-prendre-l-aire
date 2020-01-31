// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import './app.scss';
import Header from 'src/containers/Header';
import Page from 'src/containers/Page';
import Footer from 'src/containers/Footer';
import DynamicScrollToTop from 'src/utils/DynamicScrollToTop';


// == Composant
class App extends React.Component {
  componentDidMount() {
    // appel à l'API pour initialiser les données
    const { fetchAreas, fetchHighways, keepLogged } = this.props;
    fetchAreas();
    fetchHighways();
    const localStorage = window.localStorage.getItem('token');
    if (localStorage !== null) {
      keepLogged();
    }
  }

  render() {
    return (
      <div id="app">
        <DynamicScrollToTop />
        <Header />
        <Page />
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  fetchAreas: PropTypes.func.isRequired,
  fetchHighways: PropTypes.func.isRequired,
  keepLogged: PropTypes.func.isRequired,
};

// == Export
export default App;
