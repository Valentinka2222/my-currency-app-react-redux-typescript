import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import convertCurrencyReducer from './reducers/convertCurrency';
import currencyNameReducer from './reducers/currencyName';

const rootReducer = combineReducers({
  currencyName: currencyNameReducer,
  convertCurrencyAmount: convertCurrencyReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});
