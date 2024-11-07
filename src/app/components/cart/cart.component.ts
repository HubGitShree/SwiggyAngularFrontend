// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { CartService } from '../../services/cart.service'; // Import CartService

// @Component({
//   selector: 'app-cart',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './cart.component.html',
//   styleUrls: ['./cart.component.css']
// })
// export class CartComponent implements OnInit {
//   cartItems: any[] = [];
//   total: number = 0;

//   constructor(private cartService: CartService) {} // Inject CartService

//   ngOnInit(): void {
//     this.cartItems = this.cartService.getCartItems();
//     this.total = this.cartService.getTotal();
//   }
// }




// testing
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  total: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotal();
  }

  increaseQuantity(item: any): void {
    item.quantity++;
    this.cartService.updateCartItem(item.id, item.quantity);
    this.calculateTotal();
  }

  decreaseQuantity(item: any): void {
    if (item.quantity > 1) {
      item.quantity--;
      this.cartService.updateCartItem(item.id, item.quantity);
      this.calculateTotal();
    }
  }

  calculateTotal(): void {
    this.total = this.cartService.getTotal();
  }
}