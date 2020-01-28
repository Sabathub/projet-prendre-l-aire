// reducer pour gérer les données relatives à l'utilisateur

// --- action types
import {
  SUBMIT_USER,
  LOG_USER,
  LOGOUT_USER,
} from '../actions';

// --- initial state
const initialState = {
  token: '',
  username: '',
  email: '',
  password: '',
  submited: false,
  logged: false,
};


// --- Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SUBMIT_USER:
      return {
        ...state,
        submited: true,
      };
    case LOG_USER:
      return {
        ...state,
        logged: true,
        token: action.token,
      };
    case LOGOUT_USER:
      return {
        ...state,
        logged: false,
        token: '',
      };

    default: return state;
  }
};


// --- export
export default reducer;
