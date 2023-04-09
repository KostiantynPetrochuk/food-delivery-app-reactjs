import createIngredientsString from "../../../helpers/createIngredientsString";
import { DishT } from "../../../pages/Category/Category";
import { API_PORT, API_URL } from "../../../env";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { addCustom } from "../../../store/customSlice";

import "./DishDetailsCard.scss";
import { useState } from "react";

const DishDetailsCard = (props: { dish: DishT | null }): JSX.Element => {
  const { dish } = props;
  const dispatch = useAppDispatch();
  const customsList = useAppSelector((state) => state.customs.list);
  const isDishInBasket = customsList.find((custom) => custom._id === dish?._id);
  const [dishCount, setDishCount] = useState(1);

  const handleAddCustom = () => {
    if (dish !== null) {
      const currentCustom = {
        _id: dish._id,
        dish: dish,
        count: dishCount,
      };
      dispatch(addCustom(currentCustom));
    }
  };

  const handleAddDish = () => {
    if (dishCount >= 10) return;
    setDishCount(dishCount + 1);
  };

  const handleRemoveDish = () => {
    if (!dishCount) return;
    setDishCount(dishCount - 1);
  };

  const apiUrl = `${API_URL}:${API_PORT}`;

  const ingredientsString: string = dish?.ingredients.length
    ? createIngredientsString(dish?.ingredients)
    : "";

  const counterClassName = `dish-card-total__counter${
    isDishInBasket ? " _inBasket" : ""
  }`;

  const buttonClassName = `dish-card-total__button${
    isDishInBasket ? " _inBasket" : ""
  }`;

  return (
    <section className="dish-details">
      <div className="container">
        <div className="dish-details-inner">
          <div className="dish-card">
            <div className="dish-card-img-inner">
              <img
                className="dish-card__img"
                src={`${apiUrl}${dish?.imagePath}`}
                alt={""}
              />
            </div>
            <div className="dish-card-details">
              <div className="dish-card-top">
                <span className="dish-card__weight">{dish?.weight}г</span>
                <span className="dish-card__name">{dish?.name}</span>
              </div>
              <div className="dish-card-mid">
                <span className="dish-card__ingredients">
                  {ingredientsString}
                </span>
              </div>
              <div className="dish-card-bot">
                <div className="dish-card-total">
                  <span className="dish-card-total-price">
                    {dish?.price}грн
                  </span>
                  <div className={counterClassName}>
                    <div
                      className="dish-card-total__remove"
                      onClick={handleRemoveDish}
                    >
                      -
                    </div>
                    <div className="dish-card-total__count">{dishCount}</div>
                    <div
                      className="dish-card-total__add"
                      onClick={handleAddDish}
                    >
                      +
                    </div>
                  </div>
                </div>
                <div className="dish-card-total-button-inner">
                  <button className={buttonClassName} onClick={handleAddCustom}>
                    {isDishInBasket
                      ? `В кошику x${isDishInBasket.count}`
                      : "Додати в кошик"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DishDetailsCard;
