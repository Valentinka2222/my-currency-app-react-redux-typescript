import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';

import reducer from './reducer';

const rootReducer = combineReducers({
  currency: reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});
