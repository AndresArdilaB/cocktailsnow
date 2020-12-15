import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/CocktailListItem.styl';

const CocktailListItem = ({ idDrink, strDrink, strDrinkThumb }) => {

  return (
    <div className='container_list_item'>
      <Link to={`/cocktail/${idDrink}`} className='link'>
        <div className='media_list_item'>
          <img src={strDrinkThumb} alt='The Cocktel' />
        </div>
        <div>
          {strDrink}
        </div>
      </Link>
    </div>
  );
};

export default CocktailListItem;
