import { connect } from 'react-redux';

import Maparea from 'src/components/Maparea';

import { changeAreas, stopLoadingSearchedArea } from 'src/store/actions';


const mapStateToProps = (state) => ({
  lat: state.map.position.lat,
  lng: state.map.position.lng,
  zoom: state.map.position.zoom,
  areas: state.map.areas,
  arealoading: state.map.arealoading,
  searchedarealoading: state.map.searchedarealoading,
  newAreasValue: state.map.newAreasValue,
  searchedareas: state.map.searchedareas,
});


const mapDispatchToProps = (dispatch) => ({
  updateNewAreasData: (searchedareas) => {
    dispatch(changeAreas(searchedareas));
    const stopLoadingAction = stopLoadingSearchedArea();
    dispatch(stopLoadingAction);
  },
});

const MapareaContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Maparea);

export default MapareaContainer;
