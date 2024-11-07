import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from '../../services/menu.service'; 
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems: any[] = [];
  menuId: string | null = null;

  // for button content change once the menu item is added to cart
  buttonText: {  [key: string]: string } = {};

  constructor(private route: ActivatedRoute, private menuService: MenuService,  private cartService: CartService) {} // Inject ActivatedRoute and MenuService and CartService

  ngOnInit(): void {
    this.menuId = this.route.snapshot.paramMap.get('id'); // This method ( see w3 schools for reference ) the menu ID from the route
    this.menuItems = this.menuService.getMenuItems();   // 1st this menuItems mein items go and then the htmk renders
    this.menuItems.forEach(item => {
      this.buttonText[item.id] = 'Add'; // Initialize button text to 'Add'
    });
  }

  addToCart(item: any): void {
    this.cartService.addToCart(item);
    this.buttonText[item.id] = 'Added. See Cart';

    
  }
}