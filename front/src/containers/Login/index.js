import { connect } from 'react-redux';

import Login from 'src/components/Login';

import { changeInput, doConnect } from 'src/store/actions';


const mapStateToProps = (state) => ({
  emailValue: state.form.email,
  passwordValue: state.form.password,
});

const mapDispatchToProps = (dispatch) => ({
  changeInputValue: (value, name) => {
    dispatch(changeInput(value, name));
  },
  doSignup: () => {
    dispatch(doConnect());
  },
});

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);

export default LoginContainer;
