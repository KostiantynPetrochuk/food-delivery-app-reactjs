import { useEffect, useState } from "react";

import BreadCrumbs from "../../components/BreadCrumbs";
import OrderingButtons from "../../components/OrderingButtons";
import OrderingSteps from "../../components/OrderingSteps";
import Spinner from "../../components/Spinner";
import {
  BasketCustoms,
  BasketOrderAmount,
  BasketSauces,
} from "../../partials/Basket";

import { DishT } from "../Category/Category";

import { useAppSelector } from "../../hooks";
import getDishesByCategorySlug from "../../api/getDishesByCategorySlug";

const Basket = () => {
  const [sauces, setSauces] = useState<DishT[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const customsList = useAppSelector((state) => state.customs.list);

  useEffect(() => {
    getDishesByCategorySlug("sauces")
      .then((data) => {
        setSauces(data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <main className="main">
      <BreadCrumbs />
      <section className="basket">
        <div className="container">
          <div className="basket-inner">
            <OrderingSteps />
            <BasketCustoms customsList={customsList} />
            {loading ? <Spinner /> : <BasketSauces sauces={sauces} />}
            <BasketOrderAmount amount={1500} />
            <OrderingButtons />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Basket;
