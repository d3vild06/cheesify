import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from './reducers/cheese';

export default createStore(reducers.cheeseReducer, applyMiddleware(thunk));
