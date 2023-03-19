import DishCard from "../../../components/DishCard";
import { Dish } from "../../../pages/Category/Category";

import "./CategoryList.scss";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
const serverPort = process.env.NEXT_PUBLIC_SERVER_PORT;

const CategoryList = (props: { dishes: Dish[] }): JSX.Element => {
  const { dishes } = props;
  const categoryName = dishes[0].dishCategory.name;

  const content = dishes.map((dish) => {
    const imageUrl = `${serverUrl}:${serverPort}${dish.imagePath}`;

    return (
      <DishCard
        key={dish._id}
        imagePath={imageUrl}
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
          {/* <ul className="category-list">
            <DishCard
              imagePath="/img/ramen/nigoshi_ramen_with_ teriyaki_chicken.png"
              dishName="Рамен Нігоші з куркою теріякі"
              ingredients="Бульйон з соусом нігоші, локшина, курка теріякі, водорості
                    комбу, азіатський гриб, морква, зелена цибуля, мариноване
                    яйце, кунжут"
              price="250"
            />
            <DishCard
              imagePath="/img/ramen/nigoshi_ramen_with_ teriyaki_chicken.png"
              dishName="Рамен Нігоші з куркою теріякі"
              ingredients="Бульйон з соусом нігоші, локшина, курка теріякі, водорості
                    комбу, азіатський гриб, морква, зелена цибуля, мариноване
                    яйце, кунжут"
              price="250"
            />
            <DishCard
              imagePath="/img/ramen/nigoshi_ramen_with_ teriyaki_chicken.png"
              dishName="Рамен Нігоші з куркою теріякі"
              ingredients="Бульйон з соусом нігоші, локшина, курка теріякі, водорості
                    комбу, азіатський гриб, морква, зелена цибуля, мариноване
                    яйце, кунжут"
              price="250"
            />
            <DishCard
              imagePath="/img/ramen/nigoshi_ramen_with_ teriyaki_chicken.png"
              dishName="Рамен Нігоші з куркою теріякі"
              ingredients="Бульйон з соусом нігоші, локшина, курка теріякі, водорості
                    комбу, азіатський гриб, морква, зелена цибуля, мариноване
                    яйце, кунжут"
              price="250"
            />
            <DishCard
              imagePath="/img/ramen/nigoshi_ramen_with_ teriyaki_chicken.png"
              dishName="Рамен Нігоші з куркою теріякі"
              ingredients="Бульйон з соусом нігоші, локшина, курка теріякі, водорості
                    комбу, азіатський гриб, морква, зелена цибуля, мариноване
                    яйце, кунжут"
              price="250"
            />
            <DishCard
              imagePath="/img/ramen/nigoshi_ramen_with_ teriyaki_chicken.png"
              dishName="Рамен Нігоші з куркою теріякі"
              ingredients="Бульйон з соусом нігоші, локшина, курка теріякі, водорості
                    комбу, азіатський гриб, морква, зелена цибуля, мариноване
                    яйце, кунжут"
              price="250"
            />
            <DishCard
              imagePath="/img/ramen/nigoshi_ramen_with_ teriyaki_chicken.png"
              dishName="Рамен Нігоші з куркою теріякі"
              ingredients="Бульйон з соусом нігоші, локшина, курка теріякі, водорості
                    комбу, азіатський гриб, морква, зелена цибуля, мариноване
                    яйце, кунжут"
              price="250"
            />
            <DishCard
              imagePath="/img/ramen/nigoshi_ramen_with_ teriyaki_chicken.png"
              dishName="Рамен Нігоші з куркою теріякі"
              ingredients="Бульйон з соусом нігоші, локшина, курка теріякі, водорості
                    комбу, азіатський гриб, морква, зелена цибуля, мариноване
                    яйце, кунжут"
              price="250"
            />
          </ul> */}
        </div>
      </div>
    </section>
  );
};

export default CategoryList;
