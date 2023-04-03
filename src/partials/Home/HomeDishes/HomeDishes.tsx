import HomeDishesRow from "../HomeDishesRow";
import { DishT } from "../../../pages/Category/Category";

import "./HomeDishes.scss";

type HomeDishesPropsType = {
  pizza: DishT[];
  ramen: DishT[];
};

const HomeDishes = (props: HomeDishesPropsType): JSX.Element => {
  const { pizza, ramen } = props;

  return (
    <section className="dishes">
      <div className="container">
        <HomeDishesRow dishes={pizza} categoryName={"Піца"} slug={"pizza"} />
        <HomeDishesRow dishes={ramen} categoryName={"Рамен"} slug={"ramen"} />
      </div>
    </section>
  );
};

export default HomeDishes;
