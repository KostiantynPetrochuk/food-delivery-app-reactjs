import { Link } from "react-router-dom";

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
  const apiUrl = `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}`;

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
