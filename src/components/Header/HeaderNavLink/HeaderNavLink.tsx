import { Link } from "react-router-dom";

import "./HeaderNavLink.scss";

type HeaderNavLinkPropsType = {
  logoPath: string;
  categoryName: string;
  slug: string;
};

const HeaderNavLink = (props: HeaderNavLinkPropsType): JSX.Element => {
  const { logoPath, categoryName, slug } = props;

  return (
    <li className="header-bot-menu-list-item">
      <Link
        to={`/category/${slug}`}
        className="header-bot-menu-list-item__link"
      >
        <img src={logoPath} alt={""} />
        <span>{categoryName}</span>
      </Link>
    </li>
  );
};

export default HeaderNavLink;
