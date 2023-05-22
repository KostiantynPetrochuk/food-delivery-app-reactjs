import { useState } from "react";
import "./OrderingInputNumber.scss";

type OrderingInputProps = {
  inputName: string;
  inputClassName: string;
  value: string;
  min: number;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

const OrderingInputNumber = (props: OrderingInputProps): JSX.Element => {
  const { inputName, inputClassName, min, value, setValue } = props;
  const [isInputValid, setIsInputValid] = useState<Boolean>(true);
  const labelClassName = `basket-ordering-${inputClassName}`;

  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const filteredValue = event.target.value.replace(/[^0-9]/g, "");

    setValue(filteredValue);
    if (filteredValue.length > min - 1 && !isInputValid) {
      setIsInputValid(true);
    }

    if (filteredValue.length < min && isInputValid) {
      setIsInputValid(false);
    }
  };

  const handleInputBlur = () => {
    if (value.length < min) {
      setIsInputValid(false);
      return;
    }
    setIsInputValid(true);
  };

  return (
    <label className={labelClassName}>
      <span className="basket-ordering-input__name">{inputName}</span>
      <input
        className={`basket-ordering__input${isInputValid ? "" : " _notValid"}`}
        type="text"
        name=""
        id=""
        value={value}
        onChange={handleChangeValue}
        placeholder="0987777777"
        onBlur={handleInputBlur}
        maxLength={10}
      />
      <span
        className={`basket-ordering-input__message${
          isInputValid ? "" : " _notValid"
        }`}
      >
        Заповніть поле. Мінімум 3 символи
      </span>
    </label>
  );
};

export default OrderingInputNumber;
