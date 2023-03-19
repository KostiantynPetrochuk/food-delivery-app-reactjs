import DishCard from "../../../components/DishCard";
import { Dish } from "../../../pages/Category/Category";
import createIngredientsString from "../../../helpers/createIngredientsString";

import "./CategoryList.scss";

const CategoryList = (props: { dishes: Dish[] }): JSX.Element => {
  const { dishes } = props;
  const categoryName: string = dishes[0]?.dishCategory.name;

  const content: JSX.Element[] = dishes.map((dish: Dish) => {
    const { _id, imagePath, name, ingredients, price } = dish;
    const ingredientsString: string = createIngredientsString(ingredients);

    return (
      <DishCard
        key={_id}
        imagePath={imagePath}
        dishName={name}
        ingredients={ingredientsString}
        price={price}
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
