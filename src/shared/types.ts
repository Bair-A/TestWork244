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

export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  sku: string;
  weight: number;
  thumbnail: string;
  images: string[];
}

export interface ProductsState {
  products: Product[];
  isLoading: boolean;
  error: string | null;
  fetchProducts: (
    token: string,
    limit?: number,
    skip?: number
  ) => Promise<void>;
}
