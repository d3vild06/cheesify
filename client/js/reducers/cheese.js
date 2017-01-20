'use strict';
import update from 'immutability-helper';

const initialState = {
    cheeses: [],
    loading: false,
    error: null
};

export const cheeseReducer = (state = initialState, action) => {
  let type = action.type;
  switch (type) {
    case 'FETCH_CHEESES_REQUEST':
      return update(state, {
        loading: {$set: true}
      });
      break;
    case 'FETCH_CHEESES_SUCCESS':
    console.log('fetch was successfull... loading cheeses array with:', action.cheeses);
      return update(state, {
        loading: {$set: false},
        cheeses: {$set: action.cheeses}
      });
      break;
    case 'FETCH_CHEESES_ERROR':
      return update(state, {
        loading: {$set: false},
        error: {$set: action.error}
      });
    default:
      console.log('INVALID ACTION');
      return state;
  }
};
