import { HomeMoreDishesButton } from "..";
import DishCard from "../../../components/DishCard";
import { DishT } from "../../../pages/Category/Category";

import "./HomeDishesRow.scss";

const HomeDishesRow = (props: {
  dishes: DishT[];
  categoryName: string;
  slug: string;
}): JSX.Element => {
  const { dishes, categoryName, slug } = props;

  const dishesList = dishes.map((dish) => (
    <DishCard key={dish._id} dish={dish} />
  ));

  return (
    <div className="dishes-row">
      <h3 className="dishes-list__title">{categoryName}</h3>
      <ul className="dishes-list">{dishesList}</ul>
      <HomeMoreDishesButton slug={slug} />
    </div>
  );
};

export default HomeDishesRow;
