import { MenuCategory, MenuItem } from "../models/menu";
import { initialMenuCategories, initialMenuItems } from "../mocks/menuData";

// Simulated function to fetch categories using Axios
const fetchCategories = (): Promise<MenuCategory[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(initialMenuCategories);
    }, 1000);
  });
};

// Simulated function to fetch items using Axios
const fetchAllItems = (): Promise<MenuItem[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(initialMenuItems);
      }, 1000);
    });
  };

// Simulated function to fetch items by category ID using Axios
const fetchItemsByCategoryId = (categoryId: number): Promise<MenuItem[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filteredItems = initialMenuItems.filter(item => item.categoryId === categoryId);
        resolve(filteredItems);
      }, 1000);
    });
  };

  // Simulated function to fetch randomly 3 items using Axios
const fetchFeaturedItems = (): Promise<MenuItem[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const shuffledItems = initialMenuItems.sort(() => 0.5 - Math.random());
        const randomItems = shuffledItems.slice(0, 3);
        resolve(randomItems);
      }, 1000);
    });
  };

  const simulatePayment = (): Promise<void> => {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        // Simulate payment success or failure randomly
        const isSuccess = Math.random() < 0.8; // 80% success rate
        if (isSuccess) {
          resolve();
        } else {
          reject(new Error('Payment failed'));
        }
      }, 2000); // Simulate 2 seconds delay
    });
  };
  
  // Export the functions
  export { fetchCategories, fetchAllItems, fetchItemsByCategoryId, fetchFeaturedItems, simulatePayment };