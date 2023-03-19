import "./BasketCustom.scss";

interface BasketCustomPropsType {
  imagePath: string;
  name: string;
  ingredients: string;
  price: number;
  count: number;
}

const BasketCustom = (props: BasketCustomPropsType): JSX.Element => {
  const { imagePath, name, ingredients, price, count } = props;

  return (
    <li className="basket-custom">
      <div className="basket-custom-left">
        <div className="basket-custom-img-inner">
          <img className="basket-custom__img" src={imagePath} alt={""} />
        </div>
        <div className="basket-custom-details">
          <span className="basket-custom-details__title">{name}</span>
          <span className="basket-custom-details__ingredients">
            {ingredients}
          </span>
        </div>
      </div>
      <div className="basket-custom-right">
        <div className="basket-custom-price">{price}грн</div>
        <div className="basket-custom__counter">
          <div className="basket-custom__remove_count">-</div>
          <div className="basket-custom__count">{count}</div>
          <div className="basket-custom__add">+</div>
        </div>
        <div className="basket-custom__remove">
          <span></span>
          <span></span>
        </div>
      </div>
    </li>
  );
};

export default BasketCustom;
