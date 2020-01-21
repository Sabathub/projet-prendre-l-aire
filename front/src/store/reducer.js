// == Initial State
const initialState = {
  light: true,
};

// == Types
export const SWITCH_OFF = 'SWITCH_OFF';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SWITCH_OFF:
      return {
        ...state,
        light: false,
      };

    default:
      return state;
  }
};

// == Action Creators
export const switchOf = () => ({
  type: SWITCH_OFF,
});

// == Export
export default reducer;

// CES DONEES SERVENT D'EXEMPLE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
