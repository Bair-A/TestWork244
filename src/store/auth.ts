import { AUTH_PATH } from '@/constants';
import axios from 'axios';
import { persist } from 'zustand/middleware';
import { create } from 'zustand/react';

import { AuthState } from '@/shared/types';

const useAuthStore = create<AuthState>()(
  persist(
    set => ({
      user: null,
      isAuthenticated: false,
      login: async authCredentials => {
        try {
          const response = await axios.post(
            AUTH_PATH,
            {
              username: authCredentials.username,
              password: authCredentials.password,
              expiresInMins: 30
            },
            {
              headers: { 'Content-Type': 'application/json' },
              withCredentials: true
            }
          );
          set({ user: response.data, isAuthenticated: true });
        } catch (error) {
          console.log(error, 'Ошибка авторизации в useAuthStore');
        }
      },
      logout: () => set({ user: null, isAuthenticated: false })
    }),
    {
      name: 'auth-storage'
    }
  )
);

export const useIsAuthenticated = () =>
  useAuthStore(state => state.isAuthenticated);

export const useUser = () => useAuthStore(state => state.user);

export const useLogin = () => useAuthStore(state => state.login);

export const useLogout = () => useAuthStore(state => state.logout);
