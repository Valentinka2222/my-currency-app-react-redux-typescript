import { ActionTypes } from '../../entities/actionTypes';
import type { ActionTyp } from '../../entities/actionTypes';
import type { ConvertCurrency } from '../../entities/currency';

const initialState = {
  convertAmount: 0,
  isLoading: false,
  error: null,
};
const convertCurrencyReducer = (state: ConvertCurrency = initialState, action: ActionTyp) => {
  switch (action.type) {
    case ActionTypes.FETCH_START:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case ActionTypes.FETCH_CONVERT_CURRENCY:
      return {
        ...state,
        isLoading: false,
        convertAmount: action.payload,
      };
    case ActionTypes.FETCH_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default convertCurrencyReducer;
