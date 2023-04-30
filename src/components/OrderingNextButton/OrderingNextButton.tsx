import { Link } from "react-router-dom";

import "./OrderingNextButton.scss";

type OrderingNextButtonPropsT = {
  handleSubmitOrder: (() => void) | null;
  nextBtnType: string | null;
};

const OrderingNextButton = (props: OrderingNextButtonPropsT): JSX.Element => {
  const { handleSubmitOrder, nextBtnType } = props;
  return nextBtnType === "submitOrdering" && handleSubmitOrder !== null ? (
    <button onClick={handleSubmitOrder} className="basket-button-next">
      <span>Підтвердити</span>
      <span className="basket-button-next-arrow">
        <span></span>
        <span></span>
      </span>
    </button>
  ) : (
    <Link to={`/ordering`} className="basket-button-next">
      <span>Оформити замовлення</span>
      <span className="basket-button-next-arrow">
        <span></span>
        <span></span>
      </span>
    </Link>
  );
};

export default OrderingNextButton;
