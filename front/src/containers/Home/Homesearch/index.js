import { connect } from 'react-redux';

import Homesearch from 'src/components/Home/homesearch';

import { changeMarkers } from 'src/store/actions';


const mapStateToProps = (state) => ({
  highways: state.map.highways,
  arealoading: state.map.arealoading,
});

const mapDispatchToProps = (dispatch) => ({
  changeMarkersValue: (newAreasValue) => {
    dispatch(changeMarkers(newAreasValue));
  },
});

const HomesearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Homesearch);

export default HomesearchContainer;
