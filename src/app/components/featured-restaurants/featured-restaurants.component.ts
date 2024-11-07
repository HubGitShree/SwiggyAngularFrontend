import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../services/restaurant.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-featured-restaurants',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './featured-restaurants.component.html',
  styleUrls: ['./featured-restaurants.component.css']
})
export class FeaturedRestaurantsComponent implements OnInit {
  restaurants: any[] = [];

  constructor(private restaurantService: RestaurantService, private router: Router) {} // Inject Router

  ngOnInit(): void {
    this.restaurants = this.restaurantService.getRestaurants();
  }

  navigateToMenu(restaurantId: number): void {
    this.router.navigate(['/menu', restaurantId]);
  }
}