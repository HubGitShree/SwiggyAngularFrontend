import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSignup() {
    console.log('Signup attempt:', this.username, this.password);
    this.authService.signup(this.username, this.password).then((success) => {
      if (success) {
        this.router.navigate(['/home']);
      } else {
        alert('Signup failed. Please try again.');
      }
    });
  }
}