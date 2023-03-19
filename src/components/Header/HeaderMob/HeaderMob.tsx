import "./HeaderMob.scss";

const HeaderMob = (): JSX.Element => {
  return (
    <div className="header-mob">
      <div className="header-logo-inner">
        <img className="header-logo__img" src={"/img/logo.jpg"} alt={""} />
      </div>
      <div className="mob-menu__btn" id="mob_menu_btn">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default HeaderMob;
