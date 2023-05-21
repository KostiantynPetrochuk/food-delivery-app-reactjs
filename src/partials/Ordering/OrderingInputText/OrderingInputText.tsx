import { useState } from "react";

type OrderingInputProps = {
  inputName: string;
  inputClassName: string;
  min?: number;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

const OrderingInputText = (props: OrderingInputProps): JSX.Element => {
  const { inputName, inputClassName, min = 3, value, setValue } = props;
  const [isInputValid, setIsInputValid] = useState<Boolean>(true);
  const labelClassName = `basket-ordering-${inputClassName}`;

  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    if (event.target.value.length > min - 1 && !isInputValid) {
      setIsInputValid(true);
    }

    if (event.target.value.length < min && isInputValid) {
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
        required
        className={`basket-ordering__input${isInputValid ? "" : " _notValid"}`}
        type="text"
        name=""
        id=""
        value={value}
        onChange={handleChangeValue}
        placeholder={inputName}
        onBlur={handleInputBlur}
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

export default OrderingInputText;
