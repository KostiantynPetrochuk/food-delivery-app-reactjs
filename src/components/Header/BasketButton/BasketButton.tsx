import BasketButtonDropdown from "../BasketButtonDropdown";
import { useAppSelector } from "../../../hooks";

import "./BasketButton.scss";

const BasketButton = (): JSX.Element => {
  const customsList = useAppSelector((state) => state.customs.list);

  const countOfDishes = customsList.reduce((a, b) => a + b.count, 0);

  return (
    <button className="header-bot-basket__button">
      <span className="header-bot-basket__info">Кошик</span>
      <span className="header-bot-basket__count">{countOfDishes}</span>
      <BasketButtonDropdown />
    </button>
  );
};

export default BasketButton;
