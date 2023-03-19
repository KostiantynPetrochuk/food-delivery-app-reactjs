import { HomeNoveltyItem } from "..";
import "./HomeNovelty.scss";

const HomeNovelty = (): JSX.Element => {
  const apiUrl = `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}`;
  // const imageSrc = `${apiUrl}${imagePath}`;
  return (
    <section className="novelty">
      <div className="container">
        <div className="novelty-inner">
          <h3 className="novelty-title">Новинки</h3>
          <ul className="novelty-items">
            <HomeNoveltyItem
              imagePath={`${apiUrl}/static/dishes/pizza/caesar.webp`}
              name="Цезар"
              price={240}
            />
            <HomeNoveltyItem
              imagePath={`${apiUrl}/static/dishes/ramen/pho_bo_with_beef.webp`}
              name="Фо бо зі свининою"
              price={240}
            />
            <HomeNoveltyItem
              imagePath={`${apiUrl}/static/dishes/rolls/red_dragon.webp`}
              name="Червоний дракон"
              price={240}
            />
            <HomeNoveltyItem
              imagePath={`${apiUrl}/static/dishes/pasta/pasta_carbonara.webp`}
              name="Карбонара"
              price={240}
            />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HomeNovelty;
