/* eslint-disable import/prefer-default-export */

export const filterByName = (payload) => ({
  type: 'FILTER_BY_NAME',
  payload,
});

export const orderByName = (payload) => ({
  type: 'ORDER_BY_NAME',
  payload,
});
