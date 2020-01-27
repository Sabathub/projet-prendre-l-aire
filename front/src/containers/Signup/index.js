import { connect } from 'react-redux';

import Signup from 'src/components/Signup';

import { changeInput, doSignup, doLogin } from 'src/store/actions';


const mapStateToProps = (state) => ({
  usernameValue: state.form.username,
  emailValue: state.form.email,
  passwordValue: state.form.password,
  passwordVerifyValue: state.form.passwordVerify,
  logged: state.user.logged,
});

const mapDispatchToProps = (dispatch) => ({
  changeInputValue: (value, name) => {
    dispatch(changeInput(value, name));
  },
  newUser: () => {
    dispatch(doSignup());
    dispatch(doLogin());
  },
});

const SignupContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Signup);

export default SignupContainer;
