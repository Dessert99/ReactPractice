import React from 'react';
import LinkButton from '../components/LinkButton';

const Home = () => {
  return (
    <>
      <h1>welcome to react-playground</h1>

      <LinkButton to="/No1">No1</LinkButton>
      <LinkButton to="/No2">No2</LinkButton>
    </>
  );
};

export default Home;
