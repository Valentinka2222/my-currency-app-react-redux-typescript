import { Dispatch } from 'react';
import axios from 'axios';

import { ActionTypes, ActionTyp } from '../../entities/actionTypes';
import { ParamsObj } from '../../entities/currency';
import { TypedThunk } from '../../entities/stateTypes';
import { params } from '../../utils/params';
import { getCurrency } from '../../data/currency';

export const getCurrencyName = (): TypedThunk => {
  return async (dispatch: Dispatch<ActionTyp>) => {
    try {
      const response = await getCurrency();
      dispatch({ type: ActionTypes.FETCH_SUCCESS, payload: response });
    } catch (error: any) {
      dispatch({ type: ActionTypes.FETCH_ERROR, payload: error.message });
    }
  };
};

export const getConvertCurrency = (
  options: Record<string, string | ParamsObj | number | undefined>,
): TypedThunk => {
  return async (dispatch: Dispatch<ActionTyp>) => {
    dispatch({ type: ActionTypes.FETCH_START });
    try {
      const response = await axios.get(`${process.env.REACT_APP_URL}convert?${params(options)}`);
      const convertAmount = response.data.result;
      dispatch({ type: ActionTypes.FETCH_CONVERT_CURRENCY, payload: convertAmount });
    } catch (error: any) {
      dispatch({ type: ActionTypes.FETCH_ERROR, payload: error.message });
    }
  };
};
