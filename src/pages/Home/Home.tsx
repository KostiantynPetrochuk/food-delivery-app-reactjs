import BreadCrumbs from "../../components/BreadCrumbs";
import {
  HomeEvents,
  HomeInfo,
  HomeNovelty,
  HomeDishes,
} from "../../partials/Home";

import "./Home.scss";

const Home = (): JSX.Element => {
  return (
    <main className="main">
      <BreadCrumbs />
      <HomeNovelty />
      <HomeDishes />
      <HomeEvents />
      <HomeInfo />
    </main>
  );
};

export default Home;
