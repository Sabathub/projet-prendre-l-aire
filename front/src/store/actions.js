// == action types
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const DO_SIGNUP = 'DO_SIGNUP';
export const DO_LOGIN = 'DO_LOGIN';


// == action creators
export const changeInput = (value, name) => ({
  type: CHANGE_INPUT_VALUE,
  value,
  name,
});

export const doSignup = () => ({
  type: DO_SIGNUP,
});

export const doLogin = () => ({
  type: DO_LOGIN,
});
