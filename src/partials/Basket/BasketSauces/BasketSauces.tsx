import BasketSauce from "../BasketSauce/BasketSauce";

import "./BasketSauces.scss";

const BasketSauces = (): JSX.Element => {
  return (
    <div className="basket-sauces">
      <h3 className="basket-sauces__title">Соуси до бортиків і закусок</h3>
      <ul className="basket-sauces-list">
        <BasketSauce
          imagePath={"/img/sauces/buffalo.png"}
          name={"Соус Бафало"}
          price={14}
        />
        <BasketSauce
          imagePath={"/img/sauces/buffalo.png"}
          name={"Соус Бафало"}
          price={14}
        />
        <BasketSauce
          imagePath={"/img/sauces/buffalo.png"}
          name={"Соус Бафало"}
          price={14}
        />
        <BasketSauce
          imagePath={"/img/sauces/buffalo.png"}
          name={"Соус Бафало"}
          price={14}
        />
        <BasketSauce
          imagePath={"/img/sauces/buffalo.png"}
          name={"Соус Бафало"}
          price={14}
        />
        <BasketSauce
          imagePath={"/img/sauces/buffalo.png"}
          name={"Соус Бафало"}
          price={14}
        />
        <BasketSauce
          imagePath={"/img/sauces/buffalo.png"}
          name={"Соус Бафало"}
          price={14}
        />
      </ul>
    </div>
  );
};

export default BasketSauces;
