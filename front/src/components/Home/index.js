// Import NPM
import React from 'react';
// Import local
import './home.scss';
import Maparea from 'src/containers/Maparea';
import Homesearch from 'src/containers/Home/Homesearch';


const Home = () => (
  <>
    <Homesearch />
    <Maparea />
  </>
);

export default Home;
