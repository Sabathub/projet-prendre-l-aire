// == action types
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const DO_SIGNUP = 'DO_SIGNUP';
export const DO_LOGIN = 'DO_LOGIN';
export const LOG_USER = 'LOG_USER';
export const SUBMIT_USER = 'SUBMIT_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const NEW_POSITION = 'NEW_POSITION';
export const NEW_MARKER = 'NEW_MARKER';
export const FETCH_AREAS_DATA = 'FETCH_AREAS_DATA';
export const FETCH_HIGHWAYS_DATA = 'FETCH_HIGHWAYS_DATA';
export const RECEIVE_AREAS_DATA = 'RECEIVE_AREAS_DATA';
export const RECEIVE_HIGHWAYS_DATA = 'RECEIVE_HIGHWAYS_DATA';
export const STOP_LOADING = 'STOP_LOADING';
export const STOP_LOADING_HIGHWAYS = 'STOP_LOADING_HIGHWAYS';


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

export const logUser = (logged, token) => ({
  type: LOG_USER,
  logged,
  token,
});

export const logoutUser = (logged, token) => ({
  type: LOGOUT_USER,
  logged,
  token,
});

export const submitUser = (submited) => ({
  type: SUBMIT_USER,
  submited,
});

export const fetchAreasData = () => ({
  type: FETCH_AREAS_DATA,
});

export const fetchHighwaysData = () => ({
  type: FETCH_HIGHWAYS_DATA,
});

export const receiveAreasData = (areas) => ({
  type: RECEIVE_AREAS_DATA,
  areas,
});

export const receiveHighwaysData = (highways) => ({
  type: RECEIVE_HIGHWAYS_DATA,
  highways,
});

export const stopLoading = () => ({
  type: STOP_LOADING,
});

export const stopLoadingHighways = () => ({
  type: STOP_LOADING_HIGHWAYS,
});
