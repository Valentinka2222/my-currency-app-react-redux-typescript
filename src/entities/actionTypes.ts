export enum ActionTypes {
  ADD_CURRENCY = 'ADD_CURRENCY',
  FETCH_START = 'FETCH_START',
  FETCH_SUCCESS = 'FETCH_SUCCESS',
  FETCH_ERROR = 'FETCH_ERROR',
  FETCH_CONVERT_CURRENCY = 'FETCH_CONVERT_CURRENCY',
  FETCH_CONVERT_CURRENCY_SUCCESS = 'FETCH_CONVERT_CURRENCY_SUCCESS',
  FETCH_CONVERT_CURRENCY_ERROR = 'FETCH_CONVERT_CURRENCY_ERROR',
}

export interface FetchStartAction {
  type: ActionTypes.FETCH_START;
}

export interface FetchSuccessAction {
  type: ActionTypes.FETCH_SUCCESS;
  payload: any;
}

export interface FetchErrorAction {
  type: ActionTypes.FETCH_ERROR;
  payload: string;
}
export interface FetchConvertCurrencyAction {
  type: ActionTypes.FETCH_CONVERT_CURRENCY;
  payload: any;
}

export type ActionTyp =
  | FetchStartAction
  | FetchSuccessAction
  | FetchErrorAction
  | FetchConvertCurrencyAction;
