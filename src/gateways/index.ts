export const getCurrencyName = () => {
  return fetch('https://openexchangerates.org/api/currencies.json').then(res => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error('Proccess server errors.');
    }
  });
};

// export const params = (paramsObj: Record<string, string | ParamsObj | number>) => {
//   return new URLSearchParams({
//     apikey: `${process.env.REACT_APP_API_KEY}`,
//     ...paramsObj,
//   });
// };
// export const getLatest = (options: Record<string, string | ParamsObj | number>) =>
//   fetch(`${process.env.REACT_APP_URL_Currency}/latest?${params(options)}`).then(res => res.json());
// export const getConvert = (options: Record<string, string | ParamsObj | number>) =>
//   fetch(`${process.env.REACT_APP_URL_Currency}/convert?${params(options)}`).then(res => res.json());
