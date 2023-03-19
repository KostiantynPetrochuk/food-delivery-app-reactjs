import "./OrderingDeliveryCheckbox.scss";

const OrderingDeliveryCheckbox = (): JSX.Element => {
  return (
    <label className="basket-ordering-delivery">
      <span className="basket-ordering-input__name">Доставка</span>
      <input
        className="basket-ordering-delivery-real-checkbox"
        type="checkbox"
        name=""
        id=""
      />
      <span className="basket-ordering-delivery-fake-checkbox"></span>
    </label>
  );
};

export default OrderingDeliveryCheckbox;
