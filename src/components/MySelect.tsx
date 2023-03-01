import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

type MySelectProps = {
  onChangeFunction: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string | undefined;
  fullCurencyName: string[];
};

const MySelect = ({ fullCurencyName, onChangeFunction, value }: MySelectProps): JSX.Element => {
  return (
    <Box sx={{ minWidth: '50%' }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Currency
        </InputLabel>
        <NativeSelect
          onChange={e => onChangeFunction(e)}
          name={value}
          id={value}
          value={value}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
        >
          {fullCurencyName.map((el, index) => {
            return (
              <option key={index} value={el}>
                {el}
              </option>
            );
          })}
        </NativeSelect>
      </FormControl>
    </Box>
  );
};

export default MySelect;
