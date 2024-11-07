// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { catchError } from 'rxjs/operators';
// import { of } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   // NOTE : THE ACCOUNT USING WHICH i CREATED THE MOCK API resource IS : anushreepal.16027@gmail.com
//   private baseUrl = 'https://67291b3c6d5fa4901b6c2df3.mockapi.io/signupdetails'; 

//   constructor(private http: HttpClient) {}

//   login(username: string, password: string): Promise<boolean> {
//     return this.http.get<any[]>(`${this.baseUrl}?username=${username}&password=${password}`)
//       .toPromise()   // Convert observable to promise
//       .then((users) => {  // promise mein .then .catch
//         if (users && users.length > 0) {
//           localStorage.setItem('user', JSON.stringify(users[0]));
//           return true; 
//         }
//         return false; 
//       })
//       .catch(() => false); 
//   }

//   signup(username: string, password: string): Promise<boolean> {
//     const user = { username, password };
//     return this.http.post<any>(this.baseUrl, user)
//       .toPromise()  // it shows that toPromise is desprecated but currently i can find only this method for obs to promise conversion
//       .then((newUser) => {
//         localStorage.setItem('user', JSON.stringify(newUser));
//         return true; // Signup successful
//       })
//       .catch(() => false); // Handle error case
//   }
// }





import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'https://67291b3c6d5fa4901b6c2df3.mockapi.io/signupdetails';

  constructor(private http: HttpClient) {}

  //Check if localStorage is available VERY IMPORTANT GIVING LOCALSTORAGE NOT DEFINED ERROR..
  private isLocalStorageAvailable(): boolean {
    try {
      const testKey = 'test';
      localStorage.setItem(testKey, 'test');
      localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      return false;
    }
  }

  //login method  MockAPI
  async login(username: string, password: string): Promise<boolean> {
    try {
      const users = await lastValueFrom(this.http.get<any[]>(`${this.baseUrl}?username=${username}&password=${password}`));
      if (users && users.length > 0) {
        if (this.isLocalStorageAvailable()) {
          localStorage.setItem('user', JSON.stringify(users[0]));
        }
        return true;
      }
      return false;
    } catch (error) {
      console.error("Login error:", error);
      return false;
    }
  }

  //signup method post request to  MockAPI
  async signup(username: string, password: string): Promise<boolean> {
    const user = { username, password };
    try {
      const newUser = await lastValueFrom(this.http.post<any>(this.baseUrl, user));
      if (this.isLocalStorageAvailable()) {
        localStorage.setItem('user', JSON.stringify(newUser));
      }
      return true;
    } catch (error) {
      console.error("Signup error:", error);
      return false;
    }
  }

  isAuthenticated(): boolean {
    if (this.isLocalStorageAvailable()) {
      return !!localStorage.getItem('user');
    }
    return false;
  }

  
}

// the bove is a common auth service template