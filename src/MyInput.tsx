type MyInputProps = {
  amount: number | string;
  getAmount: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const MyInput: React.FC<MyInputProps> = ({ getAmount, amount }: MyInputProps) => (
  <input value={amount} onChange={e => getAmount(e)} className="currency__mount"></input>
);
export default MyInput;
