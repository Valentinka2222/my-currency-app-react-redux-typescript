export interface ParamsObj {
  symbols?: string | number;
  base?: string;
  to?: string;
  from?: string;
  amount?: number | string;
}
export interface CurrencyInitialState {
  currencyAbbrByCountry: null;
  country: string[];
  abbr: string[];
  isLoading: boolean;
  error: string | null;
}

export type CurrencyState = {
  currency: CurrencyInitialState;
};
