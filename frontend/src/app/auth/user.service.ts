import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { UserProfile } from './user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  private baseUrl = '/api/v1/users';

  constructor(private http: HttpClient) {}

  // Gets user profile from server
  getProfile() {
    return this.http.get<UserProfile>(`${this.baseUrl}/profile`);
  }
}
