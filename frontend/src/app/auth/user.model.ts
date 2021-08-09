export interface User {
  _id: string;
  name: string;
  email: string;
  isAdmin: boolean;
  token: string;
  expiration: number;
}

export interface UserProfile {
  _id: string;
  name: string;
  email: string;
  isAdmin: boolean;
}
