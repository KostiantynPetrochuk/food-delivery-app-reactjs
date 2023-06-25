import { useAppSelector } from "../../hooks";
import HomeButton from "../HomeButton";
import OrderingNextButton from "../OrderingNextButton";
import OrderingPrevButton from "../OrderingPrevButton";

import "./OrderingButtons.scss";

type OrderingButtonsT = {
  handleShowOrder: (() => void) | null;
  nextBtnType: string | null;
};

const OrderingButtons = (props: OrderingButtonsT): JSX.Element => {
  const { handleShowOrder, nextBtnType } = props;
  const customsList = useAppSelector((state) => state.customs.list);

  return (
    <div className="basket-buttons">
      <OrderingPrevButton />
      {customsList.length ? (
        <OrderingNextButton
          handleSubmitOrder={handleShowOrder}
          nextBtnType={nextBtnType}
        />
      ) : (
        <HomeButton />
      )}
    </div>
  );
};

export default OrderingButtons;
