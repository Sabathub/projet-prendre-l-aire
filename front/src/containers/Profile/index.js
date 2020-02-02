import { connect } from 'react-redux';

import Profile from 'src/components/Profile';

import {
  changeInput,
  doEditUsername,
  doEditPassword,
  doDeleteUser,
  doCloseModal,
  doOpenModal,
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
  showModal: state.user.showModal,
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
  closingModal: () => {
    dispatch(doCloseModal());
  },
  openModal: () => {
    dispatch(doOpenModal());
  },
});

// Avec connect, on relie le container au composant
const ProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);

export default ProfileContainer;
