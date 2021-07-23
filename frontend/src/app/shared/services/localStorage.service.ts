import { Injectable } from '@angular/core';
import { User } from 'src/app/auth/user.model';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private USER_IDENTIFIER = 'sam-app-user';

  setUserData(user: User) {
    try {
      const serializedUser = JSON.stringify(user);
      localStorage.setItem(this.USER_IDENTIFIER, serializedUser);
    } catch (error) {
      console.error(error);
    }
  }

  getUserData(): User | null {
    let userData;

    try {
      userData = localStorage.getItem(this.USER_IDENTIFIER);
    } catch (error) {
      console.error(error);
    }

    if (userData) {
      return JSON.parse(userData);
    } else {
      return null;
    }
  }
}
