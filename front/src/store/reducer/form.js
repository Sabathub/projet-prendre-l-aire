// --- initial state
const initialState = {
  inputValue: '',
  username: '',
  email: '',
  password: '',
  passwordVerify: '',
  // la valeur du token après submit
  // tokenValue: '',
};

// --- action types
import {
  CHANGE_INPUT_VALUE,
  DO_CONNECT,
} from '../actions';
// export const CONNECT_USER = 'CONNECT_USER';

// --- Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case DO_CONNECT:
      return {
        ...state,
      };

    default: return state;
  }
};

// --- action creators


/* export const connectUser = () => ({
  type: CONNECT_USER,
}); */

// --- export
export default reducer;
