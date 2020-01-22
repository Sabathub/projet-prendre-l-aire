import axios from 'axios';

import { DO_CONNECT } from 'src/store/actions';

const signupMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case DO_CONNECT: {
      const { username, email, password } = store.getState();

      // Ouvrir une connexion avec le serveur
      axios.post('http://localhost:3001/login', {
      username,
      email,
      password,
      })
      // succès
      .then((response) => {
        // Dispatch d'une action pour changer le user
        //store.dispatch(changeUserName(response.data));
        console.log('Response', response);
      })
      // Erreur
      .catch((error) => {
        console.log('Error', error);
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

export default signupMiddleware;
