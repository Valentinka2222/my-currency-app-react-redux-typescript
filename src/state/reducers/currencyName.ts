import { ActionTypes } from '../../entities/actionTypes';

import type { CurrencyInitialState } from '../../entities/currency';
import type { ActionTyp } from '../../entities/actionTypes';

const initialState: CurrencyInitialState = {
  currencyNameArray: [],
  fullCurencyName: [],
  abbr: [],
  isLoading: false,
  error: null,
};

const currencyNameReducer = (state = initialState, action: ActionTyp): CurrencyInitialState => {
  switch (action.type) {
    case ActionTypes.FETCH_START:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case ActionTypes.FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        currencyNameArray: action.payload,
        fullCurencyName: Object.values(action.payload),
        abbr: Object.keys(action.payload),
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
export default currencyNameReducer;
