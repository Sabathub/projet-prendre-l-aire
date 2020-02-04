import React from 'react';
import {
  Container, Card, Header, Image,
} from 'semantic-ui-react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import Kevin from '../../assets/team/team_kevin_dubuy.png';
import Laetitia from '../../assets/team/team_laetitia_lez.jpg';
import Marion from '../../assets/team/team_marion_polomeni.jpg';
import Sophie from '../../assets/team/team_sophie_verger.jpg';
import Maxime from '../../assets/team/team_maxime_julien.jpg';

import './team.scss';

const Team = () => (
  <Container id="team">
    <Card.Group id="cards">
      {/* Team member card */}
      <Card className="card">
        <Image src={Laetitia} wrapped ui={false} />
        <Card.Content>
          <Card.Header>Laetitia Elbaz</Card.Header>
          <Card.Description>
            <p className="job">Développeuse Web Full Stack</p>
            <p className="role">Scrum Master</p>
            <p className="description">Spécialisation Symfony</p>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a href="https://www.linkedin.com/in/laetitiaelbaz/" target="_blank"><FaLinkedinIn className="social" /></a>
          <a href="https://github.com/LaetitiaElbaz" target="_blank"><FaGithub className="social" /></a>
        </Card.Content>
      </Card>
      {/* End of team member card */}

      {/* Team member card */}
      <Card>
        <Image src={Marion} wrapped ui={false} />
        <Card.Content>
          <Card.Header>Marion Polomeni</Card.Header>
          <Card.Description>
            <p className="job">Développeuse Web Full Stack</p>
            <p className="role">Lead Developer Back</p>
            <p className="description">Spécialisation Symfony</p>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a href="https://www.linkedin.com/in/marionpolomeni/" target="_blank"><FaLinkedinIn className="social" /></a>
          <a href="https://github.com/marionpolomeni" target="_blank"><FaGithub className="social" /></a>
        </Card.Content>
      </Card>
      {/* End of team member card */}

      {/* Team member card */}
      <Card>
        <Image src={Sophie} wrapped ui={false} />
        <Card.Content>
          <Card.Header>Sophie Verger</Card.Header>
          <Card.Description>
            <p className="job">Développeuse Web Full Stack</p>
            <p className="role">Git Master</p>
            <p className="description">Spécialisation Symfony</p>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a href="https://www.linkedin.com/in/sophieverger/" target="_blank"><FaLinkedinIn className="social" /></a>
          <a href="https://github.com/Sophie-Verger" target="_blank"><FaGithub className="social" /></a>
        </Card.Content>
      </Card>
      {/* End of team member card */}

      {/* Team member card */}
      <Card>
        <Image src={Maxime} wrapped ui={false} />
        <Card.Content>
          <Card.Header>Maxime Julien</Card.Header>
          <Card.Description>
            <p className="job">Développeur Web Full Stack</p>
            <p className="role">Lead Developer Front</p>
            <p className="description">Spécialisation React</p>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a href="https://www.linkedin.com/in/maxime-julien/" target="_blank"><FaLinkedinIn className="social" /></a>
          <a href="https://github.com/Sabathub" target="_blank"><FaGithub className="social" /></a>
        </Card.Content>
      </Card>
      {/* End of team member card */}

      {/* Team member card */}
      <Card>
        <Image src={Kevin} wrapped ui={false} />
        <Card.Content>
          <Card.Header>Kevin Dubuy</Card.Header>
          <Card.Description>
            <p className="job">Développeur Web Full Stack</p>
            <p className="role">Product Owner</p>
            <p className="description">Spécialisation React</p>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a href="https://www.linkedin.com/in/dubuykevin/" target="_blank"><FaLinkedinIn className="social" /></a>
          <a href="https://www.github.com/kevin-dubuy" target="_blank"><FaGithub className="social" /></a>
        </Card.Content>
      </Card>
      {/* End of team member card */}
    </Card.Group>
  </Container>

);

export default Team;
