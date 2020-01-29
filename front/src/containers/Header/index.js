import { connect } from 'react-redux';

import Header from 'src/components/Header';

import { logoutUser, fetchProfileData } from 'src/store/actions';


const mapStateToProps = (state) => ({
  logged: state.user.logged,
});

const mapDispatchToProps = (dispatch) => ({
  disconnect: () => {
    dispatch(logoutUser());
  },
  doToken: () => {
    dispatch(fetchProfileData());
  },
});

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);

export default HeaderContainer;
