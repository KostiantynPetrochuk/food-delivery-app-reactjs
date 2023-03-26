import { DishT } from "../pages/Category/Category";
import { API_URL, API_PORT } from "../env";

const getDishBySlug = async (
  slug: string | undefined
): Promise<DishT | null> => {
  if (!slug) return null;

  const apiUrl: string = `${API_URL}:${API_PORT}`;

  const queryString: string = `${apiUrl}/api/dish/bySlug/${slug}`;

  const res: Response = await fetch(queryString, {
    method: "POST",
  });

  if (!res.ok) throw new Error("failed to fetch data");

  return res.json();
};

export default getDishBySlug;
