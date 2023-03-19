import { OrderingDeliveryCheckbox, OrderingInput } from "..";

import "./OrderingForm.scss";

const OrderingForm = (): JSX.Element => {
  return (
    <form className="basket-ordering-form">
      <OrderingInput inputName="Прізвище" inputClassName="firstname" />
      <OrderingInput inputName="Ім'я" inputClassName="lastname" />
      <OrderingInput inputName="По батькові" inputClassName="surrname" />
      <OrderingInput inputName="Телефон" inputClassName="phone" />
      <OrderingDeliveryCheckbox />
      <OrderingInput inputName="Адреса доставки" inputClassName="address" />
      <OrderingInput inputName="Час доставки" inputClassName="time" />
      <div className="basket-ordering-payment">
        <span className="basket-ordering-payment__title">Спосіб оплати</span>
        <label className="basket-ordering-payment-item">
          <input
            className="basket-ordering-payment-real-radio"
            type="radio"
            name="payment"
            id=""
          />
          <span className="basket-ordering-payment-fake-radio"></span>
          <img
            className="basket-ordering-payment__logo"
            src="img/credit-card.svg"
            alt=""
          />
          <span className="basket-ordering-payment-item__subtitle">Картка</span>
        </label>
        <label className="basket-ordering-payment-item">
          <input
            className="basket-ordering-payment-real-radio"
            type="radio"
            name="payment"
            id=""
          />
          <span className="basket-ordering-payment-fake-radio"></span>
          <img
            className="basket-ordering-payment__logo"
            src="img/cash.svg"
            alt=""
          />
          <span className="basket-ordering-payment-item__subtitle">
            Готівка
          </span>
        </label>
      </div>
    </form>
  );
};

export default OrderingForm;
