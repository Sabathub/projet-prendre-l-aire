import { connect } from 'react-redux';

import App from 'src/components/App';


const mapStateToProps = () => ({
});

const mapDispatchToProps = () => ({
});

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default AppContainer;