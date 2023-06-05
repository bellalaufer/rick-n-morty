import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import { mainReducer } from './reducers/mainReducer';

const reducer = combineReducers({
  mainStore: mainReducer,
});

export const store = configureStore({ reducer });