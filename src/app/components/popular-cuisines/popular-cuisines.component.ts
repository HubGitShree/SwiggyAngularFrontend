import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; // Import Router
import { CuisinesService } from '../../services/popular-cuisines.service';

@Component({
  selector: 'app-popular-cuisines',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popular-cuisines.component.html',
  styleUrls: ['./popular-cuisines.component.css']
})
export class PopularCuisinesComponent implements OnInit {
  cuisines: { name: string; imageUrl: string }[] = [];

  constructor(private cuisinesService: CuisinesService, private router: Router) {} // Inject Router

  ngOnInit(): void {
    this.cuisines = this.cuisinesService.getCuisines();
  }

  navigateToMenu(cuisineName: string): void {
    this.router.navigate(['/menu', cuisineName]);
  }
}