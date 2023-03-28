import { Link } from "react-router-dom";

import "./HeaderMobLink.scss";

type HeaderMobLinkPropsType = {
  categoryName: string;
  slug: string;
  handleMenuButtonClick: () => void;
};

const HeaderMobLink = (props: HeaderMobLinkPropsType): JSX.Element => {
  const { categoryName, slug, handleMenuButtonClick } = props;

  return (
    <li className="header-mob-menu-list-item">
      <Link
        to={`/category/${slug}`}
        className="header-mob-menu-list-item__link"
        onClick={handleMenuButtonClick}
      >
        <span>{categoryName}</span>
      </Link>
    </li>
  );
};

export default HeaderMobLink;
