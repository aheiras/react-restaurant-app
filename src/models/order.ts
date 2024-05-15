import { MenuItem } from "./menu";

export interface Order {
    id: number;
    items: OrderItem[];
  }
  
  export interface OrderItem {
    menuItem: MenuItem;
    quantity: number;
  }
  