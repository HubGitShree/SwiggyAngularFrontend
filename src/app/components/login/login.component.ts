import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    console.log('Login attempt:', this.username, this.password);
    this.authService.login(this.username, this.password).then((success) => {
      if (success) {
        this.router.navigate(['/home']);
      } else {
        alert('Login failed. Please check your credentials.');
      }
    });
  }
}