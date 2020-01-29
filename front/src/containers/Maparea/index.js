import { connect } from 'react-redux';

import Maparea from 'src/components/Maparea';


const mapStateToProps = (state) => ({
  lat: state.map.position.lat,
  lng: state.map.position.lng,
  zoom: state.map.position.zoom,
  areas: state.map.areas,
  arealoading: state.map.arealoading,
});


const mapDispatchToProps = () => ({
});

const MapareaContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Maparea);

export default MapareaContainer;
