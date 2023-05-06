import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import BreadCrumbs from "../../components/BreadCrumbs";
import Spinner from "../../components/Spinner";
import { CategoryList } from "../../partials/Category";

import getDishesByCategorySlug from "../../api/getDishesByCategorySlug";

export type DishT = {
  _id: string;
  name: string;
  imagePath: string;
  weight: number;
  price: number;
  isNovelty: boolean;
  slug: string;
  dishCategory: {
    _id: string;
    name: string;
  };
  __v: number;
  ingredients: string[];
};

const Category = (): JSX.Element => {
  const [dishes, setDishes] = useState<DishT[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { slug } = useParams();

  useEffect(() => {
    getDishesByCategorySlug(slug)
      .then((data) => {
        setDishes(data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, [slug]);

  return (
    <main className="main">
      <BreadCrumbs
        pathes={[
          { path: "/", name: "Головна" },
          { path: "/category/", name: dishes[0]?.dishCategory.name },
        ]}
      />
      {loading ? <Spinner /> : <CategoryList dishes={dishes} />}
    </main>
  );
};

export default Category;
