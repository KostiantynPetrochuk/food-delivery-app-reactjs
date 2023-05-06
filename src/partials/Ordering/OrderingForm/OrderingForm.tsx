import { OrderingDeliveryCheckbox, OrderingInput } from "..";
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
      <OrderingInput
        inputName="Прізвище"
        inputClassName="firstname"
        value={firstName}
        setValue={setFirstName}
      />
      <OrderingInput
        inputName="Ім'я"
        inputClassName="lastname"
        value={lastName}
        setValue={setLastName}
      />
      <OrderingInput
        inputName="По батькові"
        inputClassName="surrname"
        value={surrName}
        setValue={setSurrName}
      />
      <OrderingInputNumber
        inputName="Телефон"
        inputClassName="phone"
        value={phone}
        setValue={setPhone}
      />
      <OrderingDeliveryCheckbox delivery={delivery} setDelivery={setDelivery} />
      <OrderingInput
        inputName="Адреса доставки"
        inputClassName="address"
        value={address}
        setValue={setAddress}
      />
      <OrderingInput
        inputName="Час доставки"
        inputClassName="time"
        value={deliveryTime}
        setValue={setDeliveryTime}
      />
      <OrderingPayment
        paymentMethod={paymentMethod}
        setPaymentMethod={setPaymentMethod}
      />
    </form>
  );
};

export default OrderingForm;
