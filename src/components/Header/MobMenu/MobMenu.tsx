import {
  DISH_CATEGORIES,
  DishCategory,
} from "../../../constants/dishCategories";
import HeaderMobLink from "../HeaderMobLink";

import "./MobMenu.scss";

type MobMenuPropsType = {
  mobMenuState: boolean;
  setMobMenuState: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobMenu = (props: MobMenuPropsType): JSX.Element => {
  const { mobMenuState, setMobMenuState } = props;

  const handleMenuButtonClick = (): void => {
    mobMenuState ? setMobMenuState(false) : setMobMenuState(true);
  };

  const mobLinks: JSX.Element[] = DISH_CATEGORIES.map(
    (category: DishCategory) => {
      const { _id, name, slug } = category;

      return (
        <HeaderMobLink
          key={_id}
          categoryName={name}
          slug={slug}
          handleMenuButtonClick={handleMenuButtonClick}
        />
      );
    }
  );

  return (
    <div
      className={`header-mob-menu${mobMenuState ? " visible" : ""}`}
      id="mob_menu"
    >
      <img
        className="header-mob-menu__logo"
        src={"/img/logo_mob.jpg"}
        alt={""}
      />
      <ul className="header-mob-menu-list">{mobLinks}</ul>
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
