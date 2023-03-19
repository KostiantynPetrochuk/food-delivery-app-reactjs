import "./OrderingCompositionItem.scss";

interface OrderingCompositionItemPropsType {
  name: string;
  price: number;
  count: number;
}

const OrderingCompositionItem = (
  props: OrderingCompositionItemPropsType
): JSX.Element => {
  const { name, price, count } = props;

  return (
    <li className="basket-ordering-composition-list-item">
      <span className="basket-ordering-composition-list-item__name">
        {name}
      </span>
      <span className="basket-ordering-composition-list-item__price">
        {price}грн
      </span>
      <span className="basket-ordering-composition-list-item__count">х2</span>
      <span className="basket-ordering-composition-list-item__total-price">
        {price * count}грн
      </span>
    </li>
  );
};

export default OrderingCompositionItem;
