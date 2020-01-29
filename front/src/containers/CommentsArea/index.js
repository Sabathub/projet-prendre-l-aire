import { connect } from 'react-redux';

import CommentsArea from 'src/components/CommentsArea';


const mapStateToProps = () => ({
  /* lat: state.map.position.lat,
  lng: state.map.position.lng,
  zoom: state.map.position.zoom,
  areas: state.map.areas,
  loading: state.map.loading, */
});

const mapDispatchToProps = () => ({
});

const CommentsAreaContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CommentsArea);

export default CommentsAreaContainer;
