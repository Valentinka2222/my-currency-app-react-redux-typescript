import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { CurrencyState } from './entities/currency';
import { fetchCurrencyData } from './state/action/actionCreators';
import { TypedDispatch } from './entities/storeTypes';
import MySelect from './MySelect';

import MyInput from './MyInput';
import './index.scss';

const App = () => {
  const dispatch = useDispatch<TypedDispatch>();
  const { country, isLoading, error } = useSelector((state: CurrencyState) => state.currency);
  console.log(country);

  useEffect(() => {
    dispatch(fetchCurrencyData());
  }, [dispatch]);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (country) {
    return (
      <div className="App">
        <header>
          <div className="board">
            <span>{` entspricht`}</span>
            <span className="board__convert-currency">{``}</span>
          </div>
        </header>
        <div className="container">
          <div className=" currency">
            <MyInput />
            <MySelect country={country} />
            <MyInput />
            <MySelect country={country} />
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default App;
