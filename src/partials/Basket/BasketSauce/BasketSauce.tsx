import "./BasketSauce.scss";

type BasketSaucePropsType = {
  imagePath: string;
  name: string;
  price: number;
};

const BasketSauce = (props: BasketSaucePropsType): JSX.Element => {
  const { imagePath, name, price } = props;

  return (
    <li className="basket-sauces-item">
      <div className="basket-sauces-item-img-inner">
        <img className="basket-sauces-item__img" src={imagePath} alt={""} />
      </div>
      <span className="basket-sauces-item__name">{name}</span>
      <span className="basket-sauces-item__price">{price}грн</span>
    </li>
  );
};

export default BasketSauce;
