import { OrderingCompositionItem } from "..";

import "./OrderingComposition.scss";

const OrderingComposition = (): JSX.Element => {
  return (
    <div className="basket-ordering-composition">
      <h3 className="basket-ordering-composition__title">Склад замовлення</h3>
      <ul className="basket-ordering-composition-list">
        <OrderingCompositionItem name="Пепероні" price={250} count={2} />
        <OrderingCompositionItem
          name="Рамен Шою з морепродуктами"
          price={250}
          count={2}
        />
        <OrderingCompositionItem name="Пепероні" price={250} count={2} />
        <OrderingCompositionItem
          name="Рамен Шою з морепродуктами"
          price={250}
          count={2}
        />
      </ul>
      <div className="basket-ordering-composition-total">
        <span className="basket-ordering-composition-total__title">
          Сума замовлення
        </span>
        <span className="basket-ordering-composition-total__amount">
          2000грн
        </span>
      </div>
    </div>
  );
};

export default OrderingComposition;
