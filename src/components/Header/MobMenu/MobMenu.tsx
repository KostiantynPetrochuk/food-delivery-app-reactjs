import "./MobMenu.scss";

const MobMenu = (): JSX.Element => {
  return (
    <div className="header-mob-menu" id="mob_menu">
      <img
        className="header-mob-menu__logo"
        src={"/img/logo_mob.jpg"}
        alt={""}
      />
      <ul className="header-mob-menu-list">
        <li className="header-mob-menu-list-item">
          <a href="#" className="header-mob-menu-list-item__link">
            <span>Паста</span>
          </a>
        </li>
        <li className="header-mob-menu-list-item">
          <a href="#" className="header-mob-menu-list-item__link">
            <span>Піца</span>
          </a>
        </li>
        <li className="header-mob-menu-list-item">
          <a href="#" className="header-mob-menu-list-item__link">
            <span>Рамен</span>
          </a>
        </li>
        <li className="header-mob-menu-list-item">
          <a href="#" className="header-mob-menu-list-item__link">
            <span>Роли</span>
          </a>
        </li>
        <li className="header-mob-menu-list-item">
          <a href="#" className="header-mob-menu-list-item__link">
            <span>Соуси</span>
          </a>
        </li>
        <li className="header-mob-menu-list-item">
          <a href="#" className="header-mob-menu-list-item__link">
            <span>Напої</span>
          </a>
        </li>
      </ul>
      <div className="mob-basket-btn-inner">
        <span className="mob-basket__number">044 26 56 987</span>
        <button className="mob-basket__btn">
          <span className="mob-basket__info">Кошик</span>
          <span className="mob-basket__count">3</span>
        </button>
      </div>
    </div>
  );
};

export default MobMenu;
