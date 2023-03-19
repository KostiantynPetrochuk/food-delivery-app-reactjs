import "./OrderingSteps.scss";

const OrderingSteps = (): JSX.Element => {
  return (
    <div className="orderingSteps">
      <h3 className="orderingSteps__title">Кошик</h3>
      <div className="orderingSteps-wrapper">
        <div className="orderingSteps-step _active">
          <span className="orderingSteps-step__item">1</span>
          <span className="orderingSteps-step__item">Кошик</span>
        </div>
        <span className="orderingSteps__divider">- - - - - -</span>
        <div className="orderingSteps-step">
          <span className="orderingSteps-step__item">2</span>
          <span className="orderingSteps-step__item">Оформлення</span>
        </div>
        <span className="orderingSteps__divider">- - - - - -</span>
        <div className="orderingSteps-step">
          <span className="orderingSteps-step__item">3</span>
          <span className="orderingSteps-step__item">Прийнято</span>
        </div>
      </div>
    </div>
  );
};

export default OrderingSteps;
