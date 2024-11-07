// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class CartService {
//   private cartItems: any[] = [];

//   addToCart(item: any): void {
//     this.cartItems.push(item);
//   }

//   getCartItems(): any[] {
//     return this.cartItems;
//   }

//   getTotal(): number {
//     return this.cartItems.reduce((total, item) => total + item.price, 0);
//   }
// }


  ////////////////////////  with local storage /////////////////////  

  //  without localstorage, cart value is reset with each session load

// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class CartService {
//   private cartItems: any[] = [];
//   // private isAddedtoCart = false;

//   constructor() {
//     this.loadCart();
//   }

//   private isLocalStorageAvailable(): boolean {
//     try {
//       const testKey = 'test';
//       localStorage.setItem(testKey, 'test');
//       localStorage.removeItem(testKey);
//       return true;
//     } catch (e) {
//       return false;
//     }
//   }

//   private saveCart(): void {
//     if (this.isLocalStorageAvailable()) {
//       localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
//     }
//   }

//   private loadCart(): void {
//     if (this.isLocalStorageAvailable()) {
//       const savedCart = localStorage.getItem('cartItems');
//       if (savedCart) {
//         this.cartItems = JSON.parse(savedCart);
//       }
//     }
//   }

//   addToCart(item: any): void {
//     this.cartItems.push(item);
//     // this.isAddedtoCart = true;
//     this.saveCart();
//   }

//   getCartItems(): any[] {
//     return this.cartItems;
//   }

//   getTotal(): number {
//     return this.cartItems.reduce((total, item) => total + item.price, 0);
//   }
// }


// TESTING
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];

  addToCart(item: any): void {
    const existingItem = this.cartItems.find(i => i.id === item.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cartItems.push({ ...item, quantity: 1 });
    }
    // this.cartItems.push(item);    gives NaN in ui
    this.saveCart();
  }

  updateCartItem(itemId: string, quantity: number): void {
    const item = this.cartItems.find(i => i.id === itemId);
    if (item) {
      item.quantity = quantity;
      if (quantity === 0) {
        this.cartItems = this.cartItems.filter(i => i.id !== itemId);
      }
      this.saveCart();
    }
  }

  getCartItems(): any[] {
    return this.cartItems;
  }

  getTotal(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  private saveCart(): void {
    if (this.isLocalStorageAvailable()) {
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    }
  }

  private isLocalStorageAvailable(): boolean {
    try {
      const test = '__localStorageTest__';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  }
}