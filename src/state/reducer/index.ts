import { ActionTypes } from '../../entities/actionTypes';

import type { CurrencyInitialState } from '../../entities/currency';
import type { ActionTyp } from '../../entities/actionTypes';

const initialState: CurrencyInitialState = {
  currencyAbbrByCountry: null,
  country: [],
  abbr: [],
  isLoading: false,
  error: null,
};

const reducer = (state = initialState, action: ActionTyp): CurrencyInitialState => {
  console.log(action);
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
        currencyAbbrByCountry: action.payload,
        country: Object.values(action.payload),
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

export default reducer;
