import { ParamsObj } from '../../entities/currency';
import { TypedThunk } from '../../entities/storeTypes';
import { params } from '../../gateways';
import { ActionTypes, ActionTyp } from '../../entities/actionTypes';
import { Dispatch } from 'react';

import axios from 'axios';
import { getCurrency } from '../../data/currency';

export const getCurrencyName = (): TypedThunk => {
  return async (dispatch: Dispatch<ActionTyp>) => {
    dispatch({ type: ActionTypes.FETCH_START });
    try {
      const response = await getCurrency();

      dispatch({ type: ActionTypes.FETCH_SUCCESS, payload: response });
    } catch (error) {
      return ({ message }: { message: string }) => {
        dispatch({ type: ActionTypes.FETCH_ERROR, payload: message });
      };
    }
  };
};

export const getConvertCurrency = (
  options: Record<string, string | ParamsObj | number | undefined>,
): TypedThunk => {
  return async (dispatch: Dispatch<ActionTyp>) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_URL}convert?${params(options)}`);
      console.log(process.env.REACT_APP_URL);
      const convertAmount = response.data.result;

      dispatch({ type: ActionTypes.FETCH_CONVERT_CURRENCY, payload: convertAmount });
    } catch (error) {
      return ({ message }: { message: string }) => {
        console.log(message);
      };
    }
  };
};
