import { createStore, applyMiddleware, compose } from 'redux';

import signupMiddleware from 'src/store/middleware/signupMiddleware';
import loginMiddleware from 'src/store/middleware/loginMiddleware';
import areaMiddleware from 'src/store/middleware/areaMiddleware';
import contactMiddleware from 'src/store/middleware/contactMiddleware';

// on importe le reducer qui combine les autres
import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    signupMiddleware,
    loginMiddleware,
    areaMiddleware,
    contactMiddleware,
  ),
);

const store = createStore(
  reducer,
  enhancers,
);

export default store;
