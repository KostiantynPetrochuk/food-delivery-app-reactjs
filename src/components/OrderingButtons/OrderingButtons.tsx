import OrderingNextButton from "../OrderingNextButton";
import OrderingPrevButton from "../OrderingPrevButton";

import "./OrderingButtons.scss";

type OrderingButtonsT = {
  handleSubmitOrder: (() => void) | null;
  nextBtnType: string | null;
};

const OrderingButtons = (props: OrderingButtonsT): JSX.Element => {
  const { handleSubmitOrder, nextBtnType } = props;
  return (
    <div className="basket-buttons">
      <OrderingPrevButton />
      <OrderingNextButton
        handleSubmitOrder={handleSubmitOrder}
        nextBtnType={nextBtnType}
      />
    </div>
  );
};

export default OrderingButtons;
