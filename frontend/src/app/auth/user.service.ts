import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

import { UserProfile, User } from './user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  private baseUrl = '/api/v1/users';

  constructor(private http: HttpClient, private auth: AuthService) {}

  // Gets user profile from server
  getProfile() {
    return this.http.get<UserProfile>(`${this.baseUrl}/profile`);
  }

  // Update user profile without new password
  updateUser(email: string, name: string) {
    this.http
      .post<User>(`${this.baseUrl}/profile`, { email, name })
      .subscribe((user) => {
        this.auth.user.next(user);
      });
  }

  // Update profile, including password
  updateUserAndPassword(
    email: string,
    password: string,
    name: string,
    newPassword: string
  ) {
    this.http
      .post<User>(`${this.baseUrl}/profile`, {
        email,
        password,
        name,
        newPassword,
      })
      .subscribe((user) => {
        this.auth.user.next(user);
      });
  }
}
