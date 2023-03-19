import "./HeaderInfo.scss";

interface HeaderInfoPropsType {
  city: string;
  deliveryTime: string;
}

const HeaderInfo = (props: HeaderInfoPropsType): JSX.Element => {
  const {city, deliveryTime} = props;

  return (
    <div className="header-info">
      <div className="header-info-city">
        <span>Доставка їжі</span>
        <span>{city}</span>
      </div>
      <div className="header-info-time">
        <span>Час доставки</span>
        <span></span>
        <span>від {deliveryTime} хвилин</span>
      </div>
    </div>
  );
};

export default HeaderInfo;