import axios from 'axios';

import { FETCH_PROFILE_DATA, receiveProfileData } from '../actions';


const areaMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_PROFILE_DATA: {
      // appel axios
      axios.get('http://54.85.18.78/api/v1/secured/users/profile', {
        headers: {
          Authorization: `Bearer ${store.getState().user.token}`,
        },
      })
        .then((response) => {
          console.log('on a la reponse du profil', response);
          const receiveDataAction = receiveProfileData(response.data);
          store.dispatch(receiveDataAction);
        })
        .catch((error) => {
          // console.error permet d'afficher une erreur dans la console
          console.error(error);
        })
        .finally(() => {
        });
      break;
    }

    default:
      // je laisse passer les autres actions
      next(action);
  }
};

export default areaMiddleware;
