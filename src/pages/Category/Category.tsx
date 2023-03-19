import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import BreadCrumbs from "../../components/BreadCrumbs";
import Spinner from "../../components/Spinner";
import { CategoryList } from "../../partials/Category";

import getDishesByCategoryId from "../../api/getDishesByCategoryId";

export type Dish = {
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
};

const Category = (): JSX.Element => {
  const [dishes, setDishes] = useState<Dish[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { categoryId } = useParams();

  useEffect(() => {
    getDishesByCategoryId(categoryId)
      .then((data) => {
        setDishes(data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, [categoryId]);

  return (
    <main className="main">
      <BreadCrumbs />
      {loading ? <Spinner /> : <CategoryList dishes={dishes} />}
    </main>
  );
};

export default Category;
