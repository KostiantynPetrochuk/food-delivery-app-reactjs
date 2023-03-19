import "./OrderingPrevButton.scss";

const OrderingPrevButton = (): JSX.Element => {
  return (
    <a href="#" className="basket-button__back">
      <span className="basket-button-back__arrow">
        <span></span>
        <span></span>
      </span>
      <span>Повернутись до магазину</span>
    </a>
  );
};

export default OrderingPrevButton;
