import { MenuCategory } from "../models/menu";
import { initialMenuCategories } from "../mocks/menuData";

// Simulated function to fetch categories using Axios
const fetchCategories = (): Promise<MenuCategory[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(initialMenuCategories);
    }, 1000);
  });
};

export default fetchCategories;
