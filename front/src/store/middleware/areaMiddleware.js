import axios from 'axios';

import {
  FETCH_AREAS_DATA, FETCH_HIGHWAYS_DATA, receiveAreasData, receiveHighwaysData, stopLoading, stopLoadingHighways,
} from '../actions';


const areaMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_AREAS_DATA:
      // appel axios
      axios.get('http://54.85.18.78/api/v1/areas/')
        .then((response) => {
          console.log("on a la reponse des aires", response);
          const receiveDataAction = receiveAreasData(response.data);
          store.dispatch(receiveDataAction);
        })
        .catch((error) => {
          // console.error permet d'afficher une erreur dans la console
          console.error(error);
        })
        .finally(() => {
          console.log("on arrete le loading des aires");
          const stopLoadingAction = stopLoading();
          store.dispatch(stopLoadingAction);
        });
      break;

    case FETCH_HIGHWAYS_DATA:
      // appel axios
      axios.get('http://54.85.18.78/api/v1/highways/')
        .then((response) => {
          console.log("on a la reponse des autoroutes");
          const receiveDataAction = receiveHighwaysData(response.data);
          store.dispatch(receiveDataAction);
        })
        .catch((error) => {
          // console.error permet d'afficher une erreur dans la console
          console.error(error);
        })
        .finally(() => {
          console.log("on a le loading des autoroutes");
          const stopLoadingHighwayAction = stopLoadingHighways();
          store.dispatch(stopLoadingHighwayAction);
        });
      break;

    default:
      // je laisse passer les autres actions
      next(action);
  }
};

export default areaMiddleware;
