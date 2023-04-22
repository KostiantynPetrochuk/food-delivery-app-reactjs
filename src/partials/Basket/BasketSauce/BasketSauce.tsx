import { API_PORT, API_URL } from "../../../env";

import "./BasketSauce.scss";

interface BasketSaucePropsType {
  imagePath: string;
  name: string;
  price: number;
}

const BasketSauce = (props: BasketSaucePropsType) => {
  const { imagePath, name, price } = props;

  const apiUrl = `${API_URL}:${API_PORT}`;

  return (
    <li className="basket-sauces-item">
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
