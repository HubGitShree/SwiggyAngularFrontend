import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private favoriteItems = [
    {
      id: 1,
      name: 'Chilli Garlic Wings',
      description: 'Crispy wings coated with chili garlic sauce',
      restaurant: 'Seoul Fried Chicken',
      imageUrl: 'syed-f-hashemi-p91GLhQv35o-unsplash.jpg'
    },
    {
      id: 2,
      name: 'Teriyaki Wings',
      description: 'Sweet and savory wings with teriyaki glaze',
      restaurant: 'Tokyo Grill',
      imageUrl: 'cristi-ursea-FVqaOl-Ck_w-unsplash.jpg'
    },
    {
      id: 3,
      name: 'Paneer Tikka',
      description: 'Spicy grilled paneer cubes',
      restaurant: 'Indian Spice',
      imageUrl: 'rupa-venketa-vardhan-85gaOsWNsHo-unsplash.jpg'
    }
  ];

  getFavoriteItems() {
    return this.favoriteItems;
  }
}
