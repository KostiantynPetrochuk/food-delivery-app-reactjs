import "./OrderingInputNumber.scss";

type OrderingInputProps = {
  inputName: string;
  inputClassName: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

const OrderingInputNumber = (props: OrderingInputProps): JSX.Element => {
  const { inputName, inputClassName, value, setValue } = props;
  const labelClassName = `basket-ordering-${inputClassName}`;

  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);

  return (
    <label className={labelClassName}>
      <span className="basket-ordering-input__name">{inputName}</span>
      <input
        className="basket-ordering__input"
        type="number"
        name=""
        id=""
        value={value}
        onChange={handleChangeValue}
        placeholder="0987777777"
      />
    </label>
  );
};

export default OrderingInputNumber;
