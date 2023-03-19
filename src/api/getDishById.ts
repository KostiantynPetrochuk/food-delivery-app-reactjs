import { DishT } from "../pages/Category/Category";
import { API_URL, API_PORT } from "../env";

const getDishById = async (
  dishId: string | undefined
): Promise<DishT | null> => {
  if (!dishId) return null;

  const apiUrl: string = `${API_URL}:${API_PORT}`;

  const queryString: string = `${apiUrl}/api/dish/${dishId}`;

  const res: Response = await fetch(queryString);

  if (!res.ok) throw new Error("failed to fetch data");

  return res.json();
};

export default getDishById;
