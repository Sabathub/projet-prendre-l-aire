import { connect } from 'react-redux';

import Maparea from 'src/components/Maparea';

import { changeAreas } from 'src/store/actions';


const mapStateToProps = (state) => ({
  lat: state.map.position.lat,
  lng: state.map.position.lng,
  zoom: state.map.position.zoom,
  areas: state.map.areas,
  arealoading: state.map.arealoading,
  newAreasValue: state.map.newAreasValue,
});


const mapDispatchToProps = (dispatch) => ({
  updateNewAreasData: (areas) => {
    dispatch(changeAreas(areas));
  },
});

const MapareaContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Maparea);

export default MapareaContainer;
