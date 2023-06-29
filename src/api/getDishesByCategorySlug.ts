import { DishT } from "../pages/Category/Category";
import { API_URL } from "../env";

const getDishesByCategorySlug = async (
  slug: string | undefined
): Promise<DishT[]> => {
  if (!slug) return [];

  const apiUrl: string = `${API_URL}`;

  const queryString: string = `${apiUrl}/api/dish/byDishCategorySlug/${slug}`;

  const res: Response = await fetch(queryString, {
    method: "POST",
  });

  if (!res.ok) throw new Error("failed to fetch data");

  return res.json();
};

export default getDishesByCategorySlug;
