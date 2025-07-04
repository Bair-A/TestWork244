export interface AuthCredentials {
  username: string;
  password: string;
}

export interface User {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  login: (authCredentials: AuthCredentials) => void;
  logout: () => void;
}
