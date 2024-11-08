import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedRestaurantsComponent } from './featured-restaurants.component';

describe('FeaturedRestaurantsComponent', () => {
  let component: FeaturedRestaurantsComponent;
  let fixture: ComponentFixture<FeaturedRestaurantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedRestaurantsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedRestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
