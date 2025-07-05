import { AUTH_PATH } from '@/constants';
import axios, { AxiosError } from 'axios';
import { persist } from 'zustand/middleware';
import { create } from 'zustand/react';

import { AuthState } from '@/shared/types';

const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      isError: false,
      errorMessage: '',
      setError: async (message: string) => {
        set({
          isError: true,
          errorMessage:
            message || 'Unresolved authentication error please try again'
        });
      },
      clearError: () => {
        set({ isError: false, errorMessage: '' });
      },
      login: async authCredentials => {
        if (authCredentials.username.length < 3) {
          set({
            isError: true,
            errorMessage: 'Minimum 3 characters in user name field'
          });
          return;
        } else if (authCredentials.username.length < 3) {
          set({
            isError: true,
            errorMessage: 'Minimum 3 characters in user password field'
          });
          return;
        }

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
          const err = error as AxiosError<any>;
          const message =
            err?.response?.data?.message || err?.message || 'Unknown error';
          await get().setError(message);
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

export const useIsAuthError = () => useAuthStore(state => state.isError);

export const useAuthErrorMessage = () =>
  useAuthStore(state => state.errorMessage);
export const useClearError = () => useAuthStore(state => state.clearError);
