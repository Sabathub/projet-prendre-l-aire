// == Import : npm
import React from 'react';
import { Grid, Image } from 'semantic-ui-react';


import backgroundCar from '../../assets/presentation/illustration_presentation.svg';


// == Import : local
import './presentation.scss';


// == Composant
const Presentation = () => (
  <>
    <Grid centered id="presentation" stackable>
      <Grid.Column width={9}>
        <div>
          <p><b>Prendre l'aire</b> est un site collaboratif qui vise à mettre en relation les usagers des aires d'autoroutes françaises.<br /><br />
          Vous pouvez visualiser les aires d'autoroute à l'aide du menu déroulant.<br /><br />
          En sélectionnant un repère, vous avez la possibilité d'accéder à la fiche détaillée de l'aire en question.<br /><br />
          Pour partager votre expérience, il vous suffit de vous inscrire et de laisser un commentaire, une photo et/ou une note.</p>
        </div>
      </Grid.Column>
      <Grid.Column width={7}>
        <Image src={backgroundCar} />
      </Grid.Column>
    </Grid>

  </>
);


// == Export
export default Presentation;
