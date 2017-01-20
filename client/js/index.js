import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import CheeseList from './components/CheeseList';
import store from  './store';


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <CheeseList />
    </Provider>,
    document.getElementById('app')
  )
});

console.log(`Client running in ${process.env.NODE_ENV} mode`);
