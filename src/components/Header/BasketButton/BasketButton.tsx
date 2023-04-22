import { Link } from "react-router-dom";

import BasketButtonDropdown from "../BasketButtonDropdown";
import { useAppSelector } from "../../../hooks";

import "./BasketButton.scss";

const BasketButton = (): JSX.Element => {
  const customsList = useAppSelector((state) => state.customs.list);

  const countOfDishes = customsList.reduce((a, b) => a + b.count, 0);

  return (
    <div className="header-bot-basket-button-inner">
      <Link to={"/basket"} className="header-bot-basket__button">
        <span className="header-bot-basket__info">Кошик</span>
        <span className="header-bot-basket__count">{countOfDishes}</span>
      </Link>
      <BasketButtonDropdown />
    </div>
  );
};

export default BasketButton;
