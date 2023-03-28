import "./HeaderMob.scss";

type HeaderMobPropsType = {
  mobMenuState: boolean;
  setMobMenuState: React.Dispatch<React.SetStateAction<boolean>>;
};

const HeaderMob = (props: HeaderMobPropsType): JSX.Element => {
  const { mobMenuState, setMobMenuState } = props;

  const handleMenuButtonClick = (): void => {
    mobMenuState ? setMobMenuState(false) : setMobMenuState(true);
  };

  return (
    <div className="header-mob">
      <div className="header-logo-inner">
        <img className="header-logo__img" src={"/img/logo.jpg"} alt={""} />
      </div>
      <div
        className={`mob-menu__btn ${mobMenuState ? " visible" : ""}`}
        id="mob_menu_btn"
        onClick={handleMenuButtonClick}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default HeaderMob;
