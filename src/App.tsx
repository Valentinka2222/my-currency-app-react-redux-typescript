import { useAppSelector } from './app/hooks';

import MySelect from './MySelect';

import MyInput from './MyInput';
import './index.scss';
import useCurrency from './app/useCurrency';
import { currencyNameSelector, convertCurrencySelector } from './state/selectors';

const App = () => {
  const { fullCurencyName, currencyNameArray } = useAppSelector(currencyNameSelector);

  const { convertAmount } = useAppSelector(convertCurrencySelector);
  const { convert, amount, onChangeBase, getAmount, onChangeConvertCur } = useCurrency(
    currencyNameArray,
    fullCurencyName,
  );
  const { baseCurrency, convertCurrency, baseCurrencyFullName, convertFullCurrencyName } = convert;

  if (fullCurencyName) {
    return (
      <div className="App">
        <header>
          <div className="board">
            <span>{`${amount} ${baseCurrency} entspricht`}</span>
            <span className="board__convert-currency">{`${convertAmount} ${convertCurrency}`}</span>
          </div>
        </header>
        <div className="container">
          <div className=" currency">
            <MyInput getAmount={getAmount} amount={amount} />
            <MySelect
              fullCurencyName={fullCurencyName}
              onChangeFunction={onChangeBase}
              value={baseCurrencyFullName}
            />
            <MyInput getAmount={getAmount} amount={convertAmount} />
            <MySelect
              fullCurencyName={fullCurencyName}
              onChangeFunction={onChangeConvertCur}
              value={convertFullCurrencyName}
            />
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default App;
