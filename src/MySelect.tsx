type MySelectProps = {
  onChangeFunction: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string | undefined;
  country: string[];
};

const MySelect = ({ country, onChangeFunction, value }: MySelectProps): JSX.Element => {
  return (
    <select
      className="currency__mount"
      onChange={e => onChangeFunction(e)}
      value={value}
      name={value}
      id={value}
    >
      {country.map((el, index) => {
        let selected = value === 'United States Dollar' ? 'selected' : 'false';
        return (
          <option key={index} value={el} selected={selected}>
            {el}
          </option>
        );
      })}
    </select>
  );
};

export default MySelect;
