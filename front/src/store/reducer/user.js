// reducer pour gérer les données relatives à l'utilisateur

// --- action types
import {
  SUBMIT_USER,
  LOG_USER,
  LOGOUT_USER,
  RECEIVE_PROFILE_DATA,
  SUBMIT_DELETE_USER,
  USER_IS_CONNECT,
  DO_CLOSE_MODAL_USERNAME,
  DO_OPEN_MODAL_USERNAME,
  DO_CLOSE_MODAL_PASSWORD,
  DO_OPEN_MODAL_PASSWORD,
  DO_CLOSE_MODAL_DELETE,
  DO_OPEN_MODAL_DELETE,
} from '../actions';

// --- initial state
const initialState = {
  username: '',
  email: '',
  password: '',
  submited: false,
  logged: false,
  showModalUsername: false,
  showModalPassword: false,
  showModalDelete: false,
  profile: {},
};


// --- Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SUBMIT_USER:
      return {
        ...state,
        submited: true,
      };
    case SUBMIT_DELETE_USER:
      return {
        ...state,
        logged: false,
      };
    case LOG_USER:
      return {
        ...state,
        logged: true,
      };
    case USER_IS_CONNECT:
      return {
        ...state,
        logged: true,
      };
    case LOGOUT_USER:
      window.localStorage.clear();
      return {
        ...state,
        logged: false,
        submited: false,
      };
    case RECEIVE_PROFILE_DATA:
      return {
        ...state,
        profile: action.profile,
      };
    case DO_CLOSE_MODAL_USERNAME:
      return {
        ...state,
        showModalUsername: false,
      };
    case DO_OPEN_MODAL_USERNAME:
      return {
        ...state,
        showModalUsername: true,
      };
    case DO_CLOSE_MODAL_PASSWORD:
      return {
        ...state,
        showModalPassword: false,
      };
    case DO_OPEN_MODAL_PASSWORD:
      return {
        ...state,
        showModalPassword: true,
      };
    case DO_CLOSE_MODAL_DELETE:
      return {
        ...state,
        showModalDelete: false,
      };
    case DO_OPEN_MODAL_DELETE:
      return {
        ...state,
        showModalDelete: true,
      };

    default: return state;
  }
};


// --- export
export default reducer;
