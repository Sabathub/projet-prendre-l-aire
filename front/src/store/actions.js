// == action types
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const DO_SIGNUP = 'DO_SIGNUP';
export const DO_LOGIN = 'DO_LOGIN';
export const LOG_USER = 'LOG_USER';
export const LOGOUT_USER = 'LOGOUT_USER';


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

export const logUser = (logged, redirection) => ({
  type: LOG_USER,
  logged,
  redirection,
});

export const logoutUser = (logged) => ({
  type: LOGOUT_USER,
  logged,
});
