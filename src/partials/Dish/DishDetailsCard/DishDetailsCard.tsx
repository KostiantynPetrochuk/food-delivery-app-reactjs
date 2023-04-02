import createIngredientsString from "../../../helpers/createIngredientsString";
import { DishT } from "../../../pages/Category/Category";
import { API_PORT, API_URL } from "../../../env";

import "./DishDetailsCard.scss";

const DishDetailsCard = (props: { dish: DishT | null }): JSX.Element => {
  const { dish } = props;

  const apiUrl = `${API_URL}:${API_PORT}`;

  const ingredientsString: string = dish?.ingredients.length
    ? createIngredientsString(dish?.ingredients)
    : "";

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
                  <div className="dish-card-total__counter">
                    <div className="dish-card-total__remove">-</div>
                    <div className="dish-card-total__count">3</div>
                    <div className="dish-card-total__add">+</div>
                  </div>
                </div>
                <div className="dish-card-total-button-inner">
                  <button className="dish-card-total__button">
                    Додати в кошик
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
