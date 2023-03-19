import BasketButtonDropdownItem from "../BasketButtonDropdownItem";
import "./BasketButtonDropdown.scss";

const BasketButtonDropdown = (): JSX.Element => {
  return (
    <div className="header-bot-basket-dropdown">
      <ul className="header-bot-basket-dropdown-list">
        <BasketButtonDropdownItem
          imagePath={"/img/pizza/cornelia.png"}
          dishName={"Корнелія"}
          count={1}
          price={155}
        />
        <BasketButtonDropdownItem
          imagePath={"/img/ramen/ramen_with_shredded_beef.png"}
          dishName={"Рамен Нігоші з куркою теріякі"}
          count={1}
          price={155}
        />
        <BasketButtonDropdownItem
          imagePath={"/img/rolls/philadelphia_with_tuna.png"}
          dishName={"Філадельфія з тунцем"}
          count={1}
          price={155}
        />
      </ul>
      <div className="header-bot-basket-amount">
        <span>Сума замовлення</span>
        <span>550грн</span>
      </div>
    </div>
  );
};

export default BasketButtonDropdown;
