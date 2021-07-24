import { Injectable } from '@angular/core';
import { User } from 'src/app/auth/user.model';
import { PortableMaintenance } from 'src/app/maintenance/models/portable-maintenance.model';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private USER_IDENTIFIER = 'sam-app-user';
  private PORTABLE_IDENTIFIER = 'sam-app-portable';

  //
  // Local storage interaction for user data.
  //
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

  //
  // Local storage interaction for portable maintenance data.
  // Used to save unfinished maintenance data or load when connection was lost
  //
  storePortableData(portableData: PortableMaintenance) {
    try {
      const serializedPortableMaint = JSON.stringify(portableData);
      localStorage.setItem(this.PORTABLE_IDENTIFIER, serializedPortableMaint);
    } catch (error) {
      console.error(error);
    }
  }

  loadPortableDAta(): PortableMaintenance | null {
    let portableData;

    try {
      portableData = localStorage.getItem(this.PORTABLE_IDENTIFIER);
    } catch (error) {
      console.error(error);
    }

    if (portableData) {
      return JSON.parse(portableData);
    } else {
      return null;
    }
  }
}
