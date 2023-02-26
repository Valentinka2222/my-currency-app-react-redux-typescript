import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';

import { fetchCurrencyName, fetchConvertCurrency } from '../state/action/actionCreators';
const useCurrency = (currencyNameArray: string[], country: string[]) => {
  const dispatch = useAppDispatch();
  // const [data, setData] = useState<string[]>([]);
  const [base, setBase] = useState<string>('USD');
  // const [curNameArray, setNameArray] = useState<string[]>([]);
  // const [currencyCountryArray, setCurrencyCountry] = useState<string[]>([]);
  const [convertCurrency, setConvertCurrency] = useState<string>('GBP');
  console.log(convertCurrency);
  const [convertCurrencyCountry, setConvertCurrencyCountry] = useState<string | undefined>(
    'British Pound Sterling',
  );
  const [convertAmount, setConvertAmount] = useState<number>(1);
  const [amount, setAmount] = useState<number | string>(1);
  useEffect(() => {
    dispatch(fetchCurrencyName());
    dispatch(fetchConvertCurrency({ to: convertCurrency, from: base, amount: amount }));
    //      getConvert({ to: convertCurrency, from: base, amount: amount }).then(({ result }) =>
    // //       setConvertAmount(result),
    // //     );
  }, [dispatch, convertCurrency, convertAmount, base, amount, convertAmount]);

  // useEffect(() => {
  //   (async () => {
  //     const currency = await getCurrencyName().then(res => res);
  //     setData(currency);
  //     setNameArray(Object.keys(currency));
  //     setCurrencyCountry(Object.values(currency));

  //     getLatest({ symbols: convertCurrency, base: base }).then(({ rates }) =>
  //       setConvertAmount(rates[`${convertCurrency}`]),
  //     );
  //     getConvert({ to: convertCurrency, from: base, amount: amount }).then(({ result }) =>
  //       setConvertAmount(result),
  //     );
  //   })();
  // }, [convertCurrency, convertAmount, base, amount, convertAmount]);

  const onChangeBase = (e: React.ChangeEvent<HTMLSelectElement>) => setBase(e.target.value);

  const onChangeConvertCur = (e: React.ChangeEvent<HTMLSelectElement>) => {
    Object.entries(currencyNameArray).find(
      el => el[1] === e.target.value && setConvertCurrency(el[0]),
    );

    setConvertCurrencyCountry(country.find(el => el === e.target.value));
  };

  const getAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setAmount(Math.ceil(Number(e.target.value)));
  };

  return {
    amount,
    convertAmount,
    convertCurrency,
    base,
    getAmount,
    onChangeBase,
    // curNameArray,
    onChangeConvertCur,
    // currencyCountryArray,
    convertCurrencyCountry,
  };
};

export default useCurrency;
