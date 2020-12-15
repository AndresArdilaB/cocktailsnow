/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import CocktailListItem from './CocktailListItem';
import '../assets/styles/components/CocktailList.styl';

const CocktailList = ({ items }) => {

  return (
    <section className='container_list'>
      <div className='cocktails_list'>
        {
          items.map((d, i) => (
            <div id={d.idDrink} key={d.idDrink}>
              <CocktailListItem {...d} />
            </div>
          ))
        }
      </div>
    </section>
  );
};

export default CocktailList;
