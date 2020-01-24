// reducer pour gérer les données relatives à la carte
// --- action types
import {
  RECEIVE_AREAS_DATA,
  RECEIVE_HIGHWAYS_DATA,
  STOP_LOADING,
} from '../actions';
// --- initial state
const initialState = {
  position: {
    lat: '46.1314298',
    lng: '1.5424725',
    zoom: 5,
  },

  areas: [],

  highways: [],

  loading: true,

};
// --- Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case RECEIVE_AREAS_DATA:
      return {
        ...state,
        areas: action.areas,
      };
    case RECEIVE_HIGHWAYS_DATA:
      return {
        ...state,
        highways: action.highways,
      };
    case STOP_LOADING:
      return {
        ...state,
        loading: false,
      };
    default: return state;
  }
};
// --- export
export default reducer;
