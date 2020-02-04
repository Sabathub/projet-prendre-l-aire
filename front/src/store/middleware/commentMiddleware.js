import axios from 'axios';

import {
  DO_COMMENT,
  receiveAreasData,
  doFailPassword,
  stopLoading,
  submitComment,
} from 'src/store/actions';

const commentMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case DO_COMMENT: {
      const comment = {
        description: (store.getState().form.commentContent),
        rate: (store.getState().form.rate),
        area: (store.getState().form.areaId),
        picture: (store.getState().form.picture),
      };

      // Ouvrir une connexion avec le serveur
      const token = window.localStorage.getItem('token');
      axios.defaults.headers.Authorization = `Bearer ${token}`;
      axios.post('http://54.85.18.78/api/v1/secured/comments/', {
        comment,
      })
      // succès
        .then((response1) => {
        // Dispatch d'une action pour changer le user
        // store.dispatch(changeUserName(response.data));
          console.log('Response', response1);
          store.dispatch(submitComment(response1.data.commentContent));
          axios.get('http://54.85.18.78/api/v1/areas/')
            .then((response2) => {
              console.log("on a la reponse des aires", response2);
              const receiveDataAction = receiveAreasData(response2.data);
              store.dispatch(receiveDataAction);
            })
            .catch((error2) => {
              // console.error permet d'afficher une erreur dans la console
              console.error(error2);
            })
            .finally(() => {
              console.log("on arrete le loading des aires");
              const stopLoadingAction = stopLoading();
              store.dispatch(stopLoadingAction);
            });
        })
      // Erreur
        .catch((error1) => {
          console.log('Error', error1);
          alert('Une erreur indépendante de notre volonté s\'est produite, veuillez réesayez plus tard.');
          store.dispatch(doFailPassword());
        })
      // Dans tous les cas
        .finally();

      break;
    }

    default:
      next(action);
      break;
  }
};

export default commentMiddleware;
