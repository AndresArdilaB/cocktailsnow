import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Filters from '../components/Filters';
import { getData } from '../utils/getApiData';
import CocktailList from '../components/CocktailList';
// import '../assets/styles/App.scss';

const Results = ({ filters, cocktailName, order, match: { params } }) => {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    const textFilter = cocktailName ? cocktailName.toUpperCase() : null;

    const filter = cocktails.filter((f) => f.strDrink.toUpperCase().match(textFilter));

    if (filter.length > 0 && cocktailName !== '') {
      setCocktails(filter);
    } else {
      getData(params.param, params.value)
        .then((data) => {
          const newOrder = data;

          if (order === 'asc') {
            newOrder.sort();
          } else if (order === 'desc') {
            newOrder.reverse();
          }

          setCocktails(newOrder);
        });
    }

  }, [params.param, params.value, cocktailName, order]);

  return (
    <>
      <Filters filters={filters} />
      {
        !cocktails ?
          <div className='alert'>No cocktails with this filter.</div> :
          <CocktailList items={cocktails} />
      }
    </>
  );
};

const mapStateToProps = ({ filters, cocktailName, order }) => {
  return {
    filters,
    cocktailName,
    order,
  };
};

export default connect(mapStateToProps, null)(Results);
