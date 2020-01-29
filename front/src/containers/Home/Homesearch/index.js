import { connect } from 'react-redux';

import Homesearch from 'src/components/Home/homesearch';


const mapStateToProps = (state) => ({
  highways: state.map.highways,
  arealoading: state.map.arealoading,
});

const mapDispatchToProps = () => ({
});

const HomesearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Homesearch);

export default HomesearchContainer;
