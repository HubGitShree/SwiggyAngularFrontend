// you know that services are used for business logic and data manipulation. Here we have created a service called RestaurantService. This service has a method called getRestaurants() which returns the list of restaurants. This list of restaurants is hardcoded in the service itself. In a real-world scenario, you will get this list from the backend API.
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class RestaurantService {

  constructor() { }


  private restaurants = [
    { id: 1, name: "Domino's Pizza", cuisine: "Pizza, Italian, Desserts", location: "Bistupur", rating: 4.4, deliveryTime: "20-25 mins", discount: "20% OFF Upto ₹50",  imageUrl: 'dominoes.avif' },
    { id: 2, name: "KFC", cuisine: "Burgers, Fast Food", location: "Sakchi", rating: 4.4, deliveryTime: "20-25 mins", discount: "30% OFF Upto ₹75" ,  imageUrl: 'kfc.avif'  },
    { id: 3, name: "Bikkgane Biryani", cuisine: "Biryani, South Indian", location: "Sakchi", rating: 4.5, deliveryTime: "25-30 mins", discount: "50% OFF Upto ₹100" , imageUrl: 'biryanirestaurant.avif'},
    { id: 4, name: "The Good Bowl", cuisine: "North Indian, Pizzas", location: "Bistupur", rating: 4.5, deliveryTime: "20-25 mins", discount: "Items at ₹149", imageUrl : 'lily-banse-yA8A4a92JiY-unsplash.jpg' },
    { id: 5, name: "NIC Ice Creams", cuisine: "Ice Cream, Desserts", location: "Bistupur", rating: 4.7, deliveryTime: "15-20 mins", discount: "50% OFF Upto ₹100" , imageUrl : 'emma-houghton-zxwUgO6U47A-unsplash.jpg'},
    { id: 6, name: "Pizza Hut", cuisine: "Pizza, Fast Food", location: "Bistupur", rating: 4.2, deliveryTime: "20-25 mins", discount: "20% OFF" , imageUrl :'henrique-felix-dMFIBmDYaIQ-unsplash.jpg'},
    { id: 7, name: "Burger King", cuisine: "Burgers, Fast Food", location: "Sakchi", rating: 4.3, deliveryTime: "20-25 mins", discount: "30% OFF" , imageUrl : 'kirsty-tg-pKo6tevKg4c-unsplash.jpg'},
    { id: 8, name: "Subway", cuisine: "Sandwiches, Salads", location: "Kadma", rating: 4.4, deliveryTime: "15-20 mins", discount: "10% OFF" , imageUrl : 'julien-sarazin-n3mK4n_nF7g-unsplash.jpg'},
    { id: 9, name: "Cafe Coffee Day", cuisine: "Cafe, Beverages", location: "Sonari", rating: 4.1, deliveryTime: "25-30 mins", discount: "Free Delivery" , imageUrl : 'toa-heftiba-BKfTplN3J5o-unsplash.jpg'},
    { id: 10, name: "McDonald's", cuisine: "Burgers, Fast Food", location: "Bistupur", rating: 4.2, deliveryTime: "20-25 mins", discount: "Buy 1 Get 1 Free" , imageUrl : 'tyson-iXA1EBiOrao-unsplash.jpg'},
  ];

  getRestaurants() {
    return this.restaurants;
  }
}

