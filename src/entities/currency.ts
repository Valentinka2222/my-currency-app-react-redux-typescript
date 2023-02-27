export interface ParamsObj {
  symbols?: string | number;
  base?: string;
  to?: string;
  from?: string;
  amount?: number | string;
}
export type Options = {
  options: Record<string, string | number | ParamsObj | undefined>;
};

export interface CurrencyInitialState {
  currencyNameArray: string[];
  fullCurencyName: string[];
  abbr: string[];
  isLoading: boolean;
  error: string | null;
}
export type ConvertCurrency = {
  convertAmount: number;
};

export type CurrencyState = {
  currencyName: CurrencyInitialState;
  convertCurrencyAmount: ConvertCurrency;
};
export type Convert = {
  baseCurrency?: string;
  convertCurrency?: string;
  baseCurrencyFullName?: string;
  convertFullCurrencyName?: string;
};
