import { connect } from 'react-redux';

import Login from 'src/components/Login';

import { changeInput, doLogin, doFailPassword } from 'src/store/actions';


const mapStateToProps = (state) => ({
  emailValue: state.form.email,
  passwordValue: state.form.password,
  logged: state.user.logged,
});

const mapDispatchToProps = (dispatch) => ({
  changeInputValue: (value, name) => {
    dispatch(changeInput(value, name));
  },
  doConnect: () => {
    dispatch(doLogin());
  },
  clearForm: () => {
    dispatch(doFailPassword());
  },
});

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);

export default LoginContainer;
