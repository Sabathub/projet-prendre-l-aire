import { connect } from 'react-redux';

import Home from 'src/components/Home';


const mapStateToProps = () => ({
});

const mapDispatchToProps = () => ({
});

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

export default HomeContainer;