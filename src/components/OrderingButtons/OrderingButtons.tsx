import OrderingNextButton from "../OrderingNextButton";
import OrderingPrevButton from "../OrderingPrevButton";

import "./OrderingButtons.scss";

const OrderingButtons = (): JSX.Element => {
  return (
    <div className="basket-buttons">
      <OrderingPrevButton />
      <OrderingNextButton />
    </div>
  );
};

export default OrderingButtons;
