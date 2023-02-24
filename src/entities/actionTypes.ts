export enum ActionTypes {
  ADD_CURRENCY = 'ADD_CURRENCY',
  FETCH_START = 'FETCH_START',
  FETCH_SUCCESS = 'FETCH_SUCCESS',
  FETCH_ERROR = 'FETCH_ERROR',
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

export type ActionTyp = FetchStartAction | FetchSuccessAction | FetchErrorAction;
