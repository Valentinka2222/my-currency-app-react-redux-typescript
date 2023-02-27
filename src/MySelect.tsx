type MySelectProps = {
  onChangeFunction: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string | undefined;
  fullCurencyName: string[];
};

const MySelect = ({ fullCurencyName, onChangeFunction, value }: MySelectProps): JSX.Element => {
  return (
    <select
      className="currency__mount"
      onChange={e => onChangeFunction(e)}
      value={value}
      name={value}
      id={value}
    >
      {fullCurencyName.map((el, index) => {
        return (
          <option key={index} value={el}>
            {el}
          </option>
        );
      })}
    </select>
  );
};

export default MySelect;
