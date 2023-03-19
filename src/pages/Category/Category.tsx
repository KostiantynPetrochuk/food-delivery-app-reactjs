import { useEffect, useState } from "react";
import BreadCrumbs from "../../components/BreadCrumbs";
import Spinner from "../../components/Spinner";
import { CategoryList } from "../../partials/Category";
import getDishesByCategoryId from "../../library/getDishesByCategoryId";

export interface Dish {
  _id: string;
  name: string;
  imagePath: string;
  weight: number;
  price: number;
  isNovelty: boolean;
  dishCategory: {
    _id: string;
    name: string;
  };
  __v: number;
  ingredients: string[];
}

const Category = (): JSX.Element => {
  const [dishes, setDishes] = useState<Dish[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getDishesByCategoryId("63f3d0cf24e1d071ed3d074f")
      .then((data) => {
        setDishes(data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <main className="main">
      <BreadCrumbs />
      {loading ? <Spinner /> : <CategoryList dishes={dishes} />}
    </main>
  );
};

export default Category;
