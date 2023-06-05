import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import { correctAnswersReducer } from './reducers/correctAnswersReducer';
import { incorrectAnswersReducer } from './reducers/incorrectAnswersReducer';

const reducer = combineReducers({
  correctStore: correctAnswersReducer,
  incorrectStore: incorrectAnswersReducer,
});

export const store = configureStore({ reducer });