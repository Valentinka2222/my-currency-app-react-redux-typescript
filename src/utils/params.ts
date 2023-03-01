import { ParamsObj } from '../entities/currency';

export const params = (
  paramsObj: Record<string, string | number | ParamsObj | string | undefined>,
) => {
  return new URLSearchParams({
    apikey: `${process.env.REACT_APP_API_KEY}`,
    ...paramsObj,
  });
};
