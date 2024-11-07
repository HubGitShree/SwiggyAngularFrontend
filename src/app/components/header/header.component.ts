import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule ],
  
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

      cartItems : any[] = []   // this cart items is exclusive to header component

      constructor( private cartService : CartService ) {}   // Do not forget the curly braces, giving error otherwise

      ngOnInit(): void {
       
        this.cartItems = this.cartService.getCartItems();   // 1st this cartItems mein items go and then the htmk renders
      }


}
