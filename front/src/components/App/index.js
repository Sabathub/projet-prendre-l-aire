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
    const { fetchAreas, fetchHighways } = this.props;
    fetchAreas();
    fetchHighways();
  }

  render() {
    const { keepLogged } = this.props;
    const localStorageToken = window.localStorage.getItem('token');
    const profileData = JSON.parse(window.localStorage.getItem('profileData'));
    if (localStorageToken !== null && profileData !== null) {
      keepLogged();
    }
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
