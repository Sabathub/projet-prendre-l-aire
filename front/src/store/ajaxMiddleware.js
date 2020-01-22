import axios from 'axios';

import { logUser, LOG_USER } from 'src/store/reducer/user';

const ajaxMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOG_USER:
      // appel axios
      axios.get('https://api.github.com/users/kevin-dubuy')
        .then((response) => {
          // on veut mettre logged à true et stocker les infos de l'utilisateur
          const actionLogUser = logUser(
            response.data.login,
            response.data.avatar_url,
            response.data.name,
            response.email,
          );
          store.dispatch(actionLogUser);
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.error(error);
        });
      break;
    default:
      // par défaut, je laisse passer l'action
      next(action);
  }
};

export default ajaxMiddleware;
