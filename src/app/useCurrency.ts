import { useEffect, useState } from 'react';

import { useAppDispatch } from '../app/hooks';
import { getCurrencyName, getConvertCurrency } from '../state/actions/actionCreators';
import { findCurrencyFullName } from '../utils/findCurrencyFullName';

import type { Convert } from '../entities/currency';

const useCurrency = (currencyNameArray: string[], fullCurencyName: string[]) => {
  const dispatch = useAppDispatch();
  const [convert, setConvert] = useState<Convert>({
    baseCurrency: 'USD',
    convertCurrency: 'GBP',
    baseCurrencyFullName: 'United States Dollar',
    convertFullCurrencyName: 'British Pound Sterling',
  });
  const [amount, setAmount] = useState<number | string>(1);

  useEffect(() => {
    dispatch(getCurrencyName());
    dispatch(
      getConvertCurrency({
        to: convert.convertCurrency,
        from: convert.baseCurrency,
        amount: amount,
      }),
    );
  }, [dispatch, convert, amount]);

  const onChangeBase = (e: React.ChangeEvent<HTMLSelectElement>) =>
    Object.entries(currencyNameArray).find(
      el =>
        el[1] === e.target.value &&
        setConvert(prevState => ({
          ...prevState,
          baseCurrency: el[0],
          baseCurrencyFullName: findCurrencyFullName(fullCurencyName, e),
        })),
    );

  const onChangeConvertCur = (e: React.ChangeEvent<HTMLSelectElement>) =>
    Object.entries(currencyNameArray).find(
      el =>
        el[1] === e.target.value &&
        setConvert(prevState => ({
          ...prevState,
          convertCurrency: el[0],
          convertFullCurrencyName: findCurrencyFullName(fullCurencyName, e),
        })),
    );

  const getAmount = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setAmount(Math.ceil(Number(e.target.value)));

  return {
    convert,
    amount,
    getAmount,
    onChangeBase,
    onChangeConvertCur,
  };
};

export default useCurrency;
