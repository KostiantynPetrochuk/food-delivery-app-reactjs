import HomeEventsItem from "../HomeEventsItem";
import "./HomeEvents.scss";

const HomeEvents = (): JSX.Element => {
  return (
    <section className="events">
      <div className="container">
        <h3 className="events-title">
          <span className="events-title__item">Наші</span>
          <span className="events-title__item">акції</span>
        </h3>
        <ul className="events-list">
          <HomeEventsItem imagePath="/img/event_01.jpg" />
          <HomeEventsItem imagePath="/img/event_02.jpg" />
          <HomeEventsItem imagePath="/img/event_03.png" />
          <HomeEventsItem imagePath="/img/event_04.png" />
        </ul>
        <div className="events-list-button-wrap">
          <button className="events-list-item__button">Всі акції</button>
        </div>
      </div>
    </section>
  );
};

export default HomeEvents;
