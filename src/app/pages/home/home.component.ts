import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FeaturedRestaurantsComponent } from '../../components/featured-restaurants/featured-restaurants.component';
import { PopularCuisinesComponent } from '../../components/popular-cuisines/popular-cuisines.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FeaturedRestaurantsComponent, PopularCuisinesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
