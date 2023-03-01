export const findCurrencyFullName = (
  fullCurencyName: string[],
  e: React.ChangeEvent<HTMLSelectElement>,
) => fullCurencyName.find(el => el === e.target.value);
