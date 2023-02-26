import { ActionTypes } from '../../entities/actionTypes';
import type { ActionTyp } from '../../entities/actionTypes';
import type { ConvertCurrency } from '../../entities/currency';

const initialState = {
  convertAmount: 0,
};
const convertCurrencyReducer = (state: ConvertCurrency = initialState, action: ActionTyp) => {
  console.log(action);
  switch (action.type) {
    case ActionTypes.FETCH_CONVERT_CURRENCY:
      return {
        ...state,
        convertAmount: action.payload,
      };

    default:
      return state;
  }
};
export default convertCurrencyReducer;
