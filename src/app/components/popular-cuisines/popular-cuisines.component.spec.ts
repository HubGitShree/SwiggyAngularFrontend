import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularCuisinesComponent } from './popular-cuisines.component';

describe('PopularCuisinesComponent', () => {
  let component: PopularCuisinesComponent;
  let fixture: ComponentFixture<PopularCuisinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularCuisinesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularCuisinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
