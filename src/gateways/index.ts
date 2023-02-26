import { ParamsObj } from '../entities/currency';

export const params = (paramsObj: Record<string, string | number | ParamsObj | undefined>) => {
  return new URLSearchParams({
    apikey: '0LsO0hGjDB91eWbioFpFK0cyQPnCmLVv',
    ...paramsObj,
  });
};
export const getLatest = (options: Record<string, string | ParamsObj | number>) =>
  fetch(`${process.env.REACT_APP_URL_Currency}/latest?${params(options)}`).then(res => res.json());
// export const getConvertCurrency = (options: Record<string, string | ParamsObj | number>) =>
//   fetch(`${process.env.REACT_APP_URL_Currency}/convert?${params(options)}`).then(res => res.json());
