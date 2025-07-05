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
  isError: boolean;
  errorMessage: string;
  setError: (message: string) => Promise<void>;
  clearError: () => void;
  isAuthenticated: boolean;
  user: User | null;
  login: (authCredentials: AuthCredentials) => Promise<void>;
  logout: () => void;
}
