import HomeDishesRow from "../HomeDishesRow";
import "./HomeDishes.scss";

const HomeDishes = (): JSX.Element => {
  return (
    <section className="dishes">
      <div className="container">
        <HomeDishesRow />
        <HomeDishesRow />
      </div>
    </section>
  );
};

export default HomeDishes;
