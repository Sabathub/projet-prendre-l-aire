import axios from 'axios';

import { FETCH_AREAS_DATA,receiveData, stopLoading  } from '../actions';

const ajaxMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_AREAS_DATA:
      // appel axios
      axios.get('https://raw.githubusercontent.com/raywenderlich/recipes/master/Recipes.json')
        .then((response) => {
          const receiveDataAction = receiveData(response.data);
          store.dispatch(receiveDataAction);
        })
        .catch((error) => {
          // console.error permet d'afficher une erreur dans la console
          console.error(error);
        })
        .finally(() => {
          const stopLoadingAction = stopLoading();
          store.dispatch(stopLoadingAction);
        });
      break;

    default:
      // je laisse passer les autres actions
      next(action);
  }
};

export default ajaxMiddleware;
