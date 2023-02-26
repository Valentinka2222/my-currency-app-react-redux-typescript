import { CurrencyState } from '../../entities/currency';

export const currencyNameSelector = (state: CurrencyState) => state.currencyName;

export const convertCurrencySelector = (state: CurrencyState) => state.convertCurrencyAmount;
