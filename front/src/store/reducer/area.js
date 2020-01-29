// reducer pour gérer les données relatives à la carte
// --- action types
import {
  RECEIVE_AREAS_DATA,
  STOP_LOADING,
} from '../actions';
// --- initial state
const initialState = {

  areas: [],
  arealoading: true,
};
// --- Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case RECEIVE_AREAS_DATA:
      return {
        ...state,
        areas: action.areas,
      };
    case STOP_LOADING:
      return {
        ...state,
        arealoading: false,
      };
    default: return state;
  }
};
// --- export
export default reducer;
