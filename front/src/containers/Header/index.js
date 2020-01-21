import { connect } from 'react-redux';

import Header from 'src/components/Header';


const mapStateToProps = () => ({
});

const mapDispatchToProps = () => ({
});

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);

export default HeaderContainer;