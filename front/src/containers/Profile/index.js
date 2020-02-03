import { connect } from 'react-redux';

import Profile from 'src/components/Profile';

import {
  changeInput,
  doEditUsername,
  doEditPassword,
  doDeleteUser,
  doCloseModalUsername,
  doOpenModalUsername,
  doCloseModalPassword,
  doOpenModalPassword,
  doCloseModalDelete,
  doOpenModalDelete,
} from 'src/store/actions';


// Grâce à connect, on a accès au state
// Ici, on gère les datas
const mapStateToProps = (state) => ({
  profileData: state.user.profile,
  usernameValue: state.form.username,
  passwordValue: state.form.password,
  submitedUsername: state.form.submitedUsername,
  submitedPassword: state.form.submitedPassword,
  logged: state.user.logged,
  showModalUsername: state.user.showModalUsername,
  showModalPassword: state.user.showModalPassword,
  showModalDelete: state.user.showModalDelete,
});

// Ici, on gère les actions
const mapDispatchToProps = (dispatch) => ({
  changeInputValue: (value, name) => {
    dispatch(changeInput(value, name));
  },
  editUsername: () => {
    dispatch(doEditUsername());
  },
  editPassword: () => {
    dispatch(doEditPassword());
  },
  deleteUser: () => {
    dispatch(doDeleteUser());
  },
  closingModalUsername: () => {
    dispatch(doCloseModalUsername());
  },
  openModalUsername: () => {
    dispatch(doOpenModalUsername());
  },
  closingModalPassword: () => {
    dispatch(doCloseModalPassword());
  },
  openModalPassword: () => {
    dispatch(doOpenModalPassword());
  },
  closingModalDelete: () => {
    dispatch(doCloseModalDelete());
  },
  openModalDelete: () => {
    dispatch(doOpenModalDelete());
  },
});

// Avec connect, on relie le container au composant
const ProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);

export default ProfileContainer;
