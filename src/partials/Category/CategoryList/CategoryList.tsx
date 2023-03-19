import DishCard from "../../../components/DishCard";
import { Dish } from "../../../pages/Category/Category";

import "./CategoryList.scss";

const CategoryList = (props: { dishes: Dish[] }): JSX.Element => {
  const { dishes } = props;
  const categoryName: string = dishes[0]?.dishCategory.name;

  const content: JSX.Element[] = dishes.map((dish) => {
    return (
      <DishCard
        key={dish._id}
        imagePath={dish.imagePath}
        dishName={dish.name}
        ingredients="Бульйон з соусом нігоші, локшина, курка теріякі, водорості
                    комбу, азіатський гриб, морква, зелена цибуля, мариноване
                    яйце, кунжут"
        price={dish.price}
      />
    );
  });

  return (
    <section className="category">
      <div className="container">
        <div className="category-inner">
          <h3 className="category-name">{categoryName}</h3>
          <ul className="category-list">{content}</ul>
        </div>
      </div>
    </section>
  );
};

export default CategoryList;
