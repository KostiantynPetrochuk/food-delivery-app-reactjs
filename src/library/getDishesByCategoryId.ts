import { Dish } from "../pages/Category/Category";
import { API_URL, API_PORT } from "../env";

const getDishesByCategoryId = async (categoryId: string): Promise<Dish[]> => {
  const apiUrl: string = `${API_URL}:${API_PORT}`;

  const queryString: string = `${apiUrl}/api/dish/byDishCategory/${categoryId}`;

  const res: Response = await fetch(queryString);

  if (!res.ok) throw new Error("failed to fetch data");

  return res.json();
};

export default getDishesByCategoryId;
