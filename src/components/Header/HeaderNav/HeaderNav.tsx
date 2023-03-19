import HeaderNavLink from "../HeaderNavLink";
import "./HeaderNav.scss";

const HeaderNav = (): JSX.Element => {
  return (
    <nav className="header-bot-menu">
      <ul className="header-bot-menu-list">
        <HeaderNavLink imagePath={"/img/pasta.svg"} categoryName={"Паста"} />
        <HeaderNavLink imagePath={"/img/pizza.svg"} categoryName={"Піца"} />
        <HeaderNavLink imagePath={"/img/ramen.svg"} categoryName={"Рамен"} />
        <HeaderNavLink imagePath={"/img/rolls.svg"} categoryName={"Роли"} />
        <HeaderNavLink imagePath={"/img/sauce.svg"} categoryName={"Соуси"} />
        <HeaderNavLink imagePath={"/img/drinks.svg"} categoryName={"Напої"} />
      </ul>
    </nav>
  );
};

export default HeaderNav;
