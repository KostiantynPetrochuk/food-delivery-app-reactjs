import { DishT } from "../../../pages/Category/Category";
import BasketSauce from "../BasketSauce/BasketSauce";

import "./BasketSauces.scss";

const BasketSauces = (props: { sauces: DishT[] }) => {
  const { sauces } = props;

  const basketSauceslist = sauces.map((sauce) => (
    <BasketSauce
      key={sauce._id}
      imagePath={sauce.imagePath}
      name={sauce.name}
      price={sauce.price}
    />
  ));

  return (
    <div className="basket-sauces">
      <h3 className="basket-sauces__title">Соуси до бортиків і закусок</h3>
      <ul className="basket-sauces-list">{basketSauceslist}</ul>
    </div>
  );
};

export default BasketSauces;
