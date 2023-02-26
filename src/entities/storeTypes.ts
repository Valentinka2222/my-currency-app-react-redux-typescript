import { ActionTyp } from './actionTypes';
import { store } from '../state/store';
import currencyNameReducer from '../state/reducers/currencyName';
import { ThunkAction, ThunkDispatch } from '@reduxjs/toolkit';

export type AppDispatch = typeof store.dispatch;
export type ReduxState = ReturnType<typeof currencyNameReducer>;
export type RootState = ReturnType<typeof store.getState>;
export type TypedDispatch = ThunkDispatch<ReduxState, any, ActionTyp>;
export type TypedThunk<ReturnType = void> = ThunkAction<ReturnType, ReduxState, unknown, ActionTyp>;
