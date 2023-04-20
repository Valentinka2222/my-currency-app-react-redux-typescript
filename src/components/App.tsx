import MySelect from './MySelect';
import MyInput from './MyInput';
import { useAppSelector } from '../app/hooks';
import useCurrency from '../app/useCurrency';
import { currencyNameSelector, convertCurrencySelector } from '../state/selectors';
import LinearProgress from '@mui/material/LinearProgress';
import { Alert } from '@mui/material';

import { Box } from '@mui/system';

import '../index.scss';

const App = () => {
  const { fullCurencyName, currencyNameArray } = useAppSelector(currencyNameSelector);
  const { convertAmount, isLoading, error } = useAppSelector(convertCurrencySelector);
  const { convert, amount, onChangeBase, getAmount, onChangeConvertCur } = useCurrency(
    currencyNameArray,
    fullCurencyName,
  );
  const { baseCurrency, convertCurrency, baseCurrencyFullName, convertFullCurrencyName } = convert;

  if (error) {
    return (
      <Alert variant="filled" severity="error">
        {error}
      </Alert>
    );
  }

  if (fullCurencyName) {
    return (
      <div className="App">
        <h1>Сurrency Converter</h1>
        <header>
          <div className="board">
            <span>{`From: ${amount}  ${baseCurrency}`}</span> <span>💱</span>
            {!isLoading ? (
              <span>{`to: ${convertAmount} ${convertCurrency}`}</span>
            ) : (
              <span>
                {`to:`}
                <LinearProgress sx={{ margin: 'auto' }} color="secondary" />
              </span>
            )}
          </div>
        </header>
        <div className="container">
          <div className="currency">
            <Box>
              <MyInput amount={amount} getAmount={getAmount} />
              <MySelect
                fullCurencyName={fullCurencyName}
                onChangeFunction={onChangeBase}
                value={baseCurrencyFullName}
              />
            </Box>
            <Box>
              <MyInput amount={convertAmount} getAmount={getAmount} />
              <MySelect
                fullCurencyName={fullCurencyName}
                onChangeFunction={onChangeConvertCur}
                value={convertFullCurrencyName}
              />
            </Box>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default App;
