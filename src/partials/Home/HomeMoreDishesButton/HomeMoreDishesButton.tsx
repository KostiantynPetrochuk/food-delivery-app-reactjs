import { Link } from "react-router-dom";

import "./HomeMoreDishesButton.scss";

const HomeMoreDishesButton = (props: { slug: string }): JSX.Element => {
  const { slug } = props;

  return (
    <div className="dishes-list-button-inner">
      <Link to={`/category/${slug}`} className="dishes-list__button">
        Переглянути всі
      </Link>
    </div>
  );
};

export default HomeMoreDishesButton;
