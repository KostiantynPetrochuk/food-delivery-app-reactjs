import { HomeNoveltyItem } from "..";
import { DishT } from "../../../pages/Category/Category";

import "./HomeNovelty.scss";

type HomeNoveltyPropsType = {
  novelties: DishT[] | undefined;
};

const HomeNovelty = (props: HomeNoveltyPropsType): JSX.Element => {
  const { novelties } = props;

  const noveltiesList = novelties?.map(
    ({ _id, imagePath, name, price, slug }) => (
      <HomeNoveltyItem
        key={_id}
        imagePath={imagePath}
        name={name}
        price={price}
        slug={slug}
      />
    )
  );

  return (
    <section className="novelty">
      <div className="container">
        <div className="novelty-inner">
          <h3 className="novelty-title">Новинки</h3>
          <ul className="novelty-items">{noveltiesList}</ul>
        </div>
      </div>
    </section>
  );
};

export default HomeNovelty;
