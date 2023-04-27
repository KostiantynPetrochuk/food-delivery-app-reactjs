import { API_PORT, API_URL } from "../../../env";
import { Custom, addCustom, removeCustom } from "../../../store/customSlice";
import { useAppDispatch } from "../../../hooks";
import { DishT } from "../../../pages/Category/Category";

import "./BasketSauce.scss";

type BasketSaucePropsType = {
  _id: string;
  sauce: DishT;
  customsList: Custom[];
};

const BasketSauce = (props: BasketSaucePropsType) => {
  const { _id, sauce, customsList } = props;
  const { imagePath, name, price } = sauce;
  const dispatch = useAppDispatch();

  const ifSauceInTheBasket = customsList.find((custom) => {
    return custom._id === _id;
  });

  const handleClick = () => {
    if (ifSauceInTheBasket) {
      dispatch(removeCustom({ _id }));
      return;
    }
    const currentCustom = {
      _id,
      dish: sauce,
      count: 1,
    };
    dispatch(addCustom(currentCustom));
  };

  const apiUrl = `${API_URL}:${API_PORT}`;

  return (
    <li
      onClick={handleClick}
      className={`basket-sauces-item${ifSauceInTheBasket ? " _inBasket" : ""}`}
    >
      <div className="basket-sauces-item-img-inner">
        <img
          className="basket-sauces-item__img"
          src={`${apiUrl}${imagePath}`}
          alt={""}
          width={500}
          height={500}
        />
      </div>
      <span className="basket-sauces-item__name">{name}</span>
      <span className="basket-sauces-item__price">{price}грн</span>
    </li>
  );
};

export default BasketSauce;
