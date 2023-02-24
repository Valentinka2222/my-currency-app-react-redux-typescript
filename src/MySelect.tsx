type MySelectProps = {
  // onChangeFunction: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  // value: string | undefined;
  country: string[];
};

const MySelect = ({ country }: MySelectProps): JSX.Element => {
  return (
    <select
      className="currency__mount"
      // onChange={e => onChangeFunction(e)}
      // value={value}
      // name={value}
      // id={value}
    >
      {country.map((el, index) => (
        <option key={index} value={el}>
          {el}
        </option>
      ))}
    </select>
  );
};

export default MySelect;
