import { connect } from 'react-redux';

import Signup from 'src/components/Signup';

import { changeInput } from 'src/store/reducer/form';


const mapStateToProps = (state) => ({
  value: state.form.inputValue,
});

const mapDispatchToProps = (dispatch) => ({
  changeInputValue: (value) => {
    console.log('changeInputValue', value);
    dispatch(changeInput(value));
  },
});

const SignupContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Signup);

export default SignupContainer;
