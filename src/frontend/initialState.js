/* eslint-disable prefer-destructuring */
import fetch from 'node-fetch';
import prepareKeys from './utils/prepareKeys';

const getInitialState = async () => {

  let categories,
    glasses,
    type,
    ingredients,
    currentCocktail;

  // Traemos los datos de la API y estandarisamos las llaves y valores para optimizar codigo mas adelante
  // Tambien usamos la funcion prepareKeys para generar las cadenas de texto de las siguientes solicitudes a la API

  await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
    .then((response) => response.json())
    .then(({ drinks }) => drinks.map((d) => ({
      value: d.strCategory,
      key: prepareKeys(d.strCategory),
    })))
    .then((drinks) => { categories = drinks; })
    .catch((error) => console.log(error));

  await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list')
    .then((response) => response.json())
    .then(({ drinks }) => drinks.map((d) => ({
      value: d.strGlass,
      key: prepareKeys(d.strGlass),
    })))
    .then((drinks) => { glasses = drinks; })
    .catch((error) => console.log(error));

  await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
    .then((response) => response.json())
    .then(({ drinks }) => drinks.map((d) => ({
      value: d.strIngredient1,
      key: prepareKeys(d.strIngredient1),
    })))
    .then((drinks) => { ingredients = drinks; })
    .catch((error) => console.log(error));

  await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list')
    .then((response) => response.json())
    .then(({ drinks }) => drinks.map((d) => ({
      value: d.strAlcoholic,
      key: prepareKeys(d.strAlcoholic),
    })))
    .then((drinks) => { type = drinks; })
    .catch((error) => console.log(error));

  //Por ultimo enviamos un arreglo al estado con los filtros que estaran disponibles

  await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then((response) => response.json())
    .then(({ drinks }) => { currentCocktail = drinks[0]; })
    .catch((error) => console.log(error));

  return {
    currentCocktail: {
      type: 'random',
      data: currentCocktail,
    },
    filters: [
      {
        label: 'Categories',
        param: 'category',
        items: categories,
      }, {
        label: 'Glasses',
        param: 'glass',
        items: glasses,
      }, {
        label: 'Ingredients',
        param: 'ingredient',
        items: ingredients,
      }, {
        label: 'Type',
        param: 'type',
        items: type,
      },
    ],
  };
};

const testState = {
  currentCocktail: {
    type: 'random',
    data: {
      idDrink: '14378',
      strDrink: 'Lunch Box',
      strCategory: 'Beer',
      strAlcoholic: 'Alcoholic',
      strGlass: 'Pint glass',
      strInstructions: 'Fill a pint glass almost full with beer. Then fill the rest with orange juice (careful not to fill it to the top). Then take the shot of Amaretto and drop it in.',
      strInstructionsDE: 'Füllen Sie ein Pintglas fast voll mit Bier. Dann den Rest mit Orangensaft füllen (darauf achten, ihn nicht nach oben zu füllen). Dann nimm den Schuss Amaretto und lass ihn rein.',
      strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/qywpvt1454512546.jpg',
      strIngredient1: 'Beer',
      strIngredient2: 'Amaretto',
      strIngredient3: 'Orange juice',
      strMeasure1: '3/4 bottle ',
      strMeasure2: '1 shot ',
      strMeasure3: '1 oz ',
      strCreativeCommonsConfirmed: 'No',
      dateModified: '2016-02-03 15:15:46',
    },
  },
  filters: [
    { label: 'Categories', param: 'category', items: [{ value: 'Test', key: 'test' }] },
    { label: 'Glasses', param: 'glass', items: [{ value: 'Test', key: 'test' }] },
    { label: 'Ingredients', param: 'ingredient', items: [{ value: 'Test', key: 'test' }] },
    { label: 'Type', param: 'type', items: [{ value: 'Test', key: 'test' }] },
  ],
};

export { testState };

export default getInitialState;
