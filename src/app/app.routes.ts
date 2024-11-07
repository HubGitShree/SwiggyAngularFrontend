import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { MenuComponent } from './components/menu/menu.component';
import { CartComponent } from './components/cart/cart.component'; 
import { AuthGuard } from './guards/auth.guard';
import { FavoritesComponent } from './pages/favorites/favorites.component';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
 
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'menu/:id', component: MenuComponent },
  { path: 'cart', component: CartComponent }, 
  { path: 'favorites', component: FavoritesComponent }
];