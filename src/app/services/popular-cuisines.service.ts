import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CuisinesService {
  // array of cuisine objects
  private cuisines = [
    { name: 'Pizzas', imageUrl: 'pizzas.avif' },
    { name: 'Biryani', imageUrl: 'biryani.avif' },
    { name: 'Burgers', imageUrl: 'burger.avif' },
    { name: 'Rolls', imageUrl: 'rolls.avif' },
    { name: 'Momos', imageUrl: 'momos.avif' },
    { name: 'Chinese', imageUrl: 'chinese.avif' },
    { name: 'Samosa', imageUrl: 'samosa.avif' },
  ];

  // now u can get the cuisines
  getCuisines() {
    return this.cuisines;
  }
}
