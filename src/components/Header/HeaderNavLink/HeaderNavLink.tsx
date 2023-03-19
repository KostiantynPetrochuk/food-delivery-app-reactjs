import { Link } from "react-router-dom";
import { API_PORT, API_URL } from "../../../env";

import "./HeaderNavLink.scss";

type HeaderNavLinkPropsType = {
  id: string;
  logoPath: string;
  categoryName: string;
};

const HeaderNavLink = (props: HeaderNavLinkPropsType): JSX.Element => {
  const { id, logoPath, categoryName } = props;
  const apiUrl: string = `${API_URL}:${API_PORT}`;

  return (
    <li className="header-bot-menu-list-item">
      <Link to={`/category/${id}`} className="header-bot-menu-list-item__link">
        <img src={`${apiUrl}${logoPath}`} alt={""} />
        <span>{categoryName}</span>
      </Link>
    </li>
  );
};

export default HeaderNavLink;
