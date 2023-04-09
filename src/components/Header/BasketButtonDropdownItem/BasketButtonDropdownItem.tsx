import { API_PORT, API_URL } from "../../../env";

import "./BasketButtonDropdownItem.scss";

type BasketButtonDropdownItemPropTypes = {
  imagePath: string;
  dishName: string;
  count: number;
  price: number;
};

const apiUrl = `${API_URL}:${API_PORT}`;

const BasketButtonDropdownItem = (
  props: BasketButtonDropdownItemPropTypes
): JSX.Element => {
  const { imagePath, dishName, count, price } = props;

  return (
    <li className="header-bot-basket-dropdown-list-item">
      <div className="header-bot-basket-left">
        <img
          className="header-bot-basket__img"
          src={`${apiUrl}${imagePath}`}
          alt={""}
        />
      </div>
      <div className="header-bot-basket-middle">
        <span className="header-bot-basket__dish">{dishName}</span>
        <div className="header-bot-basket-counter">
          <div className="header-bot-basket-counter__remove">-</div>
          <div className="header-bot-basket-counter__show">{count}</div>
          <div className="header-bot-basket-counter__add">+</div>
        </div>
      </div>
      <div className="header-bot-basket-right">
        <span className="header-bot-basket__remove">
          <span></span>
          <span></span>
        </span>
        <span className="header-bot-basket-item__price">{price}грн</span>
      </div>
    </li>
  );
};

export default BasketButtonDropdownItem;
