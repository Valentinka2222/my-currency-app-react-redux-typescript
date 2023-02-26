import { useAppSelector } from './app/hooks';
import { CurrencyState } from './entities/currency';
import { useSelector } from 'react-redux';

import MySelect from './MySelect';

import MyInput from './MyInput';
import './index.scss';
import useCurrency from './app/useCurrency';
import { currencyNameSelector, convertCurrencySelector } from './state/selectors';

const App = () => {
  const { country, currencyNameArray } = useAppSelector(currencyNameSelector);

  const { convertAmount } = useAppSelector(convertCurrencySelector);
  const {
    getAmount,
    amount,
    convertCurrencyCountry,
    onChangeBase,
    base,
    onChangeConvertCur,

    convertCurrency,
  } = useCurrency(currencyNameArray, country);

  if (country) {
    return (
      <div className="App">
        <header>
          <div className="board">
            <span>{`${amount} ${base} entspricht`}</span>
            <span className="board__convert-currency">{`${convertAmount} ${convertCurrency}`}</span>
          </div>
        </header>
        <div className="container">
          <div className=" currency">
            <MyInput getAmount={getAmount} amount={amount} />
            <MySelect country={country} onChangeFunction={onChangeBase} value={base} />
            <MyInput getAmount={getAmount} amount={convertAmount} />
            <MySelect
              country={country}
              onChangeFunction={onChangeConvertCur}
              value={convertCurrencyCountry}
            />
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default App;
