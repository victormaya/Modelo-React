import React from 'react';
import Head from './Head';
import { Titulo } from './styled';

const Home = () => {
  return (
    <div>
      <Head title="Home" />
      <Titulo background="#000">Meu App - Home</Titulo>
    </div>
  );
};

export default Home;
