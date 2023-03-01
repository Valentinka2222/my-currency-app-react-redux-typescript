export interface ParamsObj {
  symbols?: string | number;
  base?: string;
  to?: string;
  from?: string;
  amount?: number | string;
}

export interface CurrencyInitialState {
  currencyNameArray: string[];
  fullCurencyName: string[];
  abbr: string[];
  error: string | null;
}

export type Options = {
  options: Record<string, string | number | ParamsObj | undefined>;
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
export type ConvertCurrency = {
  convertAmount: null;
  isLoading: boolean;
  error: string | null;
};
