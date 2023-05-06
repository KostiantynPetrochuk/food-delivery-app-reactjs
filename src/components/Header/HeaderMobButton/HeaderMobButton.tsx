import { Link } from "react-router-dom";
import { useAppSelector } from "../../../hooks";
import "./HeaderMobButton.scss";

const HeaderMobButton = (props: {
  handleMenuButtonClick: () => void;
}): JSX.Element => {
  const { handleMenuButtonClick } = props;
  const customsList = useAppSelector((state) => state.customs.list);

  const countOfDishes = customsList.reduce((a, b) => a + b.count, 0);

  return (
    <div className="mob-basket-btn-inner" onClick={handleMenuButtonClick}>
      <span className="mob-basket__number">044 26 56 987</span>
      <Link to={"/basket"} className="mob-basket__btn">
        <span className="mob-basket__info">Кошик</span>
        <span className="mob-basket__count">{countOfDishes}</span>
      </Link>
    </div>
  );
};

export default HeaderMobButton;
