import HeaderNavLink from "../HeaderNavLink";
import "./HeaderNav.scss";

const HeaderNav = (): JSX.Element => {
  const apiUrl = `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}`;

  return (
    <nav className="header-bot-menu">
      <ul className="header-bot-menu-list">
        <HeaderNavLink
          imagePath={`${apiUrl}/static/categories_logo/pasta.svg`}
          categoryName={"Паста"}
        />
        <HeaderNavLink
          imagePath={`${apiUrl}/static/categories_logo/pizza.svg`}
          categoryName={"Піца"}
        />
        <HeaderNavLink
          imagePath={`${apiUrl}/static/categories_logo/ramen.svg`}
          categoryName={"Рамен"}
        />
        <HeaderNavLink
          imagePath={`${apiUrl}/static/categories_logo/rolls.svg`}
          categoryName={"Роли"}
        />
        <HeaderNavLink
          imagePath={`${apiUrl}/static/categories_logo/sauce.svg`}
          categoryName={"Соуси"}
        />
        <HeaderNavLink
          imagePath={`${apiUrl}/static/categories_logo/drinks.svg`}
          categoryName={"Напої"}
        />
      </ul>
    </nav>
  );
};

export default HeaderNav;
