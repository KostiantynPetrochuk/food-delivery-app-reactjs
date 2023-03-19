import "./HomeEventsItem.scss";

interface HomeEventsItemPropsType {
  imagePath: string;
}

const HomeEventsItem = (props: HomeEventsItemPropsType): JSX.Element => {
  const { imagePath } = props;

  return (
    <li className="events-list-item">
      <a href="#" className="events-list-item__link">
        <img className="events-list-item__img" src={imagePath} alt={""} />
      </a>
    </li>
  );
};

export default HomeEventsItem;
