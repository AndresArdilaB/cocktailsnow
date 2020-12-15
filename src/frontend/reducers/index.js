// myList: state.myList.filter((items) => items.id !== action.payload),
const reducer = (state, action) => {
  switch (action.type) {
    case 'FILTER_BY_NAME':
      return {
        ...state,
        cocktailName: action.payload,
      };
    case 'ORDER_BY_NAME':
      return {
        ...state,
        order: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
