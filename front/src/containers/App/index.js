import { connect } from 'react-redux';

import App from 'src/components/App';

import { fetchAreasData, fetchHighwaysData, userIsConnect } from 'src/store/actions';


const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  keepLogged: () => {
    dispatch(userIsConnect());
  },
  fetchAreas: () => {
    const action = fetchAreasData();
    dispatch(action);
  },
  fetchHighways: () => {
    const action = fetchHighwaysData();
    dispatch(action);
  },
});

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default AppContainer;
