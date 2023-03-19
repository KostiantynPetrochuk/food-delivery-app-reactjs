import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import BreadCrumbs from "../../components/BreadCrumbs";
import Spinner from "../../components/Spinner";
import { DishDetailsCard } from "../../partials/Dish";
import { DishT } from "../Category/Category";

import getDishById from "../../api/getDishById";

const Dish = (): JSX.Element => {
  const [dish, setDish] = useState<DishT | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { dishId } = useParams();

  useEffect(() => {
    getDishById(dishId)
      .then((data) => {
        setDish(data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, [dishId]);

  return (
    <main className="main">
      <BreadCrumbs />
      {loading ? <Spinner /> : <DishDetailsCard dish={dish} />}
    </main>
  );
};

export default Dish;
