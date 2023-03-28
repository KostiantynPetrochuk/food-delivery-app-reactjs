import { useState } from "react";

import BasketButton from "./BasketButton";
import HeaderInfo from "./HeaderInfo";
import HeaderMob from "./HeaderMob";
import HeaderNav from "./HeaderNav";
import MobMenu from "./MobMenu";
import OrderCallButton from "./OrderCallButton";
import OrderPhone from "./OrderPhone";

import "./Header.scss";

const Header = (): JSX.Element => {
  const [mobMenuState, setMobMenuState] = useState<boolean>(false);

  return (
    <header className="header">
      <MobMenu mobMenuState={mobMenuState} setMobMenuState={setMobMenuState} />
      <div className="container">
        <div className="header-top">
          <div className="header-top-left">
            <div className="header-logo-inner">
              <img
                className="header-logo__img"
                src={"/img/logo.jpg"}
                alt={""}
              />
            </div>
            <HeaderInfo city={"Хмельницький"} deliveryTime={"30"} />
          </div>
          <div className="header-top-right">
            <OrderCallButton addClassName={"header-top-right__button"} />
            <OrderPhone phone={"044 65 98 658"} />
          </div>
        </div>
        <div className="header-bot-inner">
          <div className="header-bot">
            <HeaderNav />
            <BasketButton />
          </div>
        </div>
        <HeaderMob
          mobMenuState={mobMenuState}
          setMobMenuState={setMobMenuState}
        />
      </div>
    </header>
  );
};

export default Header;
