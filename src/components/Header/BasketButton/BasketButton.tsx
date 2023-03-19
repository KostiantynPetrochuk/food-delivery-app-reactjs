import BasketButtonDropdown from "../BasketButtonDropdown";
import "./BasketButton.scss";

const BasketButton = (): JSX.Element => {
  return (
    <button className="header-bot-basket__button">
      <span className="header-bot-basket__info">Кошик</span>
      <span className="header-bot-basket__count">3</span>
      <BasketButtonDropdown />
    </button>
  );
};

export default BasketButton;
