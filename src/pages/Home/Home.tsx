import { useEffect, useState } from "react";
import BreadCrumbs from "../../components/BreadCrumbs";
import Spinner from "../../components/Spinner";
import {
  HomeEvents,
  HomeInfo,
  HomeNovelty,
  HomeDishes,
} from "../../partials/Home";

import getHomePageData from "../../api/getHomePageData";
import { DishT } from "../Category/Category";

import "./Home.scss";

export type EventT = {
  _id: string;
  imagePath: string;
  title: string;
  body: string;
  __v: number;
};

type HomePageDataType = {
  novelties: DishT[];
  ramen: DishT[];
  pizza: DishT[];
  latestEvents: EventT[];
};

const Home = (): JSX.Element => {
  const [homePageData, setHomePageData] = useState<HomePageDataType>();

  useEffect(() => {
    getHomePageData()
      .then((data) => {
        setHomePageData(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return homePageData ? (
    <main className="main">
      <BreadCrumbs pathes={[{ path: "/", name: "Головна" }]} />
      <HomeNovelty novelties={homePageData?.novelties} />
      <HomeDishes pizza={homePageData.pizza} ramen={homePageData.ramen} />
      <HomeEvents events={homePageData.latestEvents} />
      <HomeInfo />
    </main>
  ) : (
    <Spinner />
  );
};

export default Home;
