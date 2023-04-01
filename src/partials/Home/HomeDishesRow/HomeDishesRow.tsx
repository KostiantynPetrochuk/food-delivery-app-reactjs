import { HomeMoreDishesButton } from "..";
import DishCard from "../../../components/DishCard";
import { DishT } from "../../../pages/Category/Category";
import createIngredientsString from "../../../helpers/createIngredientsString";

import "./HomeDishesRow.scss";

const HomeDishesRow = (props: {
  dishes: DishT[];
  categoryName: string;
}): JSX.Element => {
  const { dishes, categoryName } = props;

  const dishesList = dishes.map(
    ({ _id, imagePath, name, price, slug, ingredients }) => {
      const ingredientsString = createIngredientsString(ingredients);

      return (
        <DishCard
          key={_id}
          id={_id}
          imagePath={imagePath}
          dishName={name}
          ingredients={ingredientsString}
          price={price}
          slug={slug}
        />
      );
    }
  );

  return (
    <div className="dishes-row">
      <h3 className="dishes-list__title">{categoryName}</h3>
      <ul className="dishes-list">{dishesList}</ul>
      <HomeMoreDishesButton />
    </div>
  );
};

export default HomeDishesRow;
