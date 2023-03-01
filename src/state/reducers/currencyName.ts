import { ActionTypes } from '../../entities/actionTypes';

import type { CurrencyInitialState } from '../../entities/currency';
import type { ActionTyp } from '../../entities/actionTypes';

const initialState: CurrencyInitialState = {
  currencyNameArray: [],
  fullCurencyName: [],
  abbr: [],
  error: null,
};

const currencyNameReducer = (state = initialState, action: ActionTyp): CurrencyInitialState => {
  switch (action.type) {
    case ActionTypes.FETCH_SUCCESS:
      return {
        ...state,
        currencyNameArray: action.payload,
        fullCurencyName: Object.values(action.payload),
        abbr: Object.keys(action.payload),
      };
    case ActionTypes.FETCH_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default currencyNameReducer;
