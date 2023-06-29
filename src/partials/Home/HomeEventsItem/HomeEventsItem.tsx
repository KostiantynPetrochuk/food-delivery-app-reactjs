import { API_URL } from "../../../env";

import "./HomeEventsItem.scss";

type HomeEventsItemPropsType = {
  imagePath: string;
};

const HomeEventsItem = (props: HomeEventsItemPropsType): JSX.Element => {
  const { imagePath } = props;
  const apiUrl = `${API_URL}`;

  return (
    <li className="events-list-item">
      <a href="#" className="events-list-item__link">
        <img
          className="events-list-item__img"
          src={`${apiUrl}${imagePath}`}
          alt={""}
        />
      </a>
    </li>
  );
};

export default HomeEventsItem;
