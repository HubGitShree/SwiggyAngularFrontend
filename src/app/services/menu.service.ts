import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menuItems = [
    { id: 1, name: 'Margherita Pizza', price: 200, description: 'Classic Margherita with fresh basil', imageUrl: 'lily-banse-yA8A4a92JiY-unsplash.jpg' },
    { id: 2, name: 'Veg Biryani', price: 150, description: 'Aromatic rice with fresh veggies', imageUrl: 'emma-houghton-k4cTDcGE6Bo-unsplash.jpg' },
    { id: 3, name: 'Chicken Burger', price: 120, description: 'Juicy grilled chicken patty', imageUrl: 'henrique-felix-dMFIBmDYaIQ-unsplash.jpg' },
    { id: 4, name: 'Paneer Tikka', price: 180, description: 'Spicy grilled paneer cubes', imageUrl: 'hermes-rivera-KiIBo_KmQqw-unsplash.jpg' },
    { id: 5, name: 'Samosa', price: 20, description: 'Crispy fried samosa with potato filling', imageUrl: 'julien-sarazin-n3mK4n_nF7g-unsplash.jpg' },
    { id: 6, name: 'Pasta Alfredo', price: 250, description: 'Creamy Alfredo pasta with mushrooms', imageUrl: 'tyson-iXA1EBiOrao-unsplash.jpg' },
    { id: 7, name: 'Caesar Salad', price: 100, description: 'Fresh romaine lettuce with Caesar dressing', imageUrl: 'toa-heftiba-BKfTplN3J5o-unsplash.jpg' },
    { id: 8, name: 'Grilled Sandwich', price: 80, description: 'Grilled sandwich with cheese and veggies', imageUrl: 'mark-deyoung-mjcJ0FFgdWI-unsplash.jpg' },
    { id: 9, name: 'Chocolate Cake', price: 150, description: 'Rich chocolate cake with ganache', imageUrl: 'emma-houghton-zxwUgO6U47A-unsplash.jpg' },
    { id: 10, name: 'Lemonade', price: 50, description: 'Refreshing lemonade with mint', imageUrl: 'kirsty-tg-pKo6tevKg4c-unsplash.jpg' }
  ];

  getMenuItems() {
    return this.menuItems;
  }
}
