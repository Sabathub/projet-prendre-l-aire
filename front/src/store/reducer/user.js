// reducer pour gérer les données relatives à l'utilisateur

// --- action types
import {
  LOG_USER,
  LOGOUT_USER,
} from '../actions';

// --- initial state
const initialState = {
  username: '',
  email: '',
  password: '',
  logged: false,
  redirection: false,
};


// --- Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOG_USER:
      return {
        ...state,
        logged: true,
        redirection: true,
      };
    case LOGOUT_USER:
      return {
        ...state,
        logged: false,
        redirection: false,
      };

    default: return state;
  }
};


// --- export
export default reducer;
