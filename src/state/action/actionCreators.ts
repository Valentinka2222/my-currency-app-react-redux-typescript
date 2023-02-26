import { ParamsObj } from '../../entities/currency';
import { TypedThunk } from '../../entities/storeTypes';
import { params } from '../../gateways';
import { ActionTypes, ActionTyp } from '../../entities/actionTypes';
import { Dispatch } from 'react';

import axios from 'axios';

export const fetchCurrencyName = (): TypedThunk => {
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

export const fetchConvertCurrency = (
  options: Record<string, string | ParamsObj | number>,
): TypedThunk => {
  console.log(options);
  return async (dispatch: Dispatch<ActionTyp>) => {
    try {
      const response = await axios.get(
        `https://api.apilayer.com/currency_data/convert?${params(options)}`,
      );

      const convertAmount = response.data.result;
      dispatch({ type: ActionTypes.FETCH_CONVERT_CURRENCY, payload: convertAmount });
    } catch (error) {
      return ({ message }: { message: string }) => {
        console.log(message);
      };
    }
  };
};

// export const fetchConvertCurrency = (
//   options: Record<string, string | ParamsObj | number>,
// ): TypedThunk => {
//   console.log(options);
//   return async (dispatch: Dispatch<ActionTyp>) => {
//     try {
//       const response = await fetch(
//         `https://api.apilayer.com/currency_data/convert?${params(options)}`,
//       );
//       const convertAmount = response.json();
//       dispatch({ type: ActionTypes.FETCH_CONVERT_CURRENCY, payload: convertAmount });
//     } catch (error) {
//       return ({ message }: { message: string }) => {
//         console.log(message);
//       };
//     }
//   };
// };
