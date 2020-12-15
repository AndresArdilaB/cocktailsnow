import React from 'react';
import { connect } from 'react-redux';
import Filters from '../components/Filters';
import CocktailDetail from '../components/CocktailDetail';
import '../assets/styles/App.styl';

const Home = ({ filters, currentCocktail }) => {

  return (
    <>
      <Filters filters={filters} isHome />
      <CocktailDetail data={currentCocktail} />
    </>
  );
};

const mapStateToProps = ({ filters, currentCocktail }) => {
  return {
    filters,
    currentCocktail,
  };
};

export default connect(mapStateToProps, null)(Home);
