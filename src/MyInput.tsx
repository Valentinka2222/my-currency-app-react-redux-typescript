import Input from '@mui/material/Input';
import Box from '@mui/material/Box';

type MyInputProps = {
  amount: null | string | number;
  getAmount: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

const MyInput: React.FC<MyInputProps> = ({ getAmount, amount }: MyInputProps) => (
  <Box sx={{ minWidth: '100%' }}>
    <Input sx={{ minWidth: '100%' }} value={amount} onChange={e => getAmount(e)} />
  </Box>
);
export default MyInput;
