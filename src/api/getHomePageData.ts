import { API_URL } from "../env";

const getHomePageData = async () => {
  const apiUrl: string = `${API_URL}`;
  console.log("API_URL", API_URL);

  const queryString: string = `${apiUrl}/api/homePage/`;
  console.log("queryString", queryString);

  const res: Response = await fetch(queryString, {
    method: "GET",
  });

  if (!res.ok) throw new Error("failed to fetch data");

  return res.json();
};

export default getHomePageData;
