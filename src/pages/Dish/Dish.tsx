import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import BreadCrumbs from "../../components/BreadCrumbs";
import Spinner from "../../components/Spinner";
import { DishDetailsCard } from "../../partials/Dish";
import { DishT } from "../Category/Category";

import getDishBySlug from "../../api/getDishBySlug";
import { DISH_CATEGORIES } from "../../constants/dishCategories";

const Dish = (): JSX.Element => {
  const [dish, setDish] = useState<DishT | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [categoryName, setCategoryName] = useState<string>("");
  const [categorySlug, setCategorySlug] = useState<string>("");
  const { slug } = useParams();

  useEffect(() => {
    getDishBySlug(slug)
      .then((data) => {
        setDish(data);
        setLoading(false);

        if (data) {
          const category = DISH_CATEGORIES.find((category) => {
            if (String(data.dishCategory) === category._id) {
              return true;
            }
            return false;
          });
          setCategoryName(String(category?.name));
          setCategorySlug(String(category?.slug));
        }
      })
      .catch((error) => console.error(error));
  }, [slug]);

  return (
    <main className="main">
      <BreadCrumbs
        pathes={[
          { path: "/", name: "Головна" },
          { path: `/category/${categorySlug}`, name: categoryName },
          { path: "/dish", name: String(dish?.name) },
        ]}
      />
      {loading ? <Spinner /> : <DishDetailsCard dish={dish} />}
    </main>
  );
};

export default Dish;
