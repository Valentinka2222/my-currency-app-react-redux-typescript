import { ActionTypes, ActionTyp } from '../../entities/actionTypes';
import { Dispatch } from 'react';
import { TypedThunk } from '../../entities/storeTypes';
import axios from 'axios';

export const fetchCurrencyData = (): TypedThunk => {
  return async (dispatch: Dispatch<ActionTyp>) => {
    dispatch({ type: ActionTypes.FETCH_START });

    try {
      const response = await axios.get('https://openexchangerates.org/api/currencies.json');
      const data = response.data;
      dispatch({ type: ActionTypes.FETCH_SUCCESS, payload: data });
    } catch (error) {
      return ({ message }: { message: string }) => {
        dispatch({ type: ActionTypes.FETCH_ERROR, payload: message });
      };
    }
  };
};
