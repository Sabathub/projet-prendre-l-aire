import axios from 'axios';

import { DO_COMMENT, submitComment, doFailPassword } from 'src/store/actions';

const commentMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case DO_COMMENT: {
      const comment = {
        description: (store.getState().form.commentContent),
        rate: 5,
        area: (store.getState().form.areaId),
        picture: (store.getState().form.picture),
      };

      // Ouvrir une connexion avec le serveur
      axios.post('http://54.85.18.78/api/v1/secured/comments/', {
        comment,
      })
      // succès
        .then((response) => {
        // Dispatch d'une action pour changer le user
        // store.dispatch(changeUserName(response.data));
          console.log('Response', response);
          store.dispatch(submitComment(response.data));
          alert('Votre message a bien été envoyé.');
        })
      // Erreur
        .catch((error) => {
          console.log('Error', error);
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
