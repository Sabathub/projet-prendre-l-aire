import { connect } from 'react-redux';

import Zoomarea from 'src/components/Zoomarea';


const mapStateToProps = (state) => ({
  /* lat: state.map.position.lat,
  lng: state.map.position.lng,
  zoom: state.map.position.zoom,
  areas: state.map.areas,
  loading: state.map.loading, */
});

const mapDispatchToProps = () => ({
});

const ZoomareaContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Zoomarea);

export default ZoomareaContainer;
