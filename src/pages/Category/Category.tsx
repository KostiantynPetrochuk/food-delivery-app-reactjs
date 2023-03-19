import BreadCrumbs from "../../components/BreadCrumbs";
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
  const dishes = [
    {
      _id: "63f3d93224e1d071ed3d07a2",
      name: "Прошуто Фунгі",
      imagePath: "/static/dishes/pizza/proshuto_fungi.webp",
      weight: 430,
      price: 165,
      isNovelty: false,
      dishCategory: {
        _id: "63f3d0cf24e1d071ed3d074f",
        name: "Піца",
      },
      __v: 0,
      ingredients: ["шинка", "соус томатний", "гриби", "сир моцарела"],
    },
  ];
  return (
    <main className="main">
      <BreadCrumbs />
      <CategoryList dishes={dishes} />
    </main>
  );
};

export default Category;
