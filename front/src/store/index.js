import { createStore, applyMiddleware, compose } from 'redux';

import signupMiddleware from 'src/store/middleware/signupMiddleware';

// on importe le reducer qui combine les autres
import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    signupMiddleware,
  ),
);

const store = createStore(
  reducer,
  enhancers,
);

export default store;
