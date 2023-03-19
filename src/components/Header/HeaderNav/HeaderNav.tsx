import HeaderNavLink from "../HeaderNavLink";
import { DISH_CATEGORIES } from "../../../constants/dishCategories";

import "./HeaderNav.scss";

const HeaderNav = (): JSX.Element => {
  const navLinks = DISH_CATEGORIES.map((category) => {
    const { _id, logoPath, name } = category;
    return (
      <HeaderNavLink
        key={_id}
        id={_id}
        logoPath={logoPath}
        categoryName={name}
      />
    );
  });

  return (
    <nav className="header-bot-menu">
      <ul className="header-bot-menu-list">{navLinks}</ul>
    </nav>
  );
};

export default HeaderNav;
