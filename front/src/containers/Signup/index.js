import { connect } from 'react-redux';

import Signup from 'src/components/Signup';

import { changeInput, doConnect } from 'src/store/actions';


const mapStateToProps = (state) => ({
  usernameValue: state.form.username,
  emailValue: state.form.email,
  passwordValue: state.form.password,
  passwordVerifyValue: state.form.passwordVerify,
});

const mapDispatchToProps = (dispatch) => ({
  changeInputValue: (value, name) => {
    console.log('changeInputValue', name, value);
    dispatch(changeInput(value, name));
  },
  doSignup: () => {
    dispatch(doConnect());
  },
});

const SignupContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Signup);

export default SignupContainer;
