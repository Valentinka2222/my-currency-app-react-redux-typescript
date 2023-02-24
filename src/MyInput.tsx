import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { CurrencyState } from './entities/currency';
import { fetchCurrencyData } from './state/action/actionCreators';
import { TypedDispatch } from './entities/storeTypes';

type MyInputProps = {
  // count: number | string;
  // getCurrency: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const MyInput = () => {
  return <input className="currency__mount"></input>;
};

export default MyInput;
