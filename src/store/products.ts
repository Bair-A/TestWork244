import { PRODUCTS_PATH } from '@/constants';
import axios from 'axios';
import { persist } from 'zustand/middleware';
import { create } from 'zustand/react';

import { ProductsState } from '@/shared/types';

const useProductsStore = create<ProductsState>()(
  persist(
    set => ({
      isLoading: false,
      error: null,
      fetchProducts: async (token?: string, limit = 12, skip = 0) => {
        set({ isLoading: true, error: null });
        try {
          const headers = token ? { Authorization: `Bearer ${token}` } : {};

          const response = await axios.get(PRODUCTS_PATH, {
            params: { limit, skip },
            headers
          });

          console.log(response, 'ПРОДУКТЫ');

          set({ products: response.data.products, isLoading: false });
        } catch (error) {
          set({
            error:
              axios.isAxiosError(error) && error.response
                ? `Error ${error.response.status}: ${error.response.statusText}`
                : (error as Error).message,
            isLoading: false
          });
        }
      },
      products: []
    }),
    {
      name: 'products-storage'
    }
  )
);

export const useProducts = () => useProductsStore(state => state.fetchProducts);

export const useIsLoading = () => useProductsStore(state => state.isLoading);

export const useProductsList = () => useProductsStore(state => state.products);
