export interface MenuItem {
    id: number;
    name: string;
    description: string;
    price: number;
    categoryId: number;
    image: string;
  }
  
  export interface MenuCategory {
    id: number;
    name: string;
    image: string;
  }