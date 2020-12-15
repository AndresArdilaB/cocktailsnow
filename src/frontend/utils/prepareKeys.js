const prepareKeys = (text) => {
  let returnText;
  const space = / /gi;
  const various = text.split('/');

  if (various.length > 1) {
    returnText = various[0]
      .trim()
      .replace(space, '_')
      .toLowerCase();

  } else {
    returnText = text
      .trim()
      .replace(space, '_')
      .toLowerCase();
  }

  return returnText;
};

export default prepareKeys;
