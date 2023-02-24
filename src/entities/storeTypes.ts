import { ActionTyp } from './actionTypes';
import { store } from '../state/store';
import reducer from '../state/reducer';
import { ThunkAction, ThunkDispatch } from '@reduxjs/toolkit';

export type AppDispatch = typeof store.dispatch;
export type ReduxState = ReturnType<typeof reducer>;
export type RootState = ReturnType<typeof store.getState>;
export type TypedDispatch = ThunkDispatch<ReduxState, any, ActionTyp>;
export type TypedThunk<ReturnType = void> = ThunkAction<ReturnType, ReduxState, unknown, ActionTyp>;
