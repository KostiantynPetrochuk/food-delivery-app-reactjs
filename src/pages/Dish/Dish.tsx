import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import BreadCrumbs from "../../components/BreadCrumbs";
import Spinner from "../../components/Spinner";
import { DishDetailsCard } from "../../partials/Dish";
import { DishT } from "../Category/Category";

import getDishBySlug from "../../api/getDishBySlug";

const Dish = (): JSX.Element => {
  const [dish, setDish] = useState<DishT | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { slug } = useParams();

  useEffect(() => {
    getDishBySlug(slug)
      .then((data) => {
        setDish(data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, [slug]);

  return (
    <main className="main">
      <BreadCrumbs />
      {loading ? <Spinner /> : <DishDetailsCard dish={dish} />}
    </main>
  );
};

export default Dish;
