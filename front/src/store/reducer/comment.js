// --- action types
import {
  STOCK_IMAGE,
} from '../actions';
// --- initial state
const initialState = {
  file: {},
};
// --- Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case STOCK_IMAGE:
      return {
        ...state,
        file: action.file,
      };
    default: return state;
  }
};
// --- export
export default reducer;
