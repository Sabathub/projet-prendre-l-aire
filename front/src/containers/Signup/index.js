import { connect } from 'react-redux';

import Signup from 'src/components/Signup';

import { changeInput, doSignup, doFailPassword } from 'src/store/actions';


const mapStateToProps = (state) => ({
  usernameValue: state.form.username,
  emailValue: state.form.email,
  passwordValue: state.form.password,
  passwordVerifyValue: state.form.passwordVerify,
  submited: state.user.submited,
});

const mapDispatchToProps = (dispatch) => ({
  changeInputValue: (value, name) => {
    dispatch(changeInput(value, name));
  },
  newUser: () => {
    dispatch(doSignup());
  },
  failPassword: () => {
    dispatch(doFailPassword());
  },
  clearForm: () => {
    dispatch(doFailPassword());
  },
});

const SignupContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Signup);

export default SignupContainer;
