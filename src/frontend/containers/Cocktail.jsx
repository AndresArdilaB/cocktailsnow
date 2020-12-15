import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getCocktail } from '../utils/getApiData';
import Filters from '../components/Filters';
import CocktailDetail from '../components/CocktailDetail';

const Cocktail = ({ filters, match: { params } }) => {
  const [cocktail, setCocktail] = useState([]);
  useEffect(() => {
    getCocktail(params.id)
      .then((data) => setCocktail(data));
  }, []);

  return (
    <>
      <Filters filters={filters} isHome />
      <CocktailDetail data={{ data: cocktail[0] ? cocktail[0] : {}, type: 'Detail' }} />
    </>
  );
};

const mapStateToProps = ({ filters, currentCocktail }) => {
  return {
    filters,
    currentCocktail,
  };
};

export default connect(mapStateToProps, null)(Cocktail);
