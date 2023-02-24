import { useEffect, useState } from 'react';
import { ParamsObj } from '../entities/currency';

import { getConvert, getCurrencyName, getLatest } from '../gateways/index';

const useCurrency = () => {
  const [data, setData] = useState<string[]>([]);
  const [base, setBase] = useState<string>('USD');
  const [curNameArray, setNameArray] = useState<string[]>([]);
  const [currencyCountryArray, setCurrencyCountry] = useState<string[]>([]);
  const [convertCurrency, setConvertCurrency] = useState<string>('GBP');
  const [convertCurrencyCountry, setConvertCurrencyCountry] = useState<string | undefined>(
    'British Pound Sterling',
  );
  const [convertAmount, setConvertAmount] = useState<number>(1);
  const [amount, setAmount] = useState<number | string>(1);

  useEffect(() => {
    (async () => {
      const currency = await getCurrencyName().then(res => res);
      setData(currency);
      setNameArray(Object.keys(currency));
      setCurrencyCountry(Object.values(currency));

      getLatest({ symbols: convertCurrency, base: base }).then(({ rates }) =>
        setConvertAmount(rates[`${convertCurrency}`]),
      );
      getConvert({ to: convertCurrency, from: base, amount: amount }).then(({ result }) =>
        setConvertAmount(result),
      );
    })();
  }, [convertCurrency, convertAmount, base, amount, convertAmount]);

  const onChangeBase = (e: React.ChangeEvent<HTMLSelectElement>) => setBase(e.target.value);

  const onChangeConvertCur = (e: React.ChangeEvent<HTMLSelectElement>) => {
    Object.entries(data).find(el => el[1] === e.target.value && setConvertCurrency(el[0]));

    setConvertCurrencyCountry(currencyCountryArray.find(el => el === e.target.value));
  };

  const getCurrency = (e: React.ChangeEvent<HTMLInputElement>) =>
    setAmount(Math.ceil(Number(e.target.value)));

  return {
    amount,
    convertAmount,
    convertCurrency,
    base,
    getCurrency,
    onChangeBase,
    curNameArray,
    onChangeConvertCur,
    currencyCountryArray,
    convertCurrencyCountry,
  };
};

export default useCurrency;
