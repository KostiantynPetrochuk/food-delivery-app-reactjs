import { OrderingDeliveryCheckbox, OrderingInputText } from "..";
import OrderingPayment from "../OrderingPayment/OrderingPayment";
import OrderingInputNumber from "../OrderingInputNumber";
import { OrderingFormPropsT } from "./OrderingFormPropsT";

import "./OrderingForm.scss";

const OrderingForm = (props: OrderingFormPropsT): JSX.Element => {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    surrName,
    setSurrName,
    phone,
    setPhone,
    delivery,
    setDelivery,
    address,
    setAddress,
    deliveryTime,
    setDeliveryTime,
    paymentMethod,
    setPaymentMethod,
  } = props;
  return (
    <form className="basket-ordering-form">
      <OrderingInputText
        inputName="Прізвище"
        inputClassName="firstname"
        value={firstName}
        setValue={setFirstName}
      />
      <OrderingInputText
        inputName="Ім'я"
        inputClassName="lastname"
        value={lastName}
        setValue={setLastName}
      />
      <OrderingInputText
        inputName="По батькові"
        inputClassName="surrname"
        value={surrName}
        setValue={setSurrName}
      />
      <OrderingInputNumber
        inputName="Телефон"
        inputClassName="phone"
        value={phone}
        min={10}
        setValue={setPhone}
      />
      <OrderingDeliveryCheckbox delivery={delivery} setDelivery={setDelivery} />
      <OrderingInputText
        inputName="Адреса доставки"
        inputClassName="address"
        value={address}
        setValue={setAddress}
        hidden={!delivery}
        min={10}
      />
      <OrderingInputText
        inputName="Час доставки"
        inputClassName="time"
        value={deliveryTime}
        setValue={setDeliveryTime}
        hidden={!delivery}
      />
      <OrderingPayment
        paymentMethod={paymentMethod}
        setPaymentMethod={setPaymentMethod}
      />
    </form>
  );
};

export default OrderingForm;
