const getData = (param, value) => {

  const apiEntryPoints = {
    category: 'c',
    glass: 'g',
    ingredient: 'i',
    type: 'a',
  };

  return fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?${apiEntryPoints[param]}=${value}`)
    .then((response) => response.json())
    .then(({ drinks }) => drinks)
    .catch((error) => console.error(error));
};

const getCocktail = (cocktelId) => {

  return fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktelId}`)
    .then((response) => response.json())
    .then(({ drinks }) => drinks)
    .catch((error) => console.error(error));
};

export { getData, getCocktail };
