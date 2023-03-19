import "./HeaderNavLink.scss";

interface HeaderNavLinkPropsType {
  imagePath: string;
  categoryName: string;
}

const HeaderNavLink = (props: HeaderNavLinkPropsType): JSX.Element => {
  const { imagePath, categoryName } = props;
  return (
    <li className="header-bot-menu-list-item">
      <a href="#" className="header-bot-menu-list-item__link">
        <img src={imagePath} alt={""} />
        <span>{categoryName}</span>
      </a>
    </li>
  );
};

export default HeaderNavLink;
