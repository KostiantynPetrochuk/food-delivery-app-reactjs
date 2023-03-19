import { useEffect, useState } from "react";
import BreadCrumbs from "../../components/BreadCrumbs";
import getDishesByCategoryId from "../../library/getDishesByCategoryId";
import { CategoryList } from "../../partials/Category";

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

  useEffect(() => {
    getDishesByCategoryId("63f3d0cf24e1d071ed3d074f")
      .then((data) => {
        setDishes(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <main className="main">
      <BreadCrumbs />
      <CategoryList dishes={dishes} />
    </main>
  );
};

export default Category;
