import { Link } from "react-router-dom";

import "./BasketMessage.scss";

const BasketMessage = () => {
  return (
    <div className="basketMessge-inner">
      <h3 className="basketMessge__title">Порожньо</h3>
      <img className="basketMessge__logo" src="/img/logo.jpg" alt="" />
      <Link to={"/"} className="basketMessge__link">
        До покупок
      </Link>
    </div>
  );
};

export default BasketMessage;
