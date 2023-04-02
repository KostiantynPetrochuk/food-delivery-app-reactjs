import { Link } from "react-router-dom";

import { API_PORT, API_URL } from "../../env";

import "./DishCard.scss";

type DishCardPropsType = {
  id: string;
  imagePath: string;
  dishName: string;
  ingredients: string;
  price: number;
  slug: string;
};

const DishCard = (props: DishCardPropsType): JSX.Element => {
  const { imagePath, dishName, ingredients, price, slug } = props;
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
          {dishName}
        </Link>
        <span className="dishes-list-item-ingredients">{ingredients}</span>
        <div className="dishes-list-item-bot">
          <span className="dishes-list-item__price">{price}грн</span>
          <button className="dishes-item__button">В кошик</button>
        </div>
      </div>
    </li>
  );
};

export default DishCard;
