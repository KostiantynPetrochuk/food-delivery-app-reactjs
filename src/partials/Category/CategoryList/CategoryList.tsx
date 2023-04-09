import DishCard from "../../../components/DishCard";
import { DishT } from "../../../pages/Category/Category";

import "./CategoryList.scss";

const CategoryList = (props: { dishes: DishT[] }): JSX.Element => {
  const { dishes } = props;
  const categoryName: string = dishes[0]?.dishCategory.name;

  const content: JSX.Element[] = dishes.map((dish: DishT) => (
    <DishCard key={dish._id} dish={dish} />
  ));

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
