// Import NPM
import React from 'react';
// Import local
import './home.scss';
import Maparea from 'src/containers/Maparea';
import Homesearch from 'src/containers/Home/Homesearch';
import Presentation from 'src/components/Presentation';


const Home = () => (
  <>
    <Presentation />
    <Homesearch />
    <Maparea />
  </>
);

export default Home;
