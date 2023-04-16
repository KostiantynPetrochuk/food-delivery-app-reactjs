import { Link } from "react-router-dom";

import { API_PORT, API_URL } from "../../env";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { addCustom } from "../../store/customSlice";
import { DishT } from "../../pages/Category/Category";
import createIngredientsString from "../../helpers/createIngredientsString";

import "./DishCard.scss";


const DishCard = (props: { dish: DishT }): JSX.Element => {
  const { dish } = props;
  const { _id, imagePath, name, price, slug } = dish;
  const dispatch = useAppDispatch();
  const customsList = useAppSelector((state) => state.customs.list);
  const isDishInBasket = customsList.find((custom) => custom._id === _id);

  const ingredientsString = dish.ingredients.length
    ? createIngredientsString(dish.ingredients)
    : "";

  const buttonClassName = `dishes-item__button${
    isDishInBasket ? " _inBasket" : ""
  }`;

  const handleAddCustom = () => {
    if (_id !== null) {
      const currentCustom = {
        _id,
        dish: props.dish,
        count: 1,
      };
      dispatch(addCustom(currentCustom));
    }
  };

  const apiUrl = `${API_URL}:${API_PORT}`;

  return (
    <li className="dishes-list-item">
      <img
        className="dishes-list-item__img"
        src={`${apiUrl}${imagePath}`}
        alt={""}
      />
      <div className="dishes-list-item-body">
        <Link to={`/dish/${slug}`} className="dishes-list-item-body__title">
          {name}
        </Link>
        <span className="dishes-list-item-ingredients">
          {ingredientsString}
        </span>
        <div className="dishes-list-item-bot">
          <span className="dishes-list-item__price">{price}грн</span>
          <button className={buttonClassName} onClick={handleAddCustom}>
            {isDishInBasket ? `В кошику` : "В кошик"}
          </button>
        </div>
      </div>
    </li>
  );
};

export default DishCard;
