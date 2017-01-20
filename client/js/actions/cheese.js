'use strict';
import fetch from 'isomorphic-fetch';

export const FETCH_CHEESES_REQUEST = 'FETCH_CHEESES_REQUEST';
export const fetchCheesesRequest = () => ({
  type: FETCH_CHEESES_REQUEST
});

export const FETCH_CHEESES_SUCCESS = 'FETCH_CHEESES_SUCCESS';
export const fetchCheesesSuccess = (cheeses) => ({
  type: FETCH_CHEESES_SUCCESS,
  cheeses
});

export const FETCH_CHEESES_ERROR = 'FETCH_CHEESES_ERROR';
export const fetchCheesesError = (error) => ({
  type: FETCH_CHEESES_ERROR,
  error
});


export const fetchCheeses = () => dispatch => {
  dispatch(fetchCheesesRequest());
  let URL;
  if (process.env.NODE_ENV === 'production') {
    URL = 'https://localhost/cheeses';
  } else {
    URL = 'http://localhost:8080/cheeses';
  }
  return fetch(URL).then(res => {
    if (!res.ok) {
      let error = new Error(res.statusText);
      error.res = error;
      throw error;
    }
    return res;
  })
  .then(res => res.json())
  .then(data => {
    console.log('server res: ', data.cheesesList);
    dispatch(fetchCheesesSuccess(data.cheesesList))
  })
  .catch(error => {
    dispatch(fetchCheesesError(error))
  })
};
