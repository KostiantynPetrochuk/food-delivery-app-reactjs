import { HomeMoreDishesButton } from "..";
import DishCard from "../../../components/DishCard";
import "./HomeDishesRow.scss";

const HomeDishesRow = (): JSX.Element => {
  return (
    <div className="dishes-row">
      <h3 className="dishes-list__title">Рамен</h3>
      <ul className="dishes-list">
        <DishCard
          id="8fc5uq30ftc8uyqc8"
          imagePath={`/static/dishes/ramen/nigoshi_ramen_with_teriyaki_chicken.webp`}
          dishName="Рамен Нігоші з куркою теріякі"
          ingredients="Бульйон з соусом нігоші, локшина, курка теріякі, водорості
                    комбу, азіатський гриб, морква, зелена цибуля, мариноване
                    яйце, кунжут"
          price={250}
        />
        <DishCard
          id="8fc5uq30ftc8uyqc8"
          imagePath={`/static/dishes/ramen/ramen_with_seafood.webp`}
          dishName=" Рамен з морепродуктами"
          ingredients="Бульйон з соусом нігоші, локшина, курка теріякі, водорості
                    комбу, азіатський гриб, морква, зелена цибуля, мариноване
                    яйце, кунжут"
          price={250}
        />
        <DishCard
          id="8fc5uq30ftc8uyqc8"
          imagePath={`/static/dishes/ramen/ramen_with_smoked_chicken.webp`}
          dishName="Рамен з копченою куркою"
          ingredients="Бульйон з соусом нігоші, локшина, курка теріякі, водорості
                    комбу, азіатський гриб, морква, зелена цибуля, мариноване
                    яйце, кунжут"
          price={250}
        />
        <DishCard
          id="8fc5uq30ftc8uyqc8"
          imagePath={`/static/dishes/ramen/ramen_curry_with_shrimp.webp`}
          dishName="Рамен карі з креветками"
          ingredients="Бульйон з соусом нігоші, локшина, курка теріякі, водорості
                    комбу, азіатський гриб, морква, зелена цибуля, мариноване
                    яйце, кунжут"
          price={250}
        />
      </ul>
      <HomeMoreDishesButton />
    </div>
  );
};

export default HomeDishesRow;
