import { Link } from "react-router-dom";
import { API_URL } from "../../../env";

import "./HeaderNavLink.scss";

type HeaderNavLinkPropsType = {
  logoPath: string;
  categoryName: string;
  slug: string;
};

const HeaderNavLink = (props: HeaderNavLinkPropsType): JSX.Element => {
  const { logoPath, categoryName, slug } = props;
  const apiUrl: string = `${API_URL}`;

  return (
    <li className="header-bot-menu-list-item">
      <Link
        to={`/category/${slug}`}
        className="header-bot-menu-list-item__link"
      >
        <img src={`${apiUrl}${logoPath}`} alt={""} />
        <span>{categoryName}</span>
      </Link>
    </li>
  );
};

export default HeaderNavLink;
