import { DishT } from "../../../pages/Category/Category";
import { CustomT } from "../../../store/customSlice";
import BasketSauce from "../BasketSauce";

import "./BasketSauces.scss";

const BasketSauces = (props: { sauces: DishT[]; customsList: CustomT[] }) => {
  const { sauces, customsList } = props;

  const basketSauceslist = sauces.map((sauce) => (
    <BasketSauce
      key={sauce._id}
      _id={sauce._id}
      sauce={sauce}
      customsList={customsList}
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
