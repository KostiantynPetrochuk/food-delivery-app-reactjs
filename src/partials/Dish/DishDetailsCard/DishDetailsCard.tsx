import "./DishDetailsCard.scss";

type DishDetailsCardPropsType = {
  imagePath: string;
  name: string;
  weight: number;
  ingredients: string;
  price: number;
};

const DishDetailsCard = (props: DishDetailsCardPropsType): JSX.Element => {
  const { imagePath, name, weight, ingredients, price } = props;

  return (
    <section className="dish-details">
      <div className="container">
        <div className="dish-details-inner">
          <div className="dish-card">
            <div className="dish-card-img-inner">
              <img className="dish-card__img" src={imagePath} alt={""} />
            </div>
            <div className="dish-card-details">
              <div className="dish-card-top">
                <span className="dish-card__weight">{weight}г</span>
                <span className="dish-card__name">{name}</span>
              </div>
              <div className="dish-card-mid">
                <span className="dish-card__ingredients">{ingredients}</span>
              </div>
              <div className="dish-card-bot">
                <div className="dish-card-total">
                  <span className="dish-card-total-price">{price}грн</span>
                  <div className="dish-card-total__counter">
                    <div className="dish-card-total__remove">-</div>
                    <div className="dish-card-total__count">3</div>
                    <div className="dish-card-total__add">+</div>
                  </div>
                </div>
                <div className="dish-card-total-button-inner">
                  <button className="dish-card-total__button">
                    Додати в кошик
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DishDetailsCard;
