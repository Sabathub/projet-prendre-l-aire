import axios from 'axios';

import { SWITCH_OFF } from './reducer';

const ajaxMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SWITCH_OFF:
      // appel axios
      axios.get('https://raw.githubusercontent.com/raywenderlich/recipes/master/Recipes.json')
        .then((response) => {
          const switchOfAction = switchOf(response.data);
          store.dispatch(switchOfAction);
        })
        .catch((error) => {
          // console.error permet d'afficher une erreur dans la console
          console.error(error);
        })
        .finally(() => {
          // voir https://github.com/o-clock-wave/react-e16-challenge-solo-recipes-api-cecileb-oclock/blob/master/src/store/ajaxMiddleware.js
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
