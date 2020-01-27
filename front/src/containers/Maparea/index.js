import { connect } from 'react-redux';
import { getAreaBySlug } from 'src/utils/selectors';
import Maparea from 'src/components/Maparea';


const mapStateToProps = (state, ownProps) => {
  const area = getAreaBySlug(ownProps.match.params.slug, state.map.areas);
  return ({
    areaData: area,
    lat: state.map.position.lat,
    lng: state.map.position.lng,
    zoom: state.map.position.zoom,
    areas: state.map.areas,
    loading: state.map.loading,
  });
};

const mapDispatchToProps = () => ({
});

const MapareaContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Maparea);

export default MapareaContainer;
