/* eslint-disable prefer-template */
import React from 'react';
import '../assets/styles/components/CocktailDetail.styl';

const CocktailDetail = ({ data: { data, type } }) => {

  return (
    <section className='detail'>
      <div className='title'>
        {type === 'random' ? 'Random Cocktel' : 'Selected Cocktel'}
      </div>
      <div className='detail-container'>
        <div className='media'>
          <img src={data.strDrinkThumb} alt='Cocktail' />
        </div>
        <div className='text'>
          <div className='propierty' id={data.strDrink}>
            <h3>Name:</h3>
            <span>
              {data.strDrink}
            </span>
          </div>
          <div className='propierty'>
            <h3>Glass:</h3>
            <span>
              {data.strGlass}
            </span>
          </div>
          <div className='propierty'>
            <h3>Category:</h3>
            <p>
              {data.strCategory}
            </p>
          </div>
          <div>
            <h3>Ingredients:</h3>
            {data.strIngredient1 && <span>{data.strIngredient1}</span>}
            {data.strIngredient2 && <span>{', ' + data.strIngredient2}</span>}
            {data.strIngredient3 && <span>{', ' + data.strIngredient3}</span>}
            {data.strIngredient4 && <span>{', ' + data.strIngredient4}</span>}
            {data.strIngredient5 && <span>{', ' + data.strIngredient5}</span>}
            {data.strIngredient6 && <span>{', ' + data.strIngredient6}</span>}
            {data.strIngredient7 && <span>{', ' + data.strIngredient7}</span>}
            {data.strIngredient8 && <span>{', ' + data.strIngredient8}</span>}
            {data.strIngredient9 && <span>{', ' + data.strIngredient9}</span>}
            {data.strIngredient10 && <span>{', ' + data.strIngredient10}</span>}
          </div>
          <div>
            <h3>Instructions:</h3>
            <p>
              {data.strInstructions}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CocktailDetail;
