import { Link } from "react-router-dom";

import "./OrderingPrevButton.scss";

const OrderingPrevButton = (): JSX.Element => {
  return (
    <Link to={"/"} className="basket-button__back">
      <span className="basket-button-back__arrow">
        <span></span>
        <span></span>
      </span>
      <span>Повернутись до магазину</span>
    </Link>
  );
};

export default OrderingPrevButton;
