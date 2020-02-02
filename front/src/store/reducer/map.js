// reducer pour gérer les données relatives à la carte
// --- action types
import {
  RECEIVE_AREAS_DATA,
  RECEIVE_HIGHWAYS_DATA,
  STOP_LOADING,
  STOP_LOADING_HIGHWAYS,
  CHANGE_MARKERS_VALUE,
  CHANGE_AREAS_DATA,
} from '../actions';
// --- initial state
const initialState = {
  position: {
    lat: '46.1314298',
    lng: '1.5424725',
    zoom: 5,
  },

  areas: [],

  newAreasValue: {},

  highways: [],

  arealoading: true,
  highwayloading: true,

};
// --- Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_MARKERS_VALUE:
      return {
        ...state,
        newAreasValue: action.newAreasValue,
      };
    case CHANGE_AREAS_DATA:
      return {
        ...state,
        areas: action.areas,
      };
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
        arealoading: false,
      };
    case STOP_LOADING_HIGHWAYS:
      return {
        ...state,
        highwayloading: false,
      };
    default: return state;
  }
};
// --- export
export default reducer;
